import React from "react";

export default function Chatbot() {
  return (
    <div className="w-full">
      <div className="w-full  h-14 bg-[#ea580c] flex justify-center items-center">
        <p className="text-lg font-bold text-white">Chatbot</p>
      </div>
      <div className="mt-2 w-full h-[100%] flex justify-center items-center">
        <iframe
          title="chatbot"
          allow="microphone;"
          width="550"
          height="800"
          src="https://console.dialogflow.com/api-client/demo/embedded/a1f2ab4e-1c9d-455f-b88d-139f5dc4b0cf"
        ></iframe>
      </div>
      {/* <div className="w-full fixed bottom-14 h-20 bg-slate-300 flex justify-start items-center px-4 gap-3">
        <input className="w-[60%] h-12 rounded-lg" />
        <button className=" w-[15%] bg-[#ea580c] h-12 rounded-lg">Send</button>
      </div> */}
    </div>
  );
}
