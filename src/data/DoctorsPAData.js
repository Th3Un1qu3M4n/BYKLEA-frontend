import React, { useState } from 'react'
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

const gridPAProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.PAImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

// const gridEmployeeCountry = (props) => (
//   <div className="flex items-center justify-center gap-2">
//     <GrLocation />
//     <span>{props.Country}</span>
//   </div>
// );

export const PAGrid = [
  { headerText: 'Assistant',
    width: '150',
    template: gridPAProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center' },
  { field: 'PA_ID',
    headerText: 'PA ID',
    width: '125',
    textAlign: 'Center' },
];


export const PAData = [
  {
    PA_ID: 1,
    Name: "Nancy Davolio",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Sunil",
    PAImage: avatar3,
  },
  {
    PA_ID: 2,
    Name: "Nasimiyu Danai",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Andrew",
    PAImage: avatar,
  },
  {
    PA_ID: 3,
    Name: "Iulia Albu",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Nerav",
    PAImage: avatar4,
  },
  {
    PA_ID: 4,
    Name: "Siegbert Gottfried",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Christopher",
    PAImage: avatar2,
  },
  {
    PA_ID: 1,
    Name: "Nancy Davolio",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Sunil",
    PAImage: avatar3,
  },
  {
    PA_ID: 2,
    Name: "Nasimiyu Danai",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Andrew",
    PAImage: avatar,
  },
  {
    PA_ID: 3,
    Name: "Iulia Albu",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Nerav",
    PAImage: avatar4,
  },
  {
    PA_ID: 4,
    Name: "Siegbert Gottfried",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Christopher",
    PAImage: avatar2,
  },
  {
    PA_ID: 1,
    Name: "Nancy Davolio",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Sunil",
    PAImage: avatar3,
  },
  {
    PA_ID: 2,
    Name: "Nasimiyu Danai",
    HireDate: "01/02/2021",
    ReportsTo: "Andrew",
    PAImage: avatar,
  },
  {
    PA_ID: 3,
    Name: "Iulia Albu",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Nerav",
    PAImage: avatar4,
  },
  {
    PA_ID: 4,
    Name: "Siegbert Gottfried",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Christopher",
    PAImage: avatar2,
  },
  {
    PA_ID: 1,
    Name: "Nancy Davolio",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Sunil",
    PAImage: avatar3,
  },
  {
    PA_ID: 2,
    Name: "Nasimiyu Danai",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Andrew",
    PAImage: avatar,
  },
  {
    PA_ID: 3,
    Name: "Iulia Albu",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Nerav",
    PAImage: avatar4,
  },
  {
    PA_ID: 4,
    Name: "Siegbert Gottfried",
    Email:"nancy@gmail.com",
    HireDate: "01/02/2021",
    ReportsTo: "Christopher",
    PAImage: avatar2,
  },
];
