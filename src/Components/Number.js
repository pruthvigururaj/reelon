import React from "react";

function Number()
{
    return(
        <div className="flex justify-center mt-4 "> 
            <div className="flex flex-wrap gap-1 justify-between py-4 gap-y-2 w-[90%]">
                           <div className="w-[45%] border border-gray-400 rounded-md text-center bg-white py-2">
                               <h1 className="font-bold text-xl">Jobs </h1>
                               <h1 className="text-lg font-bold text-blue-800">100 | 50 | 2000</h1>
                           </div>
                           <div className="w-[45%] border border-gray-400 rounded-md text-center bg-white py-2">
                               <h1 className="font-bold text-xl">Auditions</h1>
                               <h1 className="text-lg font-bold text-blue-800">100 | 50 | 2000</h1>
                           </div>
                           <div className="w-[45%] border border-gray-400 rounded-md text-center bg-white py-2">
                               <h1 className="font-bold text-xl">Contests</h1>
                               <h1 className="text-lg font-bold text-blue-800">100 | 50 | 2000</h1>
                           </div>
                           <div className="w-[45%] border border-gray-400 rounded-md text-center bg-white py-2">
                               <h1 className="font-bold text-xl">Shoutouts</h1>
                               <h1 className="text-lg font-bold text-blue-800">100 | 50 | 2000</h1>
                           </div>
                       </div>

        </div>
    )
}
export default Number;