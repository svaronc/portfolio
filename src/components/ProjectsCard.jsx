import StackIcon from "tech-stack-icons";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "../style";
import Modal from "./Modal";
import { useState } from "react";

export const ProjectCard = ({ info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false) 
  return (
    <div key={info.id}>
      <h2 className="font-poppins font-semibold xs:text-[28px] text-[20px] text-white w-full mb-3 text-center md:text-left mt-5">
        {info.title}
      </h2>
      <div className="flex md:flex-row flex-col items-center md:items-start justify-between">
        <div className="m-3 md:m-0 self-center">
        <p className="text-pretty md:w-[50%] mb-6">{info.description}</p>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]  w-fit">
            <FaGithub className="text-white w-5 h-5 " />
            <p className={`${styles.paragraph} ml-2`}>
              <a
                href={info.repo}
                target="_blank"
                className="text-white hover:text-zinc-600"
              >
                {info.title}
              </a>
            </p>
          </div>
        </div>
        <div className="card__gradient mt-10 md:m-0 shadow-teal-700 shadow-lg w-[400px] rounded-xl">
          <img src={info.image} className="m-auto rounded-md mt-2 cursor-pointer w-[400px] h-[300px] fit" onClick={() => setIsModalOpen(true)}/>
          <div className="card__stack flex justify-center">
            {info.stack.map((stack) => (
              <StackIcon key={stack} name={stack} className="w-[40px] h-[40px] m-3" />
            ))}
          </div>
        </div>
      </div>
      {info.video && (<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={info.video} />)}
      
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