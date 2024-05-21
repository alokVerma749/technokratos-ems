import Image from "next/image";
import React from "react";
import Link from "next/link";

const ContributorCard = ({ name, role, github, portfolio, imgsrc }) => {
  return (
    <div className="bg-gray-700 bg-opacity-90 p-4 rounded-lg shadow-lg">
      <div className="border-2 border-gray-50 rounded-lg overflow-hidden">
        <Image
          className="w-[200px] h-[200px] rounded-[50%] mx-auto mt-2"
          src={imgsrc}
          alt={`${name}'s avatar`}
          width={200}
          height={200}
        />
        <div className="px-6 py-4">
          <h2 className="text-fuchsia-400 text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-200 text-base font-semibold mb-4">{role}</p>
          <Link href={github} target="_blank" className="text-gray-200 text-base block mb-2">
            GitHub
          </Link>
          <Link href={portfolio} target="_blank" className="text-gray-200 text-base block">
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContributorCard;
