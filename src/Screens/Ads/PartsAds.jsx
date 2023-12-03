import axios from "axios";
import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";

const PartsAds = () => {
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
  const navigate = useNavigate();
  const [bikeData, setBikeData] = useState([]);

  const getAllAds = async () => {
    const res = await axios.get(`http://localhost:3000/parts/get/`, {
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

  const handleCheckout = async (productId, partId) => {
    const response = await axios.post(
      "http://localhost:3000/parts/create-checkout-session",
      {
        productId: productId,
        partId: partId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + localStorage.getItem("TOKEN"),
        },
      }
    );

    const session = response.data;
    window.location = session.url;
  };

  const rateAd = async (id, rating) => {
    const res = await axios.post(
      `http://localhost:3000/parts/rate/${id}`,
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
    navigate(`/partAd/${id}`);
  };

  return (
    <>
      <div className="mt-14 ml-8">
        <div className="dark:text-gray-400 text-orange-600 p-8 flex">
          <HiOutlineWrenchScrewdriver size={50} />
          <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
            Parts Ads
          </h1>
        </div>
        <div id="slider" className="w-full">
          {bikeData.map((item) => (
            <div
              className="bg-white w-[360px] h-[270px] ml-8 mb-8 inline-block p-5 rounded-md"
              onClick={() => {
                openAddDetails(item._id);
              }}
            >
              <img
                className="h-[140px] w-[300px] flex place-self-center object-contain mb-2"
                src={`http://localhost:3000/${item.imageUrl}`}
                alt="im"
              />
              <div className="flex flex-row justify-between w-100">
                <div className="flex flex-col">
                  <h1 className="font-semibold text-orange-600">
                    Title: {item.name}
                  </h1>
                  <br></br>
                  <h1>Price: {item.price}</h1>

                  <StarRatings
                    rating={item.averageRating}
                    starRatedColor="orange"
                    // disabled={true}
                    changeRating={(rating) => rateAd(item._id, rating)}
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                  />
                </div>
                <button
                  className="bg-orange-600 text-white p-2 rounded-md mt-2 h-[40px]"
                  onClick={() => handleCheckout(item.stripeProduct, item._id)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PartsAds;
