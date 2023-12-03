import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePageAd = () => {
  const { id } = useParams();

  const [ad, setAd] = useState();

  const [showContact, setShowContact] = useState(false);

  const getAdById = async (id) => {
    const response = await axios.get(`http://localhost:3000/ads/get/${id}`);
    console.log(response.data);
    setAd(response.data);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: ad.adtitle,
          text: ad.description,
          url: window.location.href,
        })
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert("Web Share API not supported in your browser");
    }
  };

  useEffect(() => {
    console.log(id);
    getAdById(id);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {ad && (
        <div className="bg-white p-8 min-w-[450px] rounded shadow-md max-w-md flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">{ad.adtitle}</h2>
          <img
            src={`http://localhost:3000/${ad.imageUrl}`}
            alt="Bike for Sale"
            className="mb-4 rounded-lg"
          />
          <p className="text-gray-700 mb-4">{ad.description}</p>
          <p className="text-gray-700 mb-4">
            <span className="font-bold">Price:</span> $
            {ad.price.toLocaleString("en-us")}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-bold">Location:</span> {ad.city}
          </p>
          <p className="text-gray-700 mb-4">
            {" "}
            <span className="font-bold">Condition:</span> {ad.condition}/10
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => setShowContact(true)}
          >
            Contact Seller
          </button>
          <div className="mt-4">
            {showContact && (
              <div>
                <h2 className="text-xl font-semibold">Contact Seller</h2>
                <p className="text-gray-700 mt-2">Name: {ad?.userid?.name}</p>
                <p className="text-gray-700 mb-4">Email: {ad.userid?.email}</p>
              </div>
            )}
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={handleShare}
          >
            Share Link
          </button>
        </div>
      )}
    </div>
  );
};

export default SinglePageAd;
