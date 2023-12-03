import React, { useEffect, useState } from "react";
import axios from "axios";

const ThankYouCard = () => {
  const [message, setMessage] = useState("");

  console.log("THANK YOU CARD");

  useEffect(() => {
    // Function to extract the id from the URL
    const getIdFromUrl = () => {
      const url = window.location.href;
      return url.substring(url.lastIndexOf("/") + 1);
    };

    // Function to send a post request with the id to the backend
    const sendPostRequest = async (id) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/parts/sold",
          { id },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: "Bearer " + localStorage.getItem("TOKEN"),
            },
          }
        );
        setMessage("THANK YOU FOR YOUR PURCHASE"); // Assuming the backend returns a message
      } catch (error) {
        console.error("Error sending post request:", error);
        setMessage("An error occurred while processing your request.");
      }
    };

    // Call the functions to get the id and send the post request
    const id = getIdFromUrl();
    sendPostRequest(id);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>{message}</h2>
        {/* Additional styling for the card can be added */}
      </div>
    </div>
  );
};

export default ThankYouCard;
