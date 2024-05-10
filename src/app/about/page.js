import React from "react";
import Member from "./member";
import HigherPost from "./higherPost";

const About = () => {
  const members = [
    {
      id: 1,
      name: "Sachin Chhauhan",
      contactNo: "639330647",
      email: "010sssachin@gmail.com",
      std: "1st year",
      branch:"MCA",
      imgsrc:'/assets/scm1.jpg'
    },
    {
      id: 2,
      name: "Utkarsh Tiwari",
      contactNo: "8707293899",
      email: "uktiwari023@gmail.com",
      std: "1st year",
      branch:"MCA",
      imgsrc:'/assets/utm1.jpg'
    },

    {
      id: 3,
      name: "Ahmad Faraz Ansari",
      contactNo: "9161005786",
      email: "frzansari20@gmail.com",
      std: "1st year",
      branch:"MCA",
      imgsrc:'/assets/afam1.jpg'
    },

    {
      id: 4,
      name: "Divyanshu Kanaujia",
      contactNo: "8355068537",
      email: "itsdivyanshu379@gmail.com",
      std: "1st year",
      branch:"MCA",
      imgsrc:'/assets/dkm1.jpg'
    },

    {
      id: 5,
      name: "Krishna Nand",
      contactNo: "6392806914",
      email: "kn168679@gmail.com",
      std: "1st year",
      branch:"MCA",
      imgsrc:'/assets/knm1.png'
    },

    {id: 6,
      name: "Shrey Srivastava",
      contactNo: "9839616657",
      email: "srivastavashrey01@gmail.com",
      std: "1st year",
      branch:"MCA",
      imgsrc:'/assets/ssm1.png'
    },

    {
      id: 7,
      name: "Siddhi Mishra",
      contactNo: "8545882207",
      email: "mishrasiddhi141@gmail.com",
      std: "1st year",
      branch:"MCA",
      imgsrc:'/assets/smm1.png'
    },

    {
      id: 8,
      name: "Rupali Mishra",
      contactNo: "8382883705",
      email: "mishrarupali.342@gmail.com",
      std: "1st year",
      branch:"MCA",
      imgsrc:'/assets/rmm1.png'
    },

    {
      id: 9,
      name: "Sanchita Bajpai",
      contactNo: "7985139739",
      email: "mansibajpai93@gmail.com",
      std: "1st year",
      branch:"MCA",
      imgsrc:'/assets/sbm1.png'
    },

    {
      id: 10,
      name: "Abhishrestha Tiwari",
      contactNo: "7250680899",
      email: "Not Avaliable",
      std: "2nd year",
      branch:"BTech IT",
      imgsrc:'/assets/atb2.jpg'
    },

    {
      id: 11,
      name: "Aditya Tripathi",
      contactNo: "8318638602",
      email: "Not Avaliable",
      std: "2nd year",
      branch:"BTech IT",
      imgsrc:'/assets/adtb2.jpg'
    },

    {
      id: 12,
      name: "Amit Kumar Sahani",
      contactNo: "9559039538",
      email: "Not Avaliable",
      std: "2nd year",
      branch:"BTech IT",
      imgsrc:'/assets/aksb2.jpg'
    },

    {
      id: 13,
      name: "Anshul Sengar",
      contactNo: "8534899071",
      email: "Not Avaliable",
      std: "2nd year",
      branch:"BTech IT",
      imgsrc:'/assets/asb2.jpg'
    },

    {
      id: 14,
      name: "Himani Rajput",
      contactNo: "7906015931",
      email: "Not Avaliable",
      std: "2nd year",
      branch:"BTech IT",
      imgsrc:'/assets/hrb2.jpg'
    },

    {
      id: 15,
      name: "Kumari Nisha",
      contactNo: "9528616138",
      email: "Not Avaliable",
      std: "2nd year",
      branch:"BTech IT",
      imgsrc:'/assets/knb2.jpg'
    },

    {
      id: 16,
      name: "Manoj Kumar",
      contactNo: "8382832716",
      email: "Not Avaliable",
      std: "2nd year",
      branch:"BTech IT",
      imgsrc:'/assets/mkb2.jpg'
    },

    {
      id: 17,
      name: "Priya Yadav",
      contactNo: "7268823057",
      email: "Not Avaliable",
      std: "2nd year",
      branch:"BTech IT",
      imgsrc:'/assets/pyb2.jpg'
    },

    {
      id: 18,
      name: "Vishesh Singh",
      contactNo: "8866448670",
      email: "Not Avaliable",
      std: "2nd year",
      branch:"BTech IT",
      imgsrc:'/assets/vsb2.jpg'
    },

    {
      id: 19,
      name: "Alabhya Goyal",
      contactNo: "9118993969",
      email: "Not Avaliable",
      std: "3rd year",
      branch:"BTech IT",
      imgsrc:'/assets/agb3.jpg'
    },

    {
      id: 19,
      name: "Komal Gupta",
      contactNo: "9453106856",
      email: "Not Avaliable",
      std: "3rd year",
      branch:"BTech IT",
      imgsrc:'/assets/kgb3.jpg'
    },

    {
      id: 20,
      name: "Perneeta Awasthi",
      contactNo: "7014950194",
      email: "Not Avaliable",
      std: "3rd year",
      branch:"BTech IT",
      imgsrc:'/assets/pab3.jpg'
    },
    {
      id: 21,
      name: "Shristi Singh",
      contactNo: "7355376959",
      email: "Not Avaliable",
      std: "3rd year",
      branch:"BTech IT",
      imgsrc:'/assets/sgb3.jpg'
    },
    {
      id: 22,
      name: "Vaibhav Garg",
      contactNo: "9027474094",
      email: "Not Avaliable",
      std: "3rd year",
      branch:"BTech IT",
      imgsrc:'/assets/vgb3.jpg'
    },
  ];

  const higherPost=[
    {
      id: 1,
      name: "Shivam Verma",
      contactNo: "9793736695",
      email: "not avaliable",
      post:"Student Secretary",
      year:"Btech 4th yr",
      imgsrc:"/assets/sdb4.jpg"
    },
    {
      id: 2,
      name: "Himanshu Dubey",
      contactNo:"8853321995",
      email: "not avaliable",
      post: "Student Vice Secretary",
      year:"BTeach 3rd yr",
      imgsrc:"/assets/hdb3.jpg"
    },

    {
      id: 3,
      name: "Hardik Dwivedi",
      contactNo: "987654321",
      email: "not avaliable",
      post: "Student Joint Treasurer",
      year:"MCA 2nd yr",
      imgsrc:"/assets/hdm2.jpg"
    },

  ]

  return (
    <>
      <section className="mb-4">
        <p className="font-xl md:text-2xl lg:text-4xl font-bold border-b-2 pb-2 mb-4 text-indigo-700 text-center p-6 ml-10">
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
        Higher Post
      </h2>
      <div className="flex flex-wrap flex-col md:flex-row justify-center mx-auto">
        {higherPost.map((item) => {
          return <HigherPost {...item} key={item.id} />;
        })}
      </div>
      <h2 className="text-3xl font-bold underline text-indigo-600 flex justify-center items-center">

        Our Current Members
      </h2>
      <div className="flex flex-wrap flex-col md:flex-row justify-center mx-auto">
        {members.map((item) => {
          return <Member {...item} key={item.id} />;
        })}
      </div>
      
    </>
  );
};

export default About;
