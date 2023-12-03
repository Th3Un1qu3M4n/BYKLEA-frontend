import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import { FaUserPlus, FaFilePrescription } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import { UserContext } from "../../contexts/UserProvider";
import { LiaAdSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
// import { doctorsData } from '../data/DoctorsData';
// import { cpt4 } from '../data/cpt';
// import { medicines } from '../data/Medicine';
// import { backendUrl } from '../constants/urls';

const PostAd = () => {
  const { data, selectedPatient, setSelectedPatient } = useContext(UserContext);
  const navigate = useNavigate();

  const [adType, setAdType] = useState("Bike");

  const [title, setTitle] = useState();
  const [model, setModel] = useState();
  const [color, setColor] = useState();
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState();
  const [comments, setComents] = useState();
  const [city, setCity] = useState();
  const [jwttoken, setJWTtoken] = useState("");
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");

    setJWTtoken(token);

    if (!token) {
      navigate("/login");
    }
  }, []);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   let config = {
  //     headers: {
  //       Authorization: "Bearer " + jwttoken,
  //     },
  //   };

  //   console.log(config);
  //   console.log("id is", data.id);

  //   try {
  //     await axios.post(
  //       "http://localhost:3000/ads/add",
  //       {
  //         adtitle: title,
  //         admodel: model,
  //         description: comments,
  //         color: color,
  //         city: city,
  //         price: price,
  //         condition: condition
  //         // userId: data.id,
  //       },
  //       config
  //     );

  //     alert("Ad Posted successfully!");
  //     navigate("/myads");
  //   } catch (error) {
  //     console.log(error);

  //     alert("Failed to submit review.");
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let config = {
      headers: {
        Authorization: "Bearer " + jwttoken,
        "Content-Type": "multipart/form-data", // Set content type for file upload
      },
    };

    // Create FormData object to append data including the image
    const formData = new FormData();
    formData.append("adtitle", title);
    formData.append("model", model);
    formData.append("description", comments);
    formData.append("color", color);
    formData.append("city", city);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("image", image); // Assuming 'imageFile' is the variable containing the image file

    console.log(config);
    // console.log("id is", data.id);

    try {
      await axios.post("http://localhost:3000/ads/add", formData, config);

      alert("Ad Posted successfully!");
      navigate("/myads");
    } catch (error) {
      console.log(error);

      alert("Failed to submit review.");
    }
  };

  const handleSubmitPart = async (event) => {
    event.preventDefault();
    let config = {
      headers: {
        Authorization: "Bearer " + jwttoken,
        "Content-Type": "multipart/form-data", // Set content type for file upload
      },
    };

    // Create FormData object to append data including the image
    const formData = new FormData();
    formData.append("name", title);
    formData.append("category", category);
    formData.append("description", comments);
    formData.append("city", city);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("image", image); // Assuming 'imageFile' is the variable containing the image file

    try {
      await axios.post("http://localhost:3000/parts/add", formData, config);

      alert("Ad Posted successfully!");
      navigate("/myads");
    } catch (error) {
      console.log(error);

      alert("Failed to submit review.");
    }
  };

  const date = new Date();
  const month = date.getMonth() + 1;
  const [todaydate, setDate] = useState(
    `${date.getDate()}/${month}/${date.getFullYear()}`
  );

  // const addLabTests = (selectedOp) => {
  //   setLabTests(selectedOp);
  // };

  return (
    <div className="mt-9">
      <div className="dark:text-gray-400 text-orange-600 p-8 flex">
        <LiaAdSolid size={50} />
        <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
          Post An Ad
        </h1>
      </div>
      <div className="w-3/4 bg-white-200 rounded-lg shadow-2xl p-5 m-4 mx-auto bg-white">
        <label
          className="font-semibold text-lg text-gray-900 block mb-4"
          htmlFor="role"
        >
          Select Category
        </label>
        <select
          className="border py-1 px-2 text-grey-800 text-sm w-full"
          onChange={(e) => {
            setAdType(e.target.value);
          }}
        >
          <option value={"Bike"}>Bike</option>
          <option value={"Part"}>Bike Parts/Accessories</option>
          {/* <option>Others</option> */}
        </select>
      </div>
      {adType === "Bike" ? (
        <div className="w-3/4 bg-white-200 rounded-lg shadow-2xl p-8 m-4 mx-auto my-auto bg-white">
          <h1 className="block w-full text-center text-orange-600 text-2xl font-bold mb-6">
            Enter Ad Details
          </h1>
          <form className="place-content-center">
            <fieldset className="mt-4 border-1 border-black rounded-md p-4 text-lg text-gray-900 mx-auto my-auto">
              <legend className="font-bold">Post Ad</legend>
              <div className="flex font-semibold justify-end w-full">
                <label className="mr-2">Date: </label>
                <input type="text" value={todaydate} disabled />
              </div>
              <div className="mt-3">
                <div className="flex mb-4 justify-center">
                  <label
                    className="mb-2 mt-2 mr-4 font-bold text-lg text-gray-900"
                    htmlFor="cnic"
                  >
                    Ad Title
                  </label>
                  <input
                    className="border rounded-sm py-2 px-3 text-grey-800 font-normal"
                    type="text"
                    name="disease"
                    placeholder="Cd-70..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 mb-4">
                  <div>
                    <label
                      className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                      htmlFor="dosage"
                    >
                      City
                    </label>
                    <div>
                      <input
                        className="border py-2 px-3 text-grey-800 w-3/4"
                        type="text"
                        placeholder="City Name"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
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
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 mb-4">
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
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
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
                        type="number"
                        min={0}
                        max={10}
                        placeholder="/10"
                        required
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 mb-4">
                  <div>
                    <label
                      className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                      htmlFor="dosage"
                    >
                      Picture
                    </label>
                    <div>
                      <input
                        className="border py-1 px-2 text-grey-800 text-sm"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        name="pic"
                        id="pic"
                        single
                        required
                        // value={image}
                        onChange={(e) => {
                          console.log(e.target.files[0]);
                          setImage(e.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
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
                        type="number"
                        min={0}
                        placeholder="90000"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mb-4 font-semibold">
                  <label>Add Comments</label>
                  <textarea
                    className="px-3 py-2 text-grey-800 border-2"
                    rows="4"
                    cols="50"
                    placeholder="Comments..."
                    type="text"
                    value={comments}
                    onChange={(e) => setComents(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 hover:bg-orange-400 py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-orange-800 focus:ring-offset-2"
                onClick={handleSubmit}
              >
                Post
              </button>
            </fieldset>
          </form>
        </div>
      ) : (
        <div className="w-3/4 bg-white-200 rounded-lg shadow-2xl p-8 m-4 mx-auto my-auto bg-white">
          <h1 className="block w-full text-center text-orange-600 text-2xl font-bold mb-6">
            Enter Ad Details
          </h1>

          <form className="place-content-center">
            <fieldset className="mt-4 border-1 border-black rounded-md p-4 text-lg text-gray-900 mx-auto my-auto">
              <legend className="font-bold">Post PART Ad</legend>
              <div className="flex font-semibold justify-end w-full">
                <label className="mr-2">Date: </label>
                <input type="text" value={todaydate} disabled />
              </div>
              <div className="mt-3">
                <div className="flex mb-4 justify-center">
                  <label
                    className="mb-2 mt-2 mr-4 font-bold text-lg text-gray-900"
                    htmlFor="cnic"
                  >
                    Ad Title
                  </label>
                  <input
                    className="border rounded-sm py-2 px-3 text-grey-800 font-normal"
                    type="text"
                    name="disease"
                    placeholder="Engine"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 mb-4">
                  <div>
                    <label
                      className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                      htmlFor="dosage"
                    >
                      City
                    </label>
                    <div>
                      <input
                        className="border py-2 px-3 text-grey-800 w-3/4"
                        type="text"
                        placeholder="City Name"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                      htmlFor=""
                    >
                      Category
                    </label>
                    <div>
                      <input
                        className="border py-2 px-3 text-grey-800 w-3/4"
                        type="text"
                        placeholder="Engine"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 mb-4">
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
                        type="number"
                        min={0}
                        max={10}
                        placeholder="/10"
                        required
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 mb-4">
                  <div>
                    <label
                      className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                      htmlFor="dosage"
                    >
                      Picture
                    </label>
                    <div>
                      <input
                        className="border py-1 px-2 text-grey-800 text-sm"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        name="pic"
                        id="pic"
                        single
                        required
                        // value={image}
                        onChange={(e) => {
                          console.log(e.target.files[0]);
                          setImage(e.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
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
                        type="number"
                        min={0}
                        placeholder="90000"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mb-4 font-semibold">
                  <label>Add Comments</label>
                  <textarea
                    className="px-3 py-2 text-grey-800 border-2"
                    rows="4"
                    cols="50"
                    placeholder="Comments..."
                    type="text"
                    value={comments}
                    onChange={(e) => setComents(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 hover:bg-orange-400 py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-orange-800 focus:ring-offset-2"
                onClick={handleSubmitPart}
              >
                Post
              </button>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostAd;
