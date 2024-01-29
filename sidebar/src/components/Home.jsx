import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    console.log(openSidebar);

    return (
      <main className="min-h-[100vh] flex justify-center items-center bg-[#f1f5f9]">
        <button onClick={openSidebar} 
                className="fixed top-8 left-12 text-[2rem] bg-transparent border-transparent text-[#5a91e6] cursor-pointer bounce">
                  <FaBars />
        </button>
        <button onClick={openModal} className="btn">
          show modal
        </button>
      </main>
    )
  };
  
  export default Home;