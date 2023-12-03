import React, { useState } from 'react'
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

const doctorGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p className={` ${
          props.Status=="Active" ? "bg-green-500" : "bg-red-500 "} rounded-full h-3 w-3`} />
    <p>{props.Status}</p>
  </div>
);

const doctorGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.DoctorImage}
      alt="employee"
    />
    <div>
      <p>{props.DoctorName}</p>
      <p>{props.DoctorEmail}</p>
    </div>
  </div>
);

export const doctorsGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name',
    width: '150',
    template: doctorGridImage,
    textAlign: 'Center' },
  { field: 'Specialization',
    headerText: 'Specialization',
    width: '150',
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: doctorGridStatus },
  {
    field: 'Timings',
    headerText: 'Timings',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
    { field: 'PendingAppointments',
    headerText: 'Pending Appointments',
    width: '150',
    textAlign: 'Center' },
  { field: 'Stars',
    headerText: 'Stars',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },
  { field: 'DoctorID',
    headerText: 'Doctor ID',
    width: '100',
    textAlign: 'Center' },
];

export const doctorsData = [
  {
    DoctorID: 1001,
    DoctorName: 'Nirav Joshi',
    DoctorEmail: 'nirav@gmail.com',
    DoctorImage:
      avatar2,
    Specialization: 'Orthopedic',
    Status: 'Active',
    Timings: '4PM - 10PM',
    PendingAppointments: '40',
    Stars: '1',
  },
  {
    DoctorID: 1002,
    DoctorName: 'Sunil Joshi',
    DoctorEmail: 'sunil@gmail.com',
    DoctorImage:
      avatar3,
    Specialization: 'Child Specialist',
    Status: 'Closed',
    Timings: '2PM - 6PM',
    PendingAppointments: '3',
    Stars: '3',
  },
  {
    DoctorID: 1003,

    DoctorName: 'Andrew McDownland',
    DoctorEmail: 'andrew@gmail.com',
    DoctorImage:
      avatar4,
    Specialization: 'ENT Specialist',
    Status: 'Closed',
    Timings: '8AM - 3PM',
    PendingAppointments: '2',
    Stars: '4',
  },
  {
    DoctorID: 1004,

    DoctorName: 'Christopher Jamil',
    DoctorEmail: 'jamil@gmail.com',
    DoctorImage:
      avatar,
    Specialization: 'Skin Specialist',
    Status: 'Active',
    Timings: '12PM - 8PM',
    PendingAppointments: '1',
    Stars: '4.5',
  },
  {
    DoctorID: 1001,
    DoctorName: 'Nirav Joshi',
    DoctorEmail: 'nirav@gmail.com',
    DoctorImage:
      avatar2,
    Specialization: 'Orthopedic',
    Status: 'Active',
    Timings: '4PM - 10PM',
    PendingAppointments: '40',
    Stars: '5',
  },
  {
    DoctorID: 1002,
    DoctorName: 'Sunil Joshi',
    DoctorEmail: 'sunil@gmail.com',
    DoctorImage:
      avatar3,
    Specialization: 'Child Specialist',
    Status: 'Closed',
    Timings: '2PM - 6PM',
    PendingAppointments: '3',
    Stars: '3',
  },
  {
    DoctorID: 1003,

    DoctorName: 'Andrew McDownland',
    DoctorEmail: 'andrew@gmail.com',
    DoctorImage:
      avatar4,
    Specialization: 'ENT Specialist',
    Status: 'Closed',
    Timings: '8AM - 3PM',
    PendingAppointments: '2',
    Stars: '4',
  },
  {
    DoctorID: 1004,

    DoctorName: 'Christopher Jamil',
    DoctorEmail: 'jamil@gmail.com',
    DoctorImage:
      avatar,
    Specialization: 'Skin Specialist',
    Status: 'Active',
    Timings: '12PM - 8PM',
    PendingAppointments: '1',
    Stars: '4.5',
  },
  {
    DoctorID: 1001,
    DoctorName: 'Nirav Joshi',
    DoctorEmail: 'nirav@gmail.com',
    DoctorImage:
      avatar2,
    Specialization: 'Orthopedic',
    Status: 'Active',
    Timings: '4PM - 10PM',
    PendingAppointments: '40',
    Stars: '5',
  },
  {
    DoctorID: 1002,
    DoctorName: 'Sunil Joshi',
    DoctorEmail: 'sunil@gmail.com',
    DoctorImage:
      avatar3,
    Specialization: 'Child Specialist',
    Status: 'Closed',
    Timings: '2PM - 6PM',
    PendingAppointments: '3',
    Stars: '3',
  },
  {
    DoctorID: 1003,

    DoctorName: 'Andrew McDownland',
    DoctorEmail: 'andrew@gmail.com',
    DoctorImage:
      avatar4,
    Specialization: 'ENT Specialist',
    Status: 'Closed',
    Timings: '8AM - 3PM',
    PendingAppointments: '2',
    Stars: '4',
  },
  {
    DoctorID: 1004,

    DoctorName: 'Christopher Jamil',
    DoctorEmail: 'jamil@gmail.com',
    DoctorImage:
      avatar,
    Specialization: 'Skin Specialist',
    Status: 'Active',
    Timings: '12PM - 8PM',
    PendingAppointments: '1',
    Stars: '4.5',
  },
  {
    DoctorID: 1001,
    DoctorName: 'Nirav Joshi',
    DoctorEmail: 'nirav@gmail.com',
    DoctorImage:
      avatar2,
    Specialization: 'Orthopedic',
    Status: 'Active',
    Timings: '4PM - 10PM',
    PendingAppointments: '40',
    Stars: '5',
  },
  {
    DoctorID: 1002,
    DoctorName: 'Sunil Joshi',
    DoctorEmail: 'sunil@gmail.com',
    DoctorImage:
      avatar3,
    Specialization: 'Child Specialist',
    Status: 'Closed',
    Timings: '2PM - 6PM',
    PendingAppointments: '3',
    Stars: '3',
  },
  {
    DoctorID: 1003,

    DoctorName: 'Andrew McDownland',
    DoctorEmail: 'andrew@gmail.com',
    DoctorImage:
      avatar4,
    Specialization: 'ENT Specialist',
    Status: 'Closed',
    Timings: '8AM - 3PM',
    PendingAppointments: '2',
    Stars: '4',
  },
  {
    DoctorID: 1004,

    DoctorName: 'Christopher Jamil',
    DoctorEmail: 'jamil@gmail.com',
    DoctorImage:
      avatar,
    Specialization: 'Skin Specialist',
    Status: 'Active',
    Timings: '12PM - 8PM',
    PendingAppointments: '1',
    Stars: '4.5',
  },
  ]

