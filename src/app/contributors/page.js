import React from 'react';
import ContributorCard from '@/components/contributorCard';

const contributors = [
  {
    name: 'Alok Verma',
    role: 'Backend Developer',
    github: 'https://github.com/alokVerma749',
    portfolio: 'https://alokverma.vercel.app',
  },
  {
    name: 'Sachin Chauhan',
    role: 'Frontend Developer',
    github: 'https://github.com/sachinchauhan010',
    portfolio: 'https://sachinchauhan.vercel.app'
  },
  {
    name: 'Utkarsh Tiwari',
    role: 'Frontend Developer',
    github: 'https://github.com/imutkarsht',
    portfolio: 'https://utkarsh-tiwari-portfolio.vercel.app/contact'
  },
];

const ContributorsPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8 text-center">Contributors</h1>
      <div className="flex flex-wrap -mx-4">
        {contributors.map((contributor, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <ContributorCard {...contributor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributorsPage;
