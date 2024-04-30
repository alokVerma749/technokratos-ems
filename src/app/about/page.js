import React from "react";
import Member from "./member";

const About = () => {
  const members = [
    {
      id: 1,
      name: "Sachin Chhauhan",
      contactNo: "639330647",
      email: "010sssachin@gmail.com",
    },
    {
      id: 2,
      name: "John Doe",
      contactNo: "123456789",
      email: "johndoe@example.com",
    },

    {
      id: 3,
      name: "Emily Smith",
      contactNo: "987654321",
      email: "emilysmith@example.com",
    },

    {
      id: 4,
      name: "Michael Johnson",
      contactNo: "555123456",
      email: "michaelj@example.com",
    },

    {
      id: 5,
      name: "Jessica Brown",
      contactNo: "789456123",
      email: "jessicabrown@example.com",
    },

    {
      id: 6,
      name: "David Wilson",
      contactNo: "456789123",
      email: "davidwilson@example.com",
    },

    {
      id: 7,
      name: "Maria Garcia",
      contactNo: "321654987",
      email: "mariag@example.com",
    },

    {
      id: 8,
      name: "James Martinez",
      contactNo: "159357852",
      email: "jamesmartinez@example.com",
    },

    {
      id: 9,
      name: "Linda Taylor",
      contactNo: "753951456",
      email: "lindataylor@example.com",
    },

    {
      id: 10,
      name: "Christopher Lee",
      contactNo: "369258147",
      email: "christopherlee@example.com",
    },

    {
      id: 11,
      name: "Amanda Hernandez",
      contactNo: "951753369",
      email: "amandah@example.com",
    },

    {
      id: 12,
      name: "Daniel Kim",
      contactNo: "123987456",
      email: "danielkim@example.com",
    },

    {
      id: 13,
      name: "Melissa Nguyen",
      contactNo: "789654123",
      email: "melissanguyen@example.com",
    },

    {
      id: 14,
      name: "Ryan Perez",
      contactNo: "456321789",
      email: "ryanperez@example.com",
    },

    {
      id: 15,
      name: "Jennifer Davis",
      contactNo: "987321654",
      email: "jenniferdavis@example.com",
    },

    {
      id: 16,
      name: "Matthew Brown",
      contactNo: "654987321",
      email: "matthewbrown@example.com",
    },

    {
      id: 17,
      name: "Laura Rodriguez",
      contactNo: "321789654",
      email: "laurarodriguez@example.com",
    },

    {
      id: 18,
      name: "Kevin Gonzalez",
      contactNo: "654123987",
      email: "kevingonzalez@example.com",
    },

    {
      id: 19,
      name: "Sarah Miller",
      contactNo: "987654321",
      email: "sarahmiller@example.com",
    },

    {
      id: 20,
      name: "Jason Moore",
      contactNo: "321654987",
      email: "jasonmoore@example.com",
    },

    {
      id: 21,
      name: "Karen White",
      contactNo: "654987321",
      email: "karenwhite@example.com",
    },
  ];

  return (
    <>
      <section className="mb-4 border-b-2">
        <p className="font-xl md:text-2xl lg:text-4xl font-bold text-indigo-700 text-center p-6 ml-10">
          About Our Society And Events
        </p>
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
                <li>
                  1. To develop the managerial and soft skills of the students
                </li>
                <li>
                  2. To organize activities for social awareness and social
                  benefits.
                </li>
                <li>3. To increase mutual bonding among each other</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-3xl font-bold underline text-indigo-600 flex justify-center items-center">
        Our Current Members
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-start items-center space-x-10 p-0 md:p-10">
        {members.map((item) => {
          return <Member {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default About;
