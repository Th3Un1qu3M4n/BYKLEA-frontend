import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const SignUp = () => {
  const [name, setName] = useState();
  const [cnic, setCnic] = useState();
  const [phn, setPhn] = useState();
  const [email, setEmail] = useState();
  const [profile, setProfile] = useState(null);
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [userType, setUserType] = useState("user");
  const [serviceCharges, setServiceCharges] = useState("user");

  const navigate = useNavigate();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        return { lat, lng };
        // setPosition([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        return null;
      }
    );
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // const addDoctor = (data) => {
  //   doctorsData([...doctors, data]);
  // };
  const registerMechanic = async (data, currLocation) => {
    await axios
      .post(
        "http://localhost:3000/mechanic/signup",

        {
          name: name,
          email: email,
          password: password,
          contact: phn,
          servicecharges: serviceCharges,
          lat: currLocation.lat,
          lng: currLocation.lng,
        }
      )

      .then((res) => {
        if (res.status === 200) {
          alert("Email Verification Sent, Please Verify Email");

          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setError("Email Already Exists");
        }

        if (error.response.status === 400) {
          setError(error.response.data.message);
          console.log(error.response.data.message);
        }
      });
  };
  const addUser = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("name", name);
    data.append("contact", phn);

    if (userType === "mechanic") {
      // data.append("role", "mechanic");

      // const currLocation = await getCurrentLocation();
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          // return { lat, lng };
          registerMechanic(data, { lat, lng });
          // setPosition([position.coords.latitude, position.coords.longitude]);
        },
        () => {
          alert("Please Allow Location Access");
          return;
        }
      );
      // if (!currLocation) {
      // }
    } else {
      // data.append("role", "user");
      await axios
        .post(
          "http://localhost:3000/user/signup",

          {
            name: name,
            email: email,
            password: password,
            // contact: phn
          }
        )

        .then((res) => {
          if (res.status === 200) {
            alert("Email Verification Sent, Please Verify Email");

            navigate("/login");
          }
        })
        .catch((error) => {
          if (error.response.status === 409) {
            setError("Email Already Exists");
          }

          if (error.response.status === 400) {
            setError(error.response.data.message);
            console.log(error.response.data.message);
          }
        });
    }
  };

  const addName = (event) => {
    setName(event.target.value);
  };

  const addPasswrod = (event) => {
    setPassword(event.target.value);
  };

  const addPhn = (event) => {
    setPhn(event.target.value);
  };

  const addEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="h-screen grid grid-cols-3">
      <div className="hidden md:block col-span-2 my-auto mx-auto font-extrabold tracking-tight dark:text-white text-slate-900 p-10">
        <div className="flex items-end self-end space-y-7 text-9xl">
          <RiMotorbikeFill className="text-9xl text-orange-600" />
          <span>BYKLEA</span>
        </div>
      </div>
      <div className="col-span-3 bg-slate-200 md:col-span-1 md:bg-orange-600 place-content-center flex">
        <div className="bg-white m-auto rounded-xl w-2/3 p-8">
          <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 mt-7">
            Register Your Account
          </h1>

          <form>
            <div className="flex flex-col mb-4 mt-3">
              <label
                className="mb-2 font-medium text-sm text-gray-900"
                htmlFor="full_name"
              >
                Full Name
              </label>
              <input
                className="border py-1 px-2 text-grey-800 text-sm"
                type="text"
                name="full_name"
                id="full_name"
                placeholder="Azeem Ahmed"
                value={name}
                onChange={addName}
                required
              />
            </div>
            {/* <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-medium text-sm text-gray-900"
                htmlFor="cnic"
              >
                CNIC
              </label>
              <input
                className="border py-1 px-2 text-grey-800 text-sm"
                type="number"
                name="cnic"
                id="cnic"
                value={cnic}
                onChange={addCnic}
                placeholder="zzzzzzzzzzzzz"
                required
              />
            </div> */}
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-medium text-sm text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border py-1 px-1 text-grey-800 text-sm"
                type="email"
                name="email"
                id="email"
                placeholder="@gmail.com, @hotmail.com, @outlook.com ..."
                value={email}
                onChange={addEmail}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-medium text-sm text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border py-1 px-2 text-grey-800 text-sm"
                type="password"
                name="password"
                id="password"
                placeholder="***********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-medium text-sm text-gray-900"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="border py-1 px-2 text-grey-800 text-sm"
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{2}-[0-9]{4}-[0-9]{7}"
                value={phn}
                onChange={addPhn}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-medium text-sm text-gray-900"
                htmlFor="role"
              >
                Sign Up As
              </label>
              <select
                className="border py-1 px-2 text-grey-800 text-sm"
                onChange={(e) => {
                  console.log(e.target.value);
                  setUserType(e.target.value);
                }}
              >
                <option value={"user"}>Buyer/Seller</option>
                <option value={"mechanic"}>Mechanic</option>
                {/* <option>Others</option> */}
              </select>
            </div>
            {userType === "mechanic" && (
              <div className="flex flex-col mb-4">
                <label
                  className="mb-2 font-medium text-sm text-gray-900"
                  htmlFor="serviceCharges"
                >
                  Service Charges
                </label>
                <input
                  className="border py-1 px-2 text-grey-800 text-sm"
                  type="number"
                  name="serviceCharges"
                  id="serviceCharges"
                  value={serviceCharges}
                  onChange={(e) => setServiceCharges(e.target.value)}
                />
              </div>
            )}

            <div>
              <button
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 hover:bg-orange-400 py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-orange-800 focus:ring-offset-2"
                onClick={(e) => addUser(e)}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaUserPlus className="h-5 w-5" aria-hidden="true" />
                </span>
                Sign Up
              </button>
            </div>

            <div className="flex items-center justify-center mt-5">
              <hr></hr>
              <div className="text-sm">
                <span>Already have an Account? </span>
                <NavLink to="/login">
                  <span className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Sign In
                  </span>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
