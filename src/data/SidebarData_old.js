import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { FaHospitalUser } from "react-icons/fa";
import LogoutIcon from '@mui/icons-material/Logout';

export const links = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "dashboard"
    },
    {
        title: "Doctors",
        icon: <FaHospitalUser size={ 24 } />,
        link: "doctors"
    },
    {
        title: "Medical Access",
        icon: <FaHospitalUser size={ 24 } />,
        link: "MedicalAccess"
    },
    {
      title: "P.A",
      icon: <GroupIcon />,
      link: "assistants"
  },
    {
        title: "Appointments",
        icon: <EventAvailableIcon />,
        link: "home"
    },
    // {
    //     title: "Settings",
    //     icon: <SettingsIcon />,
    //     link: "/home",
    //     gap: true
    // },
    // {
    //     title: "Logout",
    //     icon: <LogoutIcon />,
    //     link: "/home"
    // },
]

// export default links
