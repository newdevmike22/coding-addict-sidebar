import logo from "../assets/codingaddict_logo.png";
import { social, links } from "../data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()

    return (
      <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img src={logo} alt="coding addict logo" className="w-[200px] h-auto" />
          <button 
            className="text-[1.75rem] bg-transparent border-transparent cursor-pointer text-[#fa1407]"
            onClick={closeSidebar}>
              <FaTimes className="hover:animate-spin hover:text-[#d40f04]" />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const {id, url, text, icon} = link;

            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="social-links">
          {social.map((link) => {
            const {id, url, icon} = link;

            return (
              <li key={id} className="px-2">
                <a href={url}>
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </aside>
    )
  };
  
  export default Sidebar;