import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

function AssignMember() {
  const [isOpen, setIsOpen] = useState(false);
  const [members, setMembers] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        };

        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + "/api/getmembers",
          options
        );
        const jsonResponse = await response.json();
        setMembers(jsonResponse);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative inline-block text-left mb-4">
        <div>
          <button
            type="button"
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            onClick={toggleDropdown}
          >
            Options
            <RiArrowDropDownLine
              className="h-5 w-5 ml-2 -mr-1"
              aria-hidden="true"
            />
          </button>
        </div>

        {isOpen && (
          <div className="origin-bottom-right absolute bottom-full mb-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {members.map((member, index) => (
                <Link
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {member.memberString}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AssignMember;
