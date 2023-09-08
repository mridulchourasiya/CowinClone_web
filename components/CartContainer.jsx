import React from "react";

const CartContainer = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
              Our Partners
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://www.cowin.gov.in/assets/images/partners_page.svg"
              />
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-10 rounded object-cover object-center "
                src="https://www.cowin.gov.in/assets/images/digilocker_new_Logo.svg"
                alt="content"
              />
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-10 rounded  object-cover object-center "
                src="https://www.cowin.gov.in/assets/images/umang_new_logo.svg"
                alt="content"
              />
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-10 rounded  object-cover object-center "
                src="https://www.cowin.gov.in/assets/images/arogya_setu_logo1.svg"
                alt="content"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
