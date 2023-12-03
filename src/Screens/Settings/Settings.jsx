import React from "react";
import { TbSettingsCog } from "react-icons/tb";

const Setting = () => {
  return (
    <div className="mt-9">
      <div className="dark:text-gray-400 text-orange-600 p-8 flex">
        <TbSettingsCog size={50} />
        <h1 className="text-3xl font-bold text-orange-600 my-auto ml-3">
          Settings
        </h1>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="w-4/5 bg-white rounded-lg shadow-2xl p-8 m-4 mx-auto my-auto">
          <div className="mb-5">
            <h1 className="block w-full text-gray-800 text-lg font-semibold mb-6">
              ChatBot (AskEaze) Usage
            </h1>
            <span className="font-semibold">AskEaze</span> is your personal AI
            Tool which will help you in your queries regarding the website and
            provide you with vauable suggestions and feedback.
            <h3 className="mt-2 font-semibold">
              Please follow the below provided steps to understand the Chatbot
            </h3>
            <ul className="list-disc pl-8">
              <li>Type any sorts of queries in the provided area.</li>
              <li>
                Our Trained Model AI will break the query in to small steps.
              </li>
              <li>
                Using the <span className="font-semibold">Advanced</span>{" "}
                Machine Learning Algorithms, the response will be displayed in
                the form of chat.
              </li>
              <li>
                In case, you are not satisfied with the result, you can{" "}
                <span className="font-semibold">Re-Generate</span> the answer,
                Or ask the bot in a different way.
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <hr></hr>
            <h1 className="mt-4 block w-full text-gray-800 text-lg font-semibold mb-6">
              Ads Guideline
            </h1>
            <h3 className="mt-2 font-semibold">Post An Ad:</h3>
            <ul className="list-disc pl-8">
              <li>
                Go to <span className="font-semibold">Add A Product page</span>.
              </li>
              <li>Enter all the details of your product.</li>
              <li>Make sure all the entered details are Accurate.</li>
              <li>Upload the Accurate and Clear pictures of your product.</li>
              <li>Re-check the information added.</li>
              <li>Click POST.</li>
            </ul>

            <h3 className="mt-2 font-semibold">Compare Ads:</h3>
            <ul className="list-disc pl-8">
              <li>
                Our Platform provides you with the feature to{" "}
                <span className="font-semibold">COMPARE</span> different
                products.
              </li>
              <li>
                This comparison is Side-by-Side which will provide you a better
                understanding of both the products.
              </li>
              <li>It will help you make your BUYING Decision easier.</li>
              <li>Upload the Accurate and Clear pictures of your product.</li>
            </ul>

            <h3 className="mt-2 font-semibold">Report Ads:</h3>
            <ul className="list-disc pl-8">
              <li>
                You can report an ad if you believe that the content of the ad
                is in accurate or a spam.
              </li>
              <li>
                Just click the REPORT Button available at the top of every ad.
              </li>
              <li>
                The admin will then have the authority to view and manage these
                products.
              </li>
              <li>
                However, in case of wrong reporting, there can be consequences.
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <hr></hr>
            <h1 className="mt-4 block w-full text-gray-800 text-lg font-semibold mb-6">
              Privacy
            </h1>
            <p>
              <h3 className="font-semibold">
                <span className="text-orange-600 font-bold text-lg">
                  BYKLEA
                </span>{" "}
                Privacy Agreement
              </h3>
              <ul>
                <li className="ml-8 list-decimal mt-4">
                  <span className="font-semibold">Introduction</span>{" "}
                  <p>
                    Welcome to{" "}
                    <span className="font-bold text-orange-600">BYKLEA</span>.
                    Your privacy and the security of your personal information
                    are important to us. This Privacy Agreement outlines how we
                    collect, use, disclose, and protect your data when you visit
                    and make purchases from our store. By accessing or using our
                    services, you consent to the practices described in this
                    agreement.
                  </p>
                </li>
                <li className="ml-8 list-decimal mt-4">
                  <span className="font-semibold">Information We Collect</span>{" "}
                  <ul>
                    <li className="ml-8 list-disc mt-4">
                      <span className="font-semibold">
                        Personal Information:
                      </span>
                      <p>
                        When you interact with{" "}
                        <span className="font-bold text-orange-600">
                          BYKLEA
                        </span>
                        , we may collect personal information such as your name,
                        shipping address, billing address, email address, and
                        payment information. We collect this information to
                        process your orders and provide customer support.
                      </p>
                    </li>
                    <li className="ml-8 list-disc mt-4">
                      <span className="font-semibold">
                        Browsing Information:
                      </span>
                      <p>
                        We may collect non-personal information about your visit
                        to our store, including your IP address, browser type,
                        and the pages you visit. This helps us improve our
                        website and services.
                      </p>
                    </li>
                    <li className="ml-8 list-disc mt-4">
                      <span className="font-semibold">
                        How We Use Your Information:
                      </span>
                      <p>
                        We use your personal information to process and fulfill
                        your orders, including shipping, delivery, and customer
                        support. and We may use your email address to
                        communicate with you regarding your orders, updates, and
                        promotional offers. You can opt-out of promotional
                        emails at any time. Furthermore, We analyze non-personal
                        information to improve our website and services,
                        enhancing your shopping experience.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <p className="font-semibold mt-4">
              Do Contact Our Team on{" "}
              <span className="text-orange-600">BYKLEA.enjoy@gmail.com</span> OR
              Call Us{" "}
              <span className="text-orange-600">(+92) 333 555 8855</span> in
              case of any inquiry.
            </p>
          </div>

          <div className="mb-5">
            <hr></hr>
            <h1 className="mt-4 block w-full text-gray-800 text-lg font-semibold mb-6">
              Account Settings
            </h1>
            <ul className="list-disc ml-8">
            <li>
                <h3 className="font-semibold text-red-500 mt-3 mb-3">
                  View/Edit Profile
                </h3>
                <div className="ml-8">
                  <button className="mt-5 group relative flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    Profile
                  </button>
                </div>
              </li>
              <li>
                <h3 className="font-semibold">Notifications</h3>
                <select className="border border-orange-950 py-1 px-2 text-white text-sm ml-28 bg-orange-600">
                  <option>Enable</option>
                  <option>Disable</option>
                  {/* <option>Others</option> */}
                </select>
              </li>
              <li>
                <h3 className="font-semibold text-red-500 mt-3 mb-3">
                  Delete Account?
                </h3>
                <div className="ml-8">
                  <p>
                    Warning: By Clicking the DELETE Button, your account will be
                    deleted permanently.
                  </p>
                  <button className="mt-5 group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2">
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
