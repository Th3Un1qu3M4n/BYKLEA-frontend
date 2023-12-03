import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { MdOutlineCompare } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const AdComparison = () => {
  const { data, myProd, setDoctor } = useContext(UserContext);
  const [disable, setDisable] = useState(true);

  const [bikeData, setBikeData] = useState([]);
  const [selectedBike1, setSelectedBike1] = useState();
  const [selectedBike2, setSelectedBike2] = useState();

  const getAllAds = async () => {
    const res = await axios.get(`http://localhost:3000/ads/get/`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      },
    });
    console.log(res.data);
    setBikeData(res.data);
  };

  useEffect(() => {
    getAllAds();
  }, []);

  return (
    <div className="mt-9">
      <div className="dark:text-gray-400 text-orange-600 p-8 flex">
        <MdOutlineCompare size={50} />
        <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
          Ad Comparison
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <div className="py-3 w-4/5 my-auto mx-auto">
            <div className="relative">
              <select
                className="block w-full p-3 pl-10 border-1 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                name="bikes"
                id="bikes"
                onClick={(e) => {
                  const selectedBike = bikeData.find(
                    (bike) => bike._id === e.target.value
                  );
                  console.log(selectedBike);
                  setSelectedBike1(selectedBike);
                }}
              >
                <option>Select an Bike to Compare</option>
                {bikeData.map((bike) => (
                  <option value={bike._id}>
                    {bike.adtitle} - {bike.userid?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {selectedBike1 && (
            <div className="w-4/5 bg-white-200 rounded-lg shadow-2xl p-8 m-4 mx-auto my-auto bg-white">
              <form className="place-content-center">
                {/* <fieldset className="mt-4 border-1 border-black rounded-md p-4 text-lg text-gray-900 mx-auto my-auto"> */}
                <legend className="font-bold">Details</legend>
                {/* <div className="flex font-semibold justify-end w-full">
                <label className="mr-2">Date: </label>
                <input type="text" value={"24 - 10 - 2023"} disabled />
              </div> */}
                <div className="mt-4 flex flex-row justify-center">
                  <div>
                    <img
                      src={`http://localhost:3000/${selectedBike1?.imageUrl}`}
                      alt="bike"
                      className="w-100 h-[200px] object-contain"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex flex-col mb-4 font-light">
                    {selectedBike1?.description}
                  </div>
                  <div className="mb-4">
                    <div>
                      <label
                        className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                        htmlFor="dosage"
                      >
                        Product Name
                      </label>
                      <div>
                        <input
                          className="border py-2 px-3 text-grey-800 w-3/4"
                          type="text"
                          placeholder="Product Name"
                          required
                          disabled={disable}
                          value={selectedBike1?.adtitle}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                        htmlFor=""
                      >
                        Model
                      </label>
                      <div>
                        <input
                          className="border py-2 px-3 text-grey-800 w-3/4"
                          type="text"
                          placeholder="Model"
                          required
                          value={selectedBike1?.model}
                          disabled={disable}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div>
                      <label
                        className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                        htmlFor="dosage"
                      >
                        Color
                      </label>
                      <div>
                        <input
                          className="border py-2 px-3 text-grey-800 w-3/4"
                          type="text"
                          placeholder="Color"
                          required
                          value={selectedBike1?.color}
                          disabled={disable}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                        htmlFor=""
                      >
                        Condition
                      </label>
                      <div>
                        <input
                          className="border py-2 px-3 text-grey-800 w-3/4"
                          type="text"
                          min={0}
                          max={10}
                          placeholder="/10"
                          required
                          value={selectedBike1?.condition + "/10"}
                          disabled={disable}
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" mb-4">
                    <div>
                      <label
                        className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                        htmlFor=""
                      >
                        Price (PKR)
                      </label>
                      <div>
                        <input
                          className="border py-2 px-3 text-grey-800 w-3/4"
                          type="text"
                          min={0}
                          placeholder="90000"
                          required
                          // value={myProd.prodPrice}
                          value={"Rs " + selectedBike1?.price + "/-"}
                          disabled={disable}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <button
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 hover:bg-orange-400 py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-orange-800 focus:ring-offset-2"
              disabled={disable}
            >
              Update
            </button> */}
                {/* </fieldset> */}
              </form>
            </div>
          )}
        </div>
        <div>
          <div className="py-3 w-4/5 my-auto mx-auto">
            <div className="relative">
              <select
                className="block w-full p-3 pl-10 border-1 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                name="bikes"
                id="bikes"
                onClick={(e) => {
                  const selectedBike = bikeData.find(
                    (bike) => bike._id === e.target.value
                  );
                  console.log(selectedBike);
                  setSelectedBike2(selectedBike);
                }}
              >
                <option>Select an Bike to Compare</option>
                {bikeData.map((bike) => (
                  <option value={bike._id}>
                    {bike.adtitle} - {bike.userid?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {selectedBike2 && (
            <div className="w-4/5 bg-white-200 rounded-lg shadow-2xl p-8 m-4 mx-auto my-auto bg-white">
              <form className="place-content-center">
                {/* <fieldset className="mt-4 border-1 border-black rounded-md p-4 text-lg text-gray-900 mx-auto my-auto"> */}
                <legend className="font-bold">Details</legend>
                {/* <div className="flex font-semibold justify-end w-full">
                <label className="mr-2">Date: </label>
                <input type="text" value={"24 - 10 - 2023"} disabled />
              </div> */}
                <div className="mt-4 flex flex-row justify-center">
                  <div>
                    <img
                      src={`http://localhost:3000/${selectedBike2?.imageUrl}`}
                      alt="bike"
                      className="w-100 h-[200px] object-contain"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex flex-col mb-4 font-light">
                    {selectedBike2?.description}
                  </div>
                  <div className="mb-4">
                    <div>
                      <label
                        className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                        htmlFor="dosage"
                      >
                        Product Name
                      </label>
                      <div>
                        <input
                          className="border py-2 px-3 text-grey-800 w-3/4"
                          type="text"
                          placeholder="Product Name"
                          required
                          disabled={disable}
                          value={selectedBike2?.adtitle}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                        htmlFor=""
                      >
                        Model
                      </label>
                      <div>
                        <input
                          className="border py-2 px-3 text-grey-800 w-3/4"
                          type="text"
                          placeholder="Model"
                          required
                          value={selectedBike2?.model}
                          disabled={disable}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div>
                      <label
                        className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                        htmlFor="dosage"
                      >
                        Color
                      </label>
                      <div>
                        <input
                          className="border py-2 px-3 text-grey-800 w-3/4"
                          type="text"
                          placeholder="Color"
                          required
                          value={selectedBike2?.color}
                          disabled={disable}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                        htmlFor=""
                      >
                        Condition
                      </label>
                      <div>
                        <input
                          className="border py-2 px-3 text-grey-800 w-3/4"
                          type="text"
                          min={0}
                          max={10}
                          placeholder="/10"
                          required
                          value={selectedBike2?.condition + "/10"}
                          disabled={disable}
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" mb-4">
                    <div>
                      <label
                        className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                        htmlFor=""
                      >
                        Price (PKR)
                      </label>
                      <div>
                        <input
                          className="border py-2 px-3 text-grey-800 w-3/4"
                          type="text"
                          min={0}
                          placeholder="90000"
                          required
                          // value={myProd.prodPrice}
                          value={"Rs " + selectedBike2?.price + "/-"}
                          disabled={disable}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <button
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 hover:bg-orange-400 py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-orange-800 focus:ring-offset-2"
              disabled={disable}
            >
              Update
            </button> */}
                {/* </fieldset> */}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdComparison;
