import React, { useState } from "react";
import Select from "react-select";
import { FaUserPlus, FaFilePrescription } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import axios from "axios";
import { UserContext } from "../../contexts/UserProvider";
import { LiaAdSolid } from "react-icons/lia";
// import { doctorsData } from '../data/DoctorsData';
// import { cpt4 } from '../data/cpt';
// import { medicines } from '../data/Medicine';
// import { backendUrl } from '../constants/urls';

const PostPartsAd = () => {
  // const { data, selectedPatient, setSelectedPatient } = useContext(UserContext);

  // const [sympTitle, setSympTitle] = useState();
  // const [prescription, setPrescription] = useState([]);
  // const [disease, setDisease] = useState();
  // const [med, setMeds] = useState();
  // const [dosage, setDosage] = useState();
  // const [no_of_dose, setNo_of_Dose] = useState();
  // const [labTests, setLabTests] = useState([]);
  // const [comments, setComments] = useState();
  // const [symptoms, setSymptoms] = useState([]);
  // const [record, setRecord] = useState();

  // // console.log(selectedPatient);
  // const patient = selectedPatient;

  // const addSymptomsHandler = (e) => {
  //   e.preventDefault();
  //   const symptom = {
  //     key: Math.random(),
  //     sym: sympTitle,
  //   };
  //   setSymptoms([...symptoms, symptom]);
  //   console.log(symptom.key);
  //   setSympTitle('');
  // };

  // const onDeleteHandler = (key) => {
  //   setSymptoms(symptoms.filter((element) => element.key !== key));
  // };

  // const addPrescriptionHandler = (e) => {
  //   e.preventDefault();
  //   console.log(prescription.includes(med));
  //   console.log(med);
  //   if (prescription.includes(med)) {
  //     alert('Prescription already exist');
  //   } else {
  //     setPrescription([
  //       ...prescription,
  //       {
  //         key: Math.random(),
  //         medicine: med,
  //         dosage,
  //         no_of_days: no_of_dose,
  //       },
  //     ]);
  //   }
  // };

  // const sendMedicalRecord = async (mRec) => {
  //   try {
  //     const res = axios.post(`${backendUrl}doctors/medicalRecord`, mRec, {
  //       headers: {
  //         Authorization: `Bearer ${data.jwt}`,
  //       },
  //     });
  //     console.log('res ', res);
  //     alert('medical record created ');
  //   } catch (e) {
  //     console.log(e);
  //     alert('unable to create medical record');
  //   }
  // };

  // const createMedicalRecord = (e) => {
  //   e.preventDefault();

  //   const symptomArr = symptoms.map((item) => item.sym);

  //   console.log(symptomArr);
  //   const rec = {
  //     patientId: patient.cnic,
  //     diagonsis: disease,
  //     symptoms: symptoms.map((item) => item.sym),
  //     labTests: labTests.map((item) => (`${item.value} - ${item.label}`)),
  //     prescription: prescription.map((item) => ({ medicineName: item.medicine, qty: item.dosage, days: item.no_of_days })),
  //     recommendation: comments,
  //   };
  //   setRecord(rec);
  //   console.log('Rec', rec);
  //   sendMedicalRecord(rec);
  // };

  // console.log(
  //   symptoms.map((item) => {
  //     console.log(item.sym);
  //   }),
  // );

  // console.log(record);

  // const onDeleteMedicineHandler = (key) => {
  //   setPrescription(prescription.filter((element) => element.key !== key));
  // };

  // const doc = {
  //   id: doctorsData[0].DoctorID,
  //   name: doctorsData[0].DoctorName,
  //   email: doctorsData[0].DoctorEmail,
  //   cnic: '34601-7383151-3',
  //   spec: doctorsData[0].Specialization,
  //   phn: doctorsData[0].Phn,
  //   pic: doctorsData[0].DoctorImage,
  // };

  // const status = {
  //   one: 'Active',
  //   two: 'On Hold',
  //   three: 'Completed',
  // };

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
                />
              </div>

              <div className="grid grid-cols-2 mb-4">
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
                  />
                  </div>
                </div>
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
                  />
                  </div>
                </div>
              </div>

              <div className="flex flex-col mb-4">
              <label
                className="mb-2 mr-3 font-semibold text-lg text-gray-900 w-28 "
                htmlFor="pic"
              >
                Picture
              </label>
              <input
                className="border py-1 px-2 text-grey-800 text-sm"
                type="file"
                accept=".jpg,.jpeg,.png"
                name="pic"
                id="pic"
                multiple
              />
            </div>

              <div className="flex flex-col mb-4 font-semibold">
                <label>Add Comments</label>
                <textarea
                  className="px-3 py-2 text-grey-800 border-2"
                  rows="4"
                  cols="50"
                  placeholder="Comments..."
                />
              </div>

            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PostPartsAd;
