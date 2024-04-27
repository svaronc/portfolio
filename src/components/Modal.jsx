import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from 'prop-types';
import { useEffect, useRef } from "react";
// Modal.js
const Modal = ({ isOpen, onClose, videoUrl }) => {
  const modalRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  if (!isOpen) return null;

  return (
    <div  className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white p-5 rounded-lg shadow-lg">
          <AiOutlineCloseCircle onClick={onClose} className="absolute m-2 top-0 right-0 text-red-600 w-[40px] h-[40px] cursor-pointer"></AiOutlineCloseCircle>
        <div className="flex items-center justify-center">
          {videoUrl}
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoUrl: PropTypes.string.isRequired
};