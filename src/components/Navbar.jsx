import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";  
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // If window width is greater than 760px  set toggle to false
      if (window.innerWidth > 760) {
        setToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="Logo" className="w-[64px] h-[64px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[169x] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${!toggle ? "hidden" : "flex none"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[169x] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
