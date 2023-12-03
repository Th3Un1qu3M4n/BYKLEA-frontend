import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { links, doctorlinks, assistantlinks } from "../data/SidebarData";
import { useStateContext } from "../contexts/ContextProvider";
import { UserContext } from "../contexts/UserProvider";

const SidebarMechanic = () => {
  const { data } = useContext(UserContext);
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  // console.log('Admin Sidebar')
  // console.log('Active Menu ',activeMenu);

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const logout = () => {
    // clear all items from local storage
    localStorage.clear();
    // navigate to login page
    window.location.href = "/";
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 duration-300";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 duration-300">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-3xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <RiMotorbikeFill className="text-orange-600 text-5xl" />
              <span>BYKLEA</span>
            </Link>
            {/* <TooltipComponent content="Menu" position="BottomCenter"> */}
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
            {/* </TooltipComponent> */}
          </div>
          <div className="mt-10 ">
            {links.map((link) => (
              <NavLink
                to={link.link}
                key={link.title}
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {link.icon}
                <span className="capitalize ">{link.title}</span>
              </NavLink>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={logout}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg mt-10"
            >
              Sign Out
            </button>
          </div>
          {/* ))}
          </div> */}
        </>
      )}
    </div>
  );
};

export default SidebarMechanic;
