import React from "react";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
function Member({ id, name, contactNo, email,std,branch }) {
  return (
    <div className="flex flex-col gap-1 border-2 shadow-xl rounded w-full sm:w-[70%] sm:mx-auto md: md:w-[330px] lg:w-[360px] my-6 p-2 hover:shadow-2xl bg-gray-200">
      <Image
        width="50"
        height="50"
        alt=""
        src="https://source.unsplash.com/1000x1000/?portrait"
        className="object-cover w-full shadow p-2 pb-0 dark:bg-gray-500 h-[300px]"
      />
      <h2 className="w-full items-center flex text-xl px-2 font-bold text-indigo-600">
        Executive Member
      </h2>
      <div className="flex justify-between items-center w-full p-1">
        <h2 className="text-black font-bold">{name}</h2>
        <p className="text-gray-600 text-sm">
          {branch} {std}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs text-indigo-400">
          <LocalPhoneIcon /> {contactNo}
        </div>
        <div className="text-xs text-indigo-400">
          <EmailIcon />
          {email}{" "}
        </div>
      </div>
    </div>
  );
}

export default Member;
