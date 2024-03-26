import styles from "../style";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import StackIcon from "tech-stack-icons";
import Spline from "@splinetool/react-spline";
import { stack } from "../constants";

const Home = () => {
  
  return (
    <div>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-white sm:leading-[100px] leading-[75px]">
              Sebastian Varon <br className="sm:block hidden" /> {` `}
              <span className="text-gradient">
                FullStack Web Developer
              </span>{" "}
              {` `}
            </h1>
          </div>
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <FaGithub className="text-white w-5 h-5 " />
            <p className={`${styles.paragraph} ml-2`}>
              <a
                href="https://github.com/svaronc"
                target="_blank"
                className="text-white hover:text-zinc-600"
              >
                Svaronc
              </a>
            </p>
            <FaLinkedin className="text-white w-5 h-5 ml-2" />
            <p className={`${styles.paragraph} ml-2`}>
              <a
                href="https://www.linkedin.com/in/sebastian-varon-6bb14b2aa/"
                target="_blank"
                className="text-white hover:text-zinc-600"
              >
                Sebastian Varon
              </a>
            </p>
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Passion about coding and creating new things. I love to learn and
            improve the web experience.
          </p>
        </div>
        <div
          className={`flex flex-1 md:my-0 my-10 relative ${styles.flexCenter}`}
        >
          <Spline scene="https://prod.spline.design/W2ZgKDWMcVGhsfap/scene.splinecode" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </section>
      <div className="slider">
        <div className="slide-track ">
          {stack.map((item, index) => (
            <StackIcon key={index} name={item} className="icon" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
