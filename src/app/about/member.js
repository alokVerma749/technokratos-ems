import React from "react";
import Image from "next/image";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
function Member() {
  return (
    <div className="flex flex-col gap-1 p-2 w-1/4 rounded-md border-2">
        <Image
          width="50"
          height="50"
            alt=""
            src="https://source.unsplash.com/1000x1000/?portrait"
            className="object-cover w-full shadow p-2 pb-0 dark:bg-gray-500"
        />
        <h2 className="w-full items-center flex text-xl px-2 font-bold text-indigo-600">Executive Member</h2>
        <div className="flex justify-between items-center w-full p-1">
            <h2 className="text-black font-bold">John Doe</h2>
            <p className="text-gray-600 text-sm">MCA 1 <sup>st</sup> year</p>
        </div>
        <div className="flex items-center justify-between">
            <div className="text-xs text-indigo-400"><LocalPhoneIcon/> 1234567890</div>
            <div className="text-xs text-indigo-400"><EmailIcon/> xyzsi@somemail.com</div>
        </div>
    </div>
  );
}

export default Member;
