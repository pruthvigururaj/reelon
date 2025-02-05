import React from "react";

function News()
{
    return(
        <div className="flex justify-center mt-4 ">
         <div className="sm:w-[90%] md:w-[80%] lg:w-[90%] w-[100%] relative pl-4 border-gray-200  bg-white py-2">
          <h1 className="py-4 text-2xl font-bold">News</h1>
          <h1>Related News</h1>

          <div className="flex flex-wrap gap-2 pr-2 mt-4">
  <div className="flex flex-row rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="r5.jpg" alt="Madras Cafe" />
    <div className="ml-1">
      <h1 className="text-base font-semibold cursor-pointer">Raashii Khanna on being part of Yodha: 'I thought only certain people got to be a Dharma heroine'</h1>
      <h3>Time Of india</h3>
      <h3>Nov 17 2024</h3>
      
    </div>
  </div>

  <div className="flex flex-row rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="r2.jpg" alt="Madras Cafe" />
    <div className="ml-1">
      <h1 className="text-base font-semibold cursor-pointer">The Sabarmati Report review: Even Vikrant Massey can't save this confused film</h1>
      <h3>Time Of india</h3>
      <h3>Nov 17 2024</h3>
    </div>
  </div>

  <div className="flex flex-row rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="r3.jpg" alt="Madras Cafe" />
    <div className="ml-1">
      <h1 className="text-base font-semibold cursor-pointer">The Sabarmati Report review: Even Vikrant Massey can't save this confused film</h1>
      <h3>Time Of india</h3>
      <h3>Nov 17 2024</h3>
    </div>
  </div>

  <div className="flex flex-row  rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="lux.jpg" alt="Film B" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold cursor-pointer">Lux Soap</h1>
      <h3>AD</h3>
      <h3>Lead Actress/Emma</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 03 March 2023</h3>
    </div>
  </div>

  <div className="flex flex-row  rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="dance.jpg" alt="Film C" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold cursor-pointer">Dance India Dance</h1>
      <h3>Reality</h3>
      <h3>Lead Actress/Ava</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 08 August 2022</h3>
    </div>
  </div>

  <div className="flex flex-row  rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="farzi.jpg" alt="Film D" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold cursor-pointer">Farzi</h1>
      <h3>Movie-Released</h3>
      <h3>Supporting Actress/Grace</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 15 October 2021</h3>
    </div>
  </div>
</div>

          </div>
         </div>
    )
}

export default News;