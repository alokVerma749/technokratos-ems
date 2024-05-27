import React from 'react';
import Image from 'next/image';
const SponsorPage = () => {
  const sponsors = [
    {
      id: 1,
      name: "Company A",
      logo: "https://websitedemos.net/christmas-party-04/wp-content/uploads/sites/1127/2022/12/Sponsor-6.svg",
      website: "https://www.companya.com"
    },
    {
      id: 2,
      name: "Company B",
      logo: "https://websitedemos.net/christmas-party-04/wp-content/uploads/sites/1127/2022/12/Sponsor-2.svg",
      website: "https://www.companyb.com"
    },
    {
      id: 3,
      name: "Company C",
      logo: "https://websitedemos.net/christmas-party-04/wp-content/uploads/sites/1127/2022/12/Sponsor-1.svg",
      website: "https://www.companyc.com"
    },
    // Add more companies here
  ];

  return (
    <div className="min-h-screen py-12 px-20 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center space-x-20">
        <h2 className="text-5xl font-extrabold">Our Sponsors</h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sponsors.map(sponsor => (
            <div key={sponsor.id} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <div className="flex items-center justify-center h-32 white">
                  <Image src={sponsor.logo} alt={sponsor.name} height={200} width={200} className="object-contain" />
                </div>
                <div className="py-4 px-6">
                  <h3 className="text-lg font-semibold">{sponsor.name}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;
