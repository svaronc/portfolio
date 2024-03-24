import styles from "../style";
import { cardInfo } from "../constants";
import { ProjectCard } from "./ProjectsCard";



const Projects = () => {
  return (
    <section id="projects">
      <div>
        <h2 className={`${styles.heading2} text-center mt-20`}>Projects</h2>
      </div>
      <div className="text-white flex items-center sm:justify-between flex-col m-10">
        {cardInfo.map((info) => (
          <ProjectCard info={info} key={info.id}/>
        ))}
        <div className="absolute z-[0] w-[40%] h-[35%] pink__gradient left-[-680px]" />
      </div>
    </section>
  );
};

export default Projects;