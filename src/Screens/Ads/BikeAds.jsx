import React, { useState, useContext } from "react";
import { TbMotorbike } from "react-icons/tb";
import { MdOutlineCompare } from "react-icons/md";
import StarRatings from "react-star-ratings";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const BikeAds = () => {
  const navigate = useNavigate();
  // const bikeData = [
  //   {
  //     name: "Honda 70",
  //     color: "red",
  //     price: 90000,
  //     image: "../../data/fm1.png",
  //   },
  //   {
  //     name: "Honda 70",
  //     color: "red",
  //     image: "../../data/fm2.png",
  //   },
  //   {
  //     name: "Honda 70",
  //     color: "red",
  //     image: "../../data/fm3.png",
  //   },
  //   {
  //     name: "Honda 70",
  //     color: "red",
  //     image: "../../data/fm4.png",
  //   },
  //   {
  //     name: "Honda 70",
  //     color: "red",
  //     image: "../../data/fm5.png",
  //   },
  //   {
  //     name: "Honda 70",
  //     color: "red",
  //     image: "../../data/fm1.png",
  //   },
  //   {
  //     name: "Honda 70",
  //     color: "red",
  //     image: "../../data/fm2.png",
  //   },
  //   {
  //     name: "Honda 70",
  //     color: "red",
  //     image: "../../data/fm3.png",
  //   },
  //   {
  //     name: "Honda 70",
  //     color: "red",
  //     image: "../../data/fm4.png",
  //   },
  //   {
  //     name: "Honda 70",
  //     color: "red",
  //     image: "../../data/fm5.png",
  //   },
  // ];

  const [bikeData, setBikeData] = useState([]);

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

  const rateAd = async (id, rating) => {
    const res = await axios.post(
      `http://localhost:3000/ads/rate/${id}`,
      {
        value: rating,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        },
      }
    );
    console.log(res.data);
    getAllAds();
  };

  const openAddDetails = (id) => {
    navigate(`/bikeAd/${id}`);
  };

  return (
    <>
      <div className="mt-14 ml-8">
        <div className="dark:text-gray-400 text-orange-600 p-8 flex">
          <TbMotorbike size={50} />
          <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
            Bike Ads
          </h1>
        </div>
        <div className="flex justify-end mr-10">
          <NavLink to="./comparison">
            <button className="p-2 bg-orange-600 rounded-lg text-white mb-3 flex justify-between items-center font-semibold">
              <MdOutlineCompare className="mr-2 text-white" size={24} />
              Compare Ads
            </button>
          </NavLink>
        </div>
        <div id="slider" className="w-full">
          {bikeData.map((item) => (
            <div
              className="bg-white w-[360px] h-[250px] ml-8 mb-8 inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-md"
              onClick={() => {
                openAddDetails(item._id);
              }}
            >
              <img
                className="h-[140px] w-[300px] flex place-self-center object-contain mb-2"
                src={`http://localhost:3000/${item.imageUrl}`}
                alt="im"
              />
              <h1 className="font-semibold text-orange-600">
                Title: {item.adtitle}
              </h1>
              <h1>
                Price:{" "}
                {item.price ? "RS" + item.price.toLocaleString("en-us") : "N/A"}
              </h1>
              <StarRatings
                rating={item.averageRating}
                starRatedColor="orange"
                changeRating={(value) => {
                  console.log(value);
                  rateAd(item._id, value);
                }}
                numberOfStars={5}
                name="rating"
                starDimension="20px"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BikeAds;
