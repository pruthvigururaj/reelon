import React from "react";

function Service()
{
    return(
        <div className="flex justify-center mt-4 ">
             <div className="bg-white border border-grey-200 rounded-md w-[90%] px-2">
                 <div className="flex flex-row p-2 ">
                   <h1 className="text-lg text-center font-semibold w-[50%] text-blue-800 border-b-8 border-blue-800">Service</h1>
                   <h1 className="w-[50%] text-lg text-center font-semibold">My URLs</h1>
                 </div>


                 <div className="flex flex-wrap gap-1 justify-center py-4 gap-y-2">
                    <div className="w-[45%] border border-gray-400 rounded-md text-center">
                        <h1 className="font-semibold text-lg">Shoutouts</h1>
                        <p>Video messages for your loved ones.</p>
                    </div>

                    <div className="w-[45%] border border-gray-400 rounded-md text-center">
                        <h1 className="font-semibold text-lg">1:1 Meet</h1>
                        <p>Book my calender</p>
                    </div>

                    <div className="w-[45%] border border-gray-400 rounded-md text-center">
                        <h1 className="font-semibold text-lg">Auditions</h1>
                        <p>Book personilzed audition session</p>
                    </div>

                    <div className="w-[45%] border border-gray-400 rounded-md text-center">
                        <h1 className="font-semibold text-lg">Workshop</h1>
                        <p>Attend exclusive acting workshops</p>
                    </div>

                 </div>

                 <button className="w-full text-center py-2 bg-blue-800 text-white rounded-md ">Reuest My Services</button>

                 <p className="py-4 text-center">There are many different types of acting: soaps, theatre, Disney, TV and acting for film.  For most people who are not in the industry, understanding these different types of acting can get confusing.<span className="font-semibold cursor-pointer">...more</span></p>
             </div>
    </div>
    )
}
export default Service;