import React from 'react'
import MerchCard  from './MerchCard';       
const merchandiseData = [
    {
      id: 1,
      name: "T-shirt",
      price: 20,
      image: "https://example.com/tshirt.jpg"
    },
    {
      id: 2,
      name: "Mug",
      price: 10,
      image: "https://example.com/mug.jpg"
    },
    {
      id: 3,
      name: "Hat",
      price: 15,
      image: "https://example.com/hat.jpg"
    },
    {
      id: 4,
      name: "Phone Case",
      price: 25,
      image: "https://example.com/phonecase.jpg"
    },
    {
      id: 5,
      name: "Hoodie",
      price: 35,
      image: "https://example.com/hoodie.jpg"
    },
    {
      id: 6,
      name: "Notebook",
      price: 8,
      image: "https://example.com/notebook.jpg"
    },
    {
      id: 7,
      name: "Water Bottle",
      price: 12,
      image: "https://example.com/waterbottle.jpg"
    },
    {
      id: 8,
      name: "Keychain",
      price: 5,
      image: "https://example.com/keychain.jpg"
    },
    {
      id: 9,
      name: "Sweatpants",
      price: 30,
      image: "https://example.com/sweatpants.jpg"
    },
    {
      id: 10,
      name: "Backpack",
      price: 40,
      image: "https://example.com/backpack.jpg"
    },
    {
      id: 11,
      name: "Poster",
      price: 15,
      image: "https://example.com/poster.jpg"
    }
  ];
  
const Merchandise = () => {
  return (
    <>
        <h2 className='flex w-full items-center justify-center text-3xl font-bold text-indigo-600 border-b-2 pb-2 mb-2'>Our Merchandises</h2>
        <div className='flex flex-wrap gap-2 w-full items-center justify-center'>


        {
            merchandiseData.map((item)=>{
                return <MerchCard {...item} key={item.id}/>
            })
        }
        </div>
        
    </>
  )
}

export default Merchandise