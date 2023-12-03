import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { FaHospitalUser, FaFilePrescription } from "react-icons/fa";
import { TbSettingsCog } from "react-icons/tb";
import { LiaAdSolid } from "react-icons/lia";
import { MdOutlineEngineering } from "react-icons/md";
import { TbMotorbike } from "react-icons/tb";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "../contexts/UserProvider";
import { ChatBubble, ChatBubbleTwoTone } from "@mui/icons-material";

export const links = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "userdashboard",
  },
  {
    title: "My Ads",
    icon: <LiaAdSolid size={24} />,
    link: "myads",
  },
  {
    title: "Mechanics",
    icon: <MdOutlineEngineering size={24} />,
    link: "mechanics",
  },
  {
    title: "Bike Ads",
    icon: <TbMotorbike size={24} />,
    link: "bikeads",
  },
  {
    title: "Parts Ads",
    icon: <HiOutlineWrenchScrewdriver size={24} />,
    link: "partsads",
  },
  {
    title: "Chat Bot",
    icon: <ChatBubbleTwoTone size={24} />,
    link: "chatbot",
  },
  {
    title: "Settings",
    icon: <TbSettingsCog size={24} />,
    link: "settings",
  },
];

export const userlinks = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "userdashboard",
  },
  {
    title: "My Ads",
    icon: <LiaAdSolid size={24} />,
    link: "myads",
  },
  {
    title: "Mechanics",
    icon: <MdOutlineEngineering size={24} />,
    link: "mechanics",
  },
  {
    title: "Bike Ads",
    icon: <TbMotorbike size={24} />,
    link: "bikeads",
  },
  {
    title: "Parts Ads",
    icon: <HiOutlineWrenchScrewdriver size={24} />,
    link: "partsads",
  },
  {
    title: "Chat Bot",
    icon: <ChatBubbleTwoTone size={24} />,
    link: "chatbot",
  },
  {
    title: "Settings",
    icon: <TbSettingsCog size={24} />,
    link: "settings",
  },
];

export const assistantlinks = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "assistant/dashboard",
  },
  {
    title: "Assigned Doctors",
    icon: <FaHospitalUser size={24} />,
    link: "assistant/assigneddoctors",
  },
  {
    title: "Appointments",
    icon: <EventAvailableIcon />,
    link: "assistant/appointments",
  },
];

// export default links
