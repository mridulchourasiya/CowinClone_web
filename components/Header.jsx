"use client";

import React, { useEffect, useState } from "react";
import { auth, provider } from "./firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { Maincontainer } from ".";
import Link from "next/link";

const Header = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setValue(storedEmail);
    }
    console.log("Login successfully");
  }, []); // Add an empty dependency array to run this effect only once

  return (
    <div className="">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://www.mohfw.gov.in/" className="flex items-center">
            <img
              src="https://www.cowin.gov.in/assets/images/emblem-gov.svg"
              className="h-8 mr-3"
              alt="Covin Logo"
            />

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <img
                className=""
                src="https://www.cowin.gov.in/assets/images/new-logo.svg"
              />
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
            {value ? (
              <p className="text-white">Welcome, {value}</p>
            ) : (
              <button
                type="button"
                onClick={handleClick}
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="https://healthid.ndhm.gov.in/"
                  className="text-gray-900 dark:text-white hover:underline"
                  ariaCurrent="page"
                >
                  ABHA (Health ID)
                </a>
              </li>
              <li>
                <a
                  href="https://dashboard.cowin.gov.in/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="https://verify.cowin.gov.in/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Verify Certificate
                </a>
              </li>
              <li>
                <a 
                href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Frequently%20Asked%20Questions%20(FAQs)%20on%20Co-WIN_11_04_2023.pdf"
                className="text-gray-900 dark:text-white hover:underline">
                  F&Q
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
