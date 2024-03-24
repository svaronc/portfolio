import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from 'prop-types';
// Modal.js
const Modal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg">
          <AiOutlineCloseCircle onClick={onClose} className="absolute m-2 top-0 right-0 text-red-600 w-[40px] h-[40px] cursor-pointer"></AiOutlineCloseCircle>
        <div className="w-[800px] h-[600px]">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
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