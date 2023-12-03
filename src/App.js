import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "./contexts/ContextProvider";
import { UserContext } from "./contexts/UserProvider";
import Login from "./Screens/UserProfiling/Login";

import {
  Navbar,
  Footer,
  Sidebar,
  SidebarMechanic,
  SidebarUser,
  ThemeSettings,
} from "./components";
import AdminDashboard from "./Screens/AdminPanel/AdminDashboard";
import SignUp from "./Screens/UserProfiling/SignUp";
import UserDashboard from "./Screens/Dashboard/UserDashboard";
import MechanicDashboard from "./Screens/Dashboard/MechanicDashboard";
import Setting from "./Screens/Settings/Settings";
import PostAd from "./Screens/Ads/PostAd";
import MyAds from "./Screens/Ads/MyAds";
import AdDetails from "./Screens/Ads/AdDetails";
import Mechanic from "./Screens/Mechanic/Mechanic";
import MechanicDetails from "./Screens/Mechanic/MechanicDetails";
import BikeAds from "./Screens/Ads/BikeAds";
import PartsAds from "./Screens/Ads/PartsAds";
import PartsDetails from "./Screens/Ads/PartsDetails";
import AdComparison from "./Screens/Ads/AdComparison";
import ThankYouCard from "./components/ThankYouCard";
import Chatbot from "./Screens/chatbot/chat";
import SinglePageAd from "./Screens/Ads/singlePageAd";
import SinglePagePart from "./Screens/Ads/SinglePagePart";
import LocationForm from "./components/LocationForm";

function App() {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState();
  const [myProd, setMyProd] = useState();
  const [mechanic, setMechanic] = useState();
  // const [selectedPatient, setSelectedPatient] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const myProd = JSON.parse(localStorage.getItem("myProd"));
    const mechanic = JSON.parse(localStorage.getItem("mechanic"));
    setData(data);
    setMyProd(myProd);
    setMechanic(mechanic);
    if (data) {
      setLoggedIn(true);
      const path = window.location.pathname;
      if (path === "/login" || path === "/signup") {
        if (data.role === "admin") {
          window.location.replace("/adminDashboard");
        }
        if (data.role === "user") {
          window.location.replace("/userDashboard");
        }
        if (data.role === "mechanic") {
          window.location.replace("/mechanicDashboard");
        }
        // window.location.replace("/");
      }
    } else {
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem("data", JSON.stringify(data));
    }
    if (myProd) {
      localStorage.setItem("myProd", JSON.stringify(myProd));
    }
    if (mechanic) {
      localStorage.setItem("mechanic", JSON.stringify(mechanic));
    }
  }, [data, myProd, mechanic]);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <UserContext.Provider
        value={{
          loggedIn,
          setLoggedIn,
          data,
          setData,
          myProd,
          setMyProd,
          mechanic,
          setMechanic,
        }}
      >
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg ">
            <div
              className="fixed right-4 bottom-4"
              style={{ zIndex: "1000" }}
            ></div>

            {activeMenu && data && data.role === "admin" ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <></>
            )}

            {activeMenu && data && data.role === "user" ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <SidebarUser />
              </div>
            ) : (
              <></>
            )}

            {activeMenu && data && data.role === "mechanic" ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <SidebarMechanic />
              </div>
            ) : (
              <></>
            )}

            <div
              className={
                activeMenu && data
                  ? "dark:bg-main-dark-bg  bg-slate-100 min-h-screen md:ml-72 w-full  "
                  : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
              }
            >
              {data ? (
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar />
                </div>
              ) : (
                <div></div>
              )}

              <div>
                {themeSettings && <ThemeSettings />}

                <Routes>
                  {/* login */}
                  {!data && (
                    <>
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<SignUp />} />
                    </>
                  )}

                  {/* Admin Dashboard */}
                  <Route path="/adminDashboard" element={<AdminDashboard />} />
                  {data && data.role == "admin" ? (
                    <Route path="/" element={<AdminDashboard />} />
                  ) : (
                    <Route
                      path="/"
                      element={<Navigate replace to="/login" />}
                    />
                  )}

                  <Route path="/userDashboard" element={<UserDashboard />} />
                  {data && data.role == "user" ? (
                    <Route path="/" element={<UserDashboard />} />
                  ) : (
                    <Route
                      path="/"
                      element={<Navigate replace to="/userDashboard" />}
                    />
                  )}

                  <Route
                    path="/mechanicDashboard"
                    element={<MechanicDashboard />}
                  />
                  {data && data.role == "mechanic" ? (
                    <Route path="/" element={<MechanicDashboard />} />
                  ) : (
                    <Route
                      path="/"
                      element={<Navigate replace to="/mechanicDashboard" />}
                    />
                  )}

                  <Route path="/myads/postad" element={<PostAd />} />
                  <Route path="/myads" element={<MyAds />} />
                  <Route path="/myads/details" element={<AdDetails />} />
                  <Route path="/mechanics" element={<Mechanic />} />
                  <Route
                    path="/mechanics/details"
                    element={<MechanicDetails />}
                  />
                  <Route path="/settings" element={<Setting />} />

                  <Route path="/myads/postad" element={<PostAd />} />
                  <Route path="/myads" element={<MyAds />} />
                  <Route path="/myads/details" element={<AdDetails />} />
                  <Route path="/mechanics" element={<Mechanic />} />
                  <Route
                    path="/mechanics/details"
                    element={<MechanicDetails />}
                  />
                  <Route path="/bikeads" element={<BikeAds />} />
                  <Route
                    path="/bikeads/comparison"
                    element={<AdComparison />}
                  />
                  <Route path="/bikeads/details" element={<BikeAds />} />
                  <Route path="/partsads" element={<PartsAds />} />
                  <Route path="/partsads/details" element={<PartsDetails />} />
                  <Route path="/settings" element={<Setting />} />

                  <Route path="/success/:id" element={<ThankYouCard />} />
                  <Route path="/chatbot" element={<Chatbot />} />
                  <Route path="/bikeAd/:id" element={<SinglePageAd />} />
                  <Route path="/partAd/:id" element={<SinglePagePart />} />
                  <Route path="/map" element={<LocationForm />} />
                </Routes>
              </div>
              {loggedIn ? <Footer /> : <div></div>}
            </div>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
