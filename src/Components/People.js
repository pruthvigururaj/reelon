import React from "react";

function People()
{
    return(
        <div className="flex justify-center mt-4 ">
            <div className="bg-white border border-grey-200 rounded-md w-[90%] px-2">
            <h1 className="py-4 text-2xl font-bold">People You May Know</h1>

            <div className="flex flex-row items-center pb-3">
                    <div>
                        <img className="w-16 h-16 rounded-full border-2 border-orange-600 " src="mahesh.jpg" alt="image"></img>

                    </div>

                    <div className="ml-2">
                        <h1 className="font-semibold text-base ">Mahesh Babu</h1>
                        <p className="text-gray-800 text-sm ">Actor</p>
                        
                    </div>
                    <div className="ml-auto pr-4">
                       <button className="border border-blue-800 text-blue-800 py-2 px-2 rounded-md">Follow</button>
                    </div>
 
                </div>

                <div className="flex flex-row items-center pb-3">
                    <div>
                        <img className="w-16 h-16 rounded-full border-2 border-orange-600 " src="allu.webp" alt="image"></img>

                    </div>

                    <div className="ml-2">
                        <h1 className="font-semibold text-base ">Allu Arjun</h1>
                        <p className="text-gray-800 text-sm ">Actor</p>
                        
                    </div>
                    <div className="ml-auto pr-4">
                       <button className="border border-blue-800 text-blue-800 py-2 px-2 rounded-md">Follow</button>
                    </div>
 
                </div>

                <div className="flex flex-row items-center pb-3">
                    <div>
                        <img className="w-16 h-16 rounded-full border-2 border-orange-600 " src="prabhas.jpg" alt="image"></img>

                    </div>

                    <div className="ml-2">
                        <h1 className="font-semibold text-base ">Prabhas</h1>
                        <p className="text-gray-800 text-sm ">Actor</p>
                        
                    </div>
                    <div className="ml-auto pr-4">
                       <button className="border border-blue-800 text-blue-800 py-2 px-2 rounded-md">Follow</button>
                    </div>
 
                </div>

                <div className="flex flex-row items-center pb-3">
                    <div>
                        <img className="w-16 h-16 rounded-full border-2 border-orange-600 " src="chiru.jpg" alt="image"></img>

                    </div>

                    <div className="ml-2">
                        <h1 className="font-semibold text-base ">Chiranjivi</h1>
                        <p className="text-gray-800 text-sm ">Actor</p>
                        
                    </div>
                    <div className="ml-auto pr-4">
                       <button className="border border-blue-800 text-blue-800 py-2 px-2 rounded-md">Follow</button>
                    </div>
 
                </div>

                <div className="flex flex-row items-center pb-3">
                    <div>
                        <img className="w-16 h-16 rounded-full border-2 border-orange-600 " src="ram.jpg" alt="image"></img>

                    </div>

                    <div className="ml-2">
                        <h1 className="font-semibold text-base ">Ram Charan</h1>
                        <p className="text-gray-800 text-sm ">Actor</p>
                        
                    </div>
                    <div className="ml-auto pr-4">
                       <button className="border border-blue-800 text-blue-800 py-2 px-2 rounded-md">Follow</button>
                    </div>
 
                </div>

                

            </div>

             
        </div>
    )
}
export default People;