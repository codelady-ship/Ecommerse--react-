
import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2">
      <div className="border-t-4 border-green-600 border-solid w-16 h-16 rounded-full animate-spin"></div>
      <div className="font-bold text-2xl text-emerald-800 ">Loading...</div> 
    </div>
  )
};

export default Loader;
