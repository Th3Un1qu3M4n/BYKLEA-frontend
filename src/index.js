import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from './contexts/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';

const root = ReactDOM.createRoot(document.getElementById("root"));
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpRGBGfV5yd0VBalhSTnNbUiweQnxTdEZiWX5acHNRRWVZVEJxWA==');
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
