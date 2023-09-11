// Shimmer.js
import React from 'react';

const Shimmer = () => {
    return (
        <div className="bg-gray-100 w-[245px] h-[156px] pt-2 pl-4 pr-4 pb-2 rounded-lg shadow-md animate-pulse">
            <h2 className="text-2xl font-bold mb-4"></h2>
            <p className="text-sm"> </p>
            <div className='flex items-center justify-end relative top-14 '>
                <button className="bg-gray-200 w-[30px] h-[30px] p-2 rounded-full mt-10 ml-1"> </button>
                <button className="bg-gray-200 w-[30px] h-[30px] p-2 rounded-full mt-10 ml-1"> </button>
                <button className="bg-gray-200 w-[30px] h-[30px] p-2 rounded-full mt-10 ml-1"> </button>
            </div>
        </div>
    );
}

export default Shimmer;
