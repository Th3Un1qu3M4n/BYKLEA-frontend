import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { TbMotorbike } from "react-icons/tb";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import axios from "axios";
import StarRatings from "react-star-ratings";

const UserDashboard = () => {
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

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [bikeData, setBikeData] = useState([]);
  const [partsData, setPartsData] = useState([]);

  const getAllAds = async () => {
    const res = await axios.get(`http://localhost:3000/ads/ratings/`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      },
    });
    console.log(res.data);
    setBikeData(res.data);
  };

  const getAllPartsAds = async () => {
    const res = await axios.get(`http://localhost:3000/parts/ratings/`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      },
    });
    console.log(res.data);
    setPartsData(res.data);
  };

  useEffect(() => {
    getAllAds();
    getAllPartsAds();
  }, []);

  return (
    <>
      <div className="mt-14 ml-8 mb-8 z-10">
        <div className="dark:text-gray-400 text-orange-600 p-8 flex">
          <TbMotorbike size={50} />
          <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
            Bike Recommendations
          </h1>
        </div>

        <div className="relative flex items-center max-w-screen-2xl">
          <MdChevronLeft onClick={slideLeft} size={40} />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {bikeData.map((item) => (
              <div className="bg-white w-[360px] h-[260px] ml-8 inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-md">
                <img
                  className="h-[140px] w-[300px] flex place-self-center object-contain mb-2"
                  src={`http://localhost:3000/${item?.imageUrl}`}
                  alt="im"
                />
                <h1 className="mt-5 font-semibold text-orange-600">
                  Title: {item.adtitle}
                </h1>
                <h1>Price: {item.price}</h1>
                <StarRatings
                  rating={item.averageRating}
                  starRatedColor="orange"
                  disabled={true}
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                />
              </div>
            ))}
          </div>
          <MdChevronRight onClick={slideRight} size={40} />
        </div>
      </div>

      <hr></hr>

      <div className="mt-5 ml-8">
        <div className="dark:text-gray-400 text-orange-600 p-8 flex">
          <HiOutlineWrenchScrewdriver size={50} />
          <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
            Bike Parts
          </h1>
        </div>

        <div className="relative flex items-center max-w-screen-2xl z-10">
          <MdChevronLeft onClick={slideLeft} size={40} />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {partsData.map((item) => (
              <div className="bg-white w-[360px] h-[260px] ml-8 inline-block p-5 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-md">
                <img
                  className="h-[140px] w-[300px] flex place-self-center object-contain mb-2"
                  src={`http://localhost:3000/${item?.imageUrl}`}
                  alt="im"
                />
                <h1 className="font-semibold text-orange-600">
                  Title: {item.name}
                </h1>
                <h1>Price: {item.price}</h1>
                <StarRatings
                  rating={item.averageRating}
                  starRatedColor="orange"
                  disabled={true}
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                />
              </div>
            ))}
          </div>
          <MdChevronRight onClick={slideRight} size={40} />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
