import { BsEmojiDizzyFill } from "react-icons/bs";
import { useGlobalContext } from "../context";
import stooges from "../assets/Stoogelogo.png"

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();

    return (
      <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
        <div className="bg-white w-[90vw] h-[30vh] rounded-md max-w-[600px] text-center grid place-items-center relative">
          <img src={stooges} alt="3 Stooges" className="object-cover" />
          <button 
            className="absolute top-4 right-4 text-[2rem] bg-transparent border-transparent cursor-pointer text-[#fa1407]"
            onClick={closeModal}
          >
            <BsEmojiDizzyFill className="hover:animate-spin hover:text-[#d40f04]" />
          </button>
        </div>
      </div>
    )
  };
  
  export default Modal;