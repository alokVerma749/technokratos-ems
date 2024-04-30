import React from 'react'

const MerchCard = ({name,price}) => {
  return (
    <>
        <div className='flex flex-col flex-wrap'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://source.unsplash.com/random/1000x1000/" alt="Merchandise" />
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-sm"> ${price}</p>
            </div>
            <div className="px-6 pb-2">
                <button className="bg-indigo-600 hover:bg-indigo-800  text-white font-bold py-2 px-4 rounded">
                Buy Now
                </button>
            </div>
            </div>
        </div>
    </>
  )
}

export default MerchCard