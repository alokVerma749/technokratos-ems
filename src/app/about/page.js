import React from "react";
import Member from "./member";

const About = () => {
  return (
    <>
      <section className="mb-4 border-b-2">
        <p className="font-xl md:text-2xl lg:text-4xl font-bold text-indigo-700 text-center p-6 ml-10">About Our Society And Events</p>
        <div>
          <p className="font-lg md:text-xl lg:text-2xl font-bold text-blue-700">
            CSSE <span>(Computer Society Of Software Engineers)</span>
          </p>
          <p className="font-semibold text-lg mb-10 text-indigo-400 italic">- Spark to better initiative</p>
          <div className="font-base text-lg">
            <p>
              Founded in the year 2013, by Alumni Respected Ankit Porwal and
              Vivek Samele
            </p>
            <div>
              <h2 className="font-semibold text-xl py-5">Objective</h2>
              <ul className="pb-2">
                <li>1. To develop the managerial and soft skills of the students</li>
                <li>2. To organize activities for social awareness and social benefits.</li>
                <li>3. To increase mutual bonding among each other</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-3xl font-bold underline text-indigo-600 flex justify-center items-center">
        Our Current Members
      </h2>
      <Member/>
    </>
  );
};

export default About;
