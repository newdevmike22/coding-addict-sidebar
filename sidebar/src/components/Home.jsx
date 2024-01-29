import { useGlobalContext } from "../context";

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    console.log(openSidebar);

    return (
      <h1>Home</h1>
    )
  };
  
  export default Home;