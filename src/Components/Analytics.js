import React from "react";

function Analytics()
{
    return(
        <div className="flex justify-center mt-4 ">
            <div className="sm:w-[90%] md:w-[80%] lg:w-[90%] w-[100%] relative pl-4 border-gray-200  bg-white py-2">
                       <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                          <div>
                             <h1 className="text-2xl font-semibold">Analytics</h1>
                             <p className="text-sm text-gray-600">Visible only to you. For Last 7 days and total</p>
                          </div>

                          <div>
                            <button className="border border-blue-800 text-blue-800 text-xl px-2 py-2 rounded-md mt-4 sm:mt-0 mr-2">Show All Analytics &rarr;</button>

                          </div>
                       </div>
                       <div className="flex flex-wrap gap-6 mt-2 w-full items-center pb-2">
                           <div className="border border-gray-400 rounded-md w-36  text-center">
                               <h1>Views <span className="text-green-500"> &uarr; 70%</span></h1>
                               <h1 className="text-2xl font-bold">100 | 500</h1>
                           </div>
                           <div  className="border border-gray-400 rounded-md  w-36 text-center">
                               <h1>In Search<span className="text-red-500"> &darr; 10%</span></h1>
                               <h1 className="text-2xl font-bold">100 | 500</h1>
                           </div>
                           <div  className="border border-gray-400 rounded-md  w-36 text-center">
                               <h1>Post Views<span className="text-green-500"> &uarr; 70%</span></h1>
                               <h1 className="text-2xl font-bold">100 | 500</h1>
                           </div>
                           <div  className="border border-gray-400 rounded-md  w-36 text-center">
                               <h1>Shouts <span className="text-red-500"> &darr; 70%</span></h1>
                               <h1 className="text-2xl font-bold">100 | 500</h1>
                           </div>
                       </div>
            </div>
        </div>    
    )
}
export default Analytics;