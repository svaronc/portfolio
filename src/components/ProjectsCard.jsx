import StackIcon from "tech-stack-icons";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { useState } from "react";

export const ProjectCard = ({ info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div key={info.id}>
      <div className="card__gradient card lg:card-side shadow-xl mt-12">
        <picture className="aspect-square w-[500px] h-[400px] flex justify-center md:items-center self-center md:ml-5 mt-5 ">
          <source srcSet={info.image.large} media="(min-width: 1024px)" />
          <source srcSet={info.image.medium} media="(min-width: 640px)" />
          <img src={info.image.small} alt={info.title} className="object-cover w-full rounded-lg shadow-md shadow-slate-200" />
        </picture>
        <div className="card-body p-10">
          <h2 className="card-title">{info.title}</h2>
          <p>{info.description}</p>
          <div className="card__stack flex justify-center">
            {info.stack.map((stack) => (
              <StackIcon
                key={stack}
                name={stack}
                className="w-[40px] h-[40px] m-3"
              />
            ))}
          </div>
          <div className="card-actions justify-center md:justify-end">
            <button
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Watch
            </button>
            <a className="btn btn-primary" href={info.repo}>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      {info.video && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoUrl={info.video}
        />
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    video: PropTypes.string.isRequired,
  }).isRequired,
};
