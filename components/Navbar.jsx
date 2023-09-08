import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <footer className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                className="h-10 mr-4 rounded-lg object-center"
                src="https://www.cowin.gov.in/assets/images/national-health-authority.jpg"
              />
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Vaccination Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://selfregistration.cowin.gov.in/"
                    className="text-white hover:text-gray-300"
                  >
                    Register Member
                  </a>
                </li>
                <li>
                  <a
                    href="https://selfregistration.cowin.gov.in/"
                    className="text-white hover:text-gray-300"
                  >
                    Book a Slot
                  </a>
                </li>
                <li>
                  <a
                    href="https://selfregistration.cowin.gov.in/"
                    className="text-white hover:text-gray-300"
                  >
                    Manage Appointment
                  </a>
                </li>
                <li>
                  <a
                    href="https://selfregistration.cowin.gov.in/"
                    className="text-white hover:text-gray-300"
                  >
                    Downloade Certificate
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font  text-white font-semibold tracking-widest text-sm mb-3">
              Platforms
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                  href="https://sandbox.cowin.gov.in/"
                  className="text-white hover:text-gray-300">
                    Cowin International
                  </a>
                </li>
                <li>
                  <a 
                  href="https://app.cowin.gov.in/login"
                  className="text-white hover:text-gray-300">
                    Vaccinator
                  </a>
                </li>
                <li>
                  <a 
                  href="https://admin.cowin.gov.in/"
                  className="text-white hover:text-gray-300">
                    Departmental Login
                  </a>
                </li>
              
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Resources
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a 
                  href="https://prod-cdn.preprod.co-vin.in/assets/pdf/User-Guide-Citizen-registration.pdf"
                  className="text-white hover:text-gray-300">
                  How To Get Vaccinated
                  </a>
                </li>
                <li>
                  <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf"  className="text-white hover:text-gray-300">
                  
                  Dos and Don'ts 
                  </a>
                </li>
                <li>
                  <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/CoWIN_Overview.pdf"  className="text-white hover:text-gray-300">
                  Overview 
                  </a>
                </li>
              <li>
                  <a  href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Grievance_Guidelines.pdf" className="text-white hover:text-gray-300">
                  Grievance Guidelines 
                  </a>
                </li>
              </nav>
            </div>
           
          </div>
        </div>
        <div className="bg-gray-500">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
            Copyright © 2021 Co-WIN. All Rights Reserved 
              <a
                href="https://www.cowin.gov.in/terms-condition"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
              Terms of Service
             
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
