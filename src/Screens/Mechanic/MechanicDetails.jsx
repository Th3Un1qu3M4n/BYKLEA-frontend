import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserProvider";
import img from "../../data/avatar3.png";
import { BiEdit } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LeafMap from "../../components/LeafMap";

const MechanicDetails = () => {
  const navigate = useNavigate();
  const { data, mechanic, setMechanic } = useContext(UserContext);

  useEffect(() => {
    if (!mechanic) {
      navigate("/mechanics");
    }
  }, []);

  return (
    <div className="mt-9">
      <div className="dark:text-gray-400 text-orange-600 p-8 flex">
        <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
          Mechanic Details
        </h1>
      </div>
      <div className="w-3/4 bg-white-200 rounded-lg shadow-2xl p-8 m-4 mx-auto my-auto bg-white">
        <form className="place-content-center">
          <fieldset className="mt-4 border-1 border-black rounded-md p-4 text-lg text-gray-900 mx-auto my-auto">
            <legend className="font-bold">Details</legend>
            <div className="flex font-semibold justify-end w-full">
              <label className="mr-2">Date: </label>
              <input
                type="text"
                value={Date().toString().substring(4, 16)}
                disabled
              />
            </div>
            <div className="mt-3">
              <div className="flex flex-col mb-4 justify-center items-center">
                <img src={img} className="h-28 w-28 rounded-full mb-5" alt="" />
                <div className="flex mb-4 justify-center">
                  <label
                    className="mb-2 mt-2 mr-4 font-bold text-lg text-gray-900"
                    htmlFor="cnic"
                  >
                    Name
                  </label>
                  <p className="border rounded-sm py-2 px-3 text-grey-800 font-normal">
                    {mechanic?.fullname}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 mb-4">
                <div>
                  <label
                    className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                    htmlFor="dosage"
                  >
                    Email
                  </label>
                  <p className="border rounded-sm py-2 px-3 text-grey-800 font-normal">
                    {mechanic?.user?.email}
                  </p>
                </div>
                <div>
                  <label
                    className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                    htmlFor=""
                  >
                    Role
                  </label>
                  <p className="border rounded-sm py-2 px-3 text-grey-800 font-normal">
                    {mechanic?.user?.role}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 mb-4">
                <div>
                  <label
                    className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                    htmlFor="dosage"
                  >
                    Service Charges
                  </label>
                  <p className="border rounded-sm py-2 px-3 text-grey-800 font-normal">
                    {mechanic?.servicecharges}
                  </p>
                </div>
                <div>
                  <label
                    className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                    htmlFor=""
                  >
                    Phone
                  </label>
                  <p className="border rounded-sm py-2 px-3 text-grey-800 font-normal">
                    {mechanic?.contact}
                  </p>
                </div>
              </div>
              <div>
                <label
                  className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                  htmlFor="dosage"
                >
                  Address
                </label>
                <LeafMap
                  pos={{ lat: mechanic.latitude, lng: mechanic.longitude }}
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default MechanicDetails;
