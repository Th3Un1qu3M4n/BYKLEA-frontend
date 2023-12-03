import React, { useState, useContext } from "react";
import Select from "react-select";
import { FaUserPlus, FaFilePrescription } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import { UserContext } from "../../contexts/UserProvider";
import { LiaAdSolid } from "react-icons/lia";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const AdDetails = () => {
  const navigate = useNavigate();
  const { data, myProd } = useContext(UserContext);
  const [disable, setDisable] = useState(true);
  const [editData, seteditData] = useState({
    name: myProd.name,
    color: myProd.color,
    year: myProd.year,
    price: myProd.price,
    city: myProd.city,
  });

  const deleteAd = async (e) => {
    e.preventDefault();
    console.log(myProd._id);
    try {
      if (myProd.type === "Bike") {
        const response = await axios.delete(
          `http://localhost:3000/ads/delete/${myProd._id}`,

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
            },
          }
        );
        console.log(response.data);
        navigate(`/myads`);
      } else {
        const response = await axios.delete(
          `http://localhost:3000/parts/delete/${myProd._id}`,

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
            },
          }
        );
        console.log(response.data);
        navigate(`/myads`);
      }
    } catch (e) {
      alert("error");
      console.log(e);
    }
  };

  // const [editData, seteditData] = useState({
  //   name: data.adminName,
  //   email: data.adminEmail,
  //   contact: data.contact,
  // });

  // const updateData = async (e) =>{
  //   // setData({adminName:editData.name, adminEmail:editData.email})
  //   e.preventDefault();
  //   console.log(editData);
  //   console.log(data.jwt);
  //   const formData = new FormData();
  //   formData.append('email', editData.email);
  //   formData.append('contact', editData.contact);
  //   formData.append('name', editData.name);
  //   try{
  //     const response = await axios.put(`${backendUrl}doctors/updatebyAdmin/${doctor.docCnic}`, editData, {
  //       headers: {
  //         Authorization: `Bearer ${data.jwt}`,
  //       },
  //     });
  //     console.log(response.data);
  //     alert('updated');
  //   }catch(e){
  //     alert('error');
  //     console.log(e.response)
  //   }
  // }

  return (
    <div className="mt-9">
      <div className="dark:text-gray-400 text-orange-600 p-8 flex">
        <LiaAdSolid size={50} />
        <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
          Ad Details
        </h1>
      </div>
      <div className="w-3/4 bg-white-200 rounded-lg shadow-2xl p-8 m-4 mx-auto my-auto bg-white">
        {/* <h1 className="block w-full text-center text-orange-600 text-2xl font-bold mb-6">
          Enter Ad Details
        </h1> */}
        {myProd.type !== "Bike" && (
          <div className="grid grid-cols-2 mb-4">
            <div>
              <>
                {myProd?.sold && (
                  <>
                    <label
                      className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                      htmlFor="dosage"
                    >
                      SOLD
                    </label>
                    <br></br>
                    <br></br>
                    <label
                      className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                      htmlFor="dosage"
                    >
                      PURCHASER: {myProd?.purchaser?.name}
                    </label>
                  </>
                )}
              </>
            </div>
          </div>
        )}
        <div className="flex place-content-end">
          <BiTrash size={30} onClick={(e) => deleteAd(e)} />
        </div>
        <form className="place-content-center">
          <fieldset className="mt-4 border-1 border-black rounded-md p-4 text-lg text-gray-900 mx-auto my-auto">
            <legend className="font-bold">Details</legend>
            <div className="flex font-semibold justify-end w-full">
              <label className="mr-2">Date: </label>
              <input type="text" value={"24 - 10 - 2023"} disabled />
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
                  value={myProd.prodName}
                  disabled={disable}
                />
              </div>

              <div className="grid grid-cols-2 mb-4">
                {myProd.type === "Bike" ? (
                  <div>
                    <label
                      className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                      htmlFor="dosage"
                    >
                      Product City
                    </label>
                    <div>
                      <input
                        className="border py-2 px-3 text-grey-800 w-3/4"
                        type="text"
                        placeholder="Product Name"
                        required
                        disabled={disable}
                        value={myProd.prodCity}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label
                      className="mb-2 mr-3 font-semibold text-lg text-gray-900"
                      htmlFor="dosage"
                    >
                      Product Category
                    </label>
                    <div>
                      <input
                        className="border py-2 px-3 text-grey-800 w-3/4"
                        type="text"
                        placeholder="Product Category"
                        required
                        disabled={disable}
                        value={myProd.prodCategory}
                      />
                    </div>
                  </div>
                )}
                {myProd.type === "Bike" ? (
                  <div>
                    <label
                      className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                      htmlFor=""
                    >
                      Year
                    </label>
                    <div>
                      <input
                        className="border py-2 px-3 text-grey-800 w-3/4"
                        type="text"
                        placeholder="Year"
                        required
                        value={myProd.prodModel}
                        disabled={disable}
                      />
                    </div>
                  </div>
                ) : (
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
                        value={myProd.prodCondition}
                        disabled={disable}
                      />
                    </div>
                  </div>
                )}
              </div>
              {myProd.type === "Bike" && (
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
                        value={myProd.prodColor}
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
                        type="number"
                        min={0}
                        max={10}
                        placeholder="/10"
                        required
                        value={myProd.prodCondition}
                        disabled={disable}
                      />
                    </div>
                  </div>
                </div>
              )}

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
                      multiple
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
                      value={myProd.prodPrice}
                      disabled={disable}
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
                  disabled={disable}
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AdDetails;
