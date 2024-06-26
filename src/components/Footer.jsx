import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 mb-20">
      <hr />
      <div className="text-white flex flex-col items-center justify-center">
        <div className="flex mt-3 gap-3">
          <a href="https://github.com/svaronc">
            <FaGithub className="w-[30px] h-[30px]" />
          </a>
          <a href="https://www.linkedin.com/in/sebastian-varon-6bb14b2aa/">
            <FaLinkedin className="w-[30px] h-[30px]"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
