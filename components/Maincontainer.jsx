import Link from "next/link";
import React from "react";

const Maincontainer = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-[url(https://www.cowin.gov.in/precaution_banner_bg_web.c656a76b28237d8fb924.png)]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Historic & Unparalleled Achievement ! India's Glorious Journy of
              Vaccinations
            </h1>
            <p className="mb-8 leading-relaxed">
            "India is set to defeat Covid-19. Every Indian is making it possible." 
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-blackborder-0 py-2 px-6 focus:outline-none rounded text-lg font-bold">
                - PM Narendra Modi
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src="https://www.cowin.gov.in/assets/images/independance.svg"
              alt="Hero"
              className="object-cover object-center rounded"
            />
          </div>
        </div>
        {/* */}
        <div className="text-gray-600 body-font bg-blue-100">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://www.cowin.gov.in/assets/images/reports-aefi.svg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Report Side Effect
              </h1>
              <p className="mb-8 leading-relaxed">
                If you have experienced any side effect after COVID-19
                vaccination, it can be reported on Co-WIN using your registered
                mobile number.
              </p>
              <div className="flex justify-center">
                <Link href="https://cowin-safevac.nhp.gov.in/home.html#beneficiary">
                  <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Report Now
                  </button>
                </Link>
              </div>
            </div>
          </div>{" "}
          <div className="text-gray-600 body-font bg-white">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                  Children Vaccination
                </h1>
                <p className="mb-8 leading-relaxed text-black font-semibold">
                  Covovax vaccine is now available for Children of the age group
                  12+ yrs in Private Vaccination Center. The time span between
                  first and second dose of Covovax is 21 days. Children can be
                  administered with the second dose of Covovax within a month.
                  Children of the age group 12-14 yrs are now eligible for the
                  Corbevax vaccine in Government Vaccination Center and in
                  Private Vaccination Center 12+ yrs. The period between a first
                  and second dose of Corbevax is 28 days. Covaxin is available
                  for Children of the age group of 15+ yrs in both Government
                  and Private Vaccination Center. Children must be completed 4
                  to 6 weeks after administration of the first dose of Covaxin
                  to take the second dose of Covaxin. Both online and walk-in
                  are available.
                </p>
                <div className="flex justify-center">
                  <Link href="https://selfregistration.cowin.gov.in/">
                    <button className=" inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg ">
                      Book Your Slot
                    </button>
                  </Link>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://www.cowin.gov.in/assets/images/Children_Vaccination.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-600 body-font bg-blue-100">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://www.cowin.gov.in/assets/images/Date_Correction.svg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Vaccination Date Correction
              </h1>
              <p className="mb-8 leading-relaxed">
                If the date printed on your vaccination certificate differs from
                the actual date of vaccine administration, you may raise a
                request for correction of the same by submitting a valid proof
                of correct vaccination date.
              </p>
              <div className="flex justify-center">
                <Link href="https://selfregistration.cowin.gov.in/">
                  <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Update Date
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-600 body-font bg-white">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Free COVID Precaution Dose
              </h1>
              <p className="mb-8 leading-relaxed font-semibold">
                Now Precaution dose for 18-59 age group free at Government
                Vaccination Center.
              </p>
              <div className="flex justify-center">
                <Link href="https://selfregistration.cowin.gov.in/">
                  {" "}
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Book your Slot
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://www.cowin.gov.in/assets/images/free_covid_precaution_dose.svg"
              />
            </div>
          </div>
        </div>

        <div className="text-gray-600 body-font bg-blue-100">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://www.cowin.gov.in/assets/images/share_illustration.svg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Share Your Vaccination Status
              </h1>
              <p className="mb-8 leading-relaxed font-semibold">
                Be a Fighter! If you are fully or partially vaccinated, you can
                now share your vaccination status in your social circle. Let's
                encourage our friends and followers in joining India's battle
                against COVID-19.
              </p>
              <div className="flex justify-center">
                <Link href="https://cdn-api.co-vin.in/api/v3/vaccination/status/knowYourStatus">
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Share Your status
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* */}
      </section>
    </>
  );
};

export default Maincontainer;
