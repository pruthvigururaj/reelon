import React from "react";

function Showcase()
{
    return(
        <div className="flex justify-center mt-4">
            
            <div className="sm:w-[90%] md:w-[80%] lg:w-[90%] w-[100%] relative pl-4 border-gray-200  bg-white py-4 pr-2">
               
              <h1 className="text-2xl font-semibold">Showcase</h1>
              <h1 className="text-xl font-semibold pt-4">Gallery</h1>
              <div className="space-x-2 mt-2 flex flex-wrap gap-x-2 pb-2 gap-y-2 mt-2 border-b-2 pl-0">
                    <button className="py-1 px-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-800">All</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-sky-50">Collections</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-sky-50">Pictures</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-gray-50">Videos</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-gray-50">Appearance</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-gray-50">auditions</button>
                </div>


<div className="flex flex-wrap gap-4 mt-4">

    <div className="relative w-[48%] sm:w-[30%] h-48 group cursor-pointer">
      <img src="r1.jpg" alt="image" className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-2000" />
  
  
      <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <h2 className="text-lg font-semibold">Wallpapers</h2>
        <p className="text-sm">Click to explore</p>
      </div>
     </div>

     <div className="relative w-[48%] sm:w-[30%] h-48 group cursor-pointer">
      <img src="r2.jpg" alt="image" className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-2000" />
  
  
      <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <h2 className="text-lg font-semibold">Intro Videos</h2>
        <p className="text-sm">Click to explore</p>
      </div>
     </div>

     <div className="relative w-[48%] sm:w-[30%] h-48 group cursor-pointer">
      <img src="r3.jpg" alt="image" className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-2000" />
  
  
      <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <h2 className="text-lg font-semibold">At the shoot</h2>
        <p className="text-sm">Click to explore</p>
      </div>
     </div>

     <div className="relative w-[48%] sm:w-[30%] h-48 group cursor-pointer">
      <img src="r4.jpg" alt="image" className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-2000" />
  
  
      <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <h2 className="text-lg font-semibold">For Dancer Role</h2>
        <p className="text-sm">Click to explore</p>
      </div>
     </div>

     <div className="relative w-[48%] sm:w-[30%] h-48 group cursor-pointer">
      <img src="r5.jpg" alt="image" className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-2000" />
  
  
      <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <h2 className="text-lg font-semibold">For Sister Roles</h2>
        <p className="text-sm">Click to explore</p>
      </div>
     </div>

     <div className="relative w-[48%] sm:w-[30%] h-48 group cursor-pointer">
      <img src="r6.jpg" alt="image" className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-2000" />
  
  
      <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
       <h2 className="text-lg font-semibold">Wallpapers</h2>
        <p className="text-sm">Click to explore</p>
      </div>
     </div>

     
      

    </div>
 

              

            </div>
            
        </div>
    )
}
export default Showcase;