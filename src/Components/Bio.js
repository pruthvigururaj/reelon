import React, {useState} from "react";

function Bio()
{
    const [expand, setExpand]=useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);
  
 const fulltext=`   Raashii Khanna (born 30 November 1990) is an Indian actress who works predominantly in Telugu and Tamil films. She made her acting debut in a supporting role with the Hindi film Madras Cafe (2013) and subsequently had starring roles in the Telugu film Oohalu Gusagusalade (2014), Tamil film Imaikkaa Nodigal (2018) and Malayalam film Villain (2017)
    `
    const smalltext=fulltext.slice(0,200)+"..."
    return(
        <div className="flex justify-center mt-4 ">
            <div className="sm:w-[90%] md:w-[80%] lg:w-[90%] w-[100%] relative pl-4 border-gray-200  bg-white py-2">
                <h1 className="py-4 text-2xl font-bold">Bio</h1>
             
              <div className="flex flex-row justify-between">
                <h1 className="text-xl font-semibold">About</h1>
                <img src="pencil.png" alt="edit_logo" className="w-8 h-8 mr-2 cursor-pointer hover:bg-gray-100 rounded-full p-1 flex items-center justify-center "/>
              </div>

              <div className="mt-4 ">
                    {!expand?smalltext:fulltext}
                    <button className="font-bold text-blue-800" onClick={()=>setExpand(!expand)}>{expand?"...show less":"...show more"}</button>
               </div>

                <div className="border-b-2 mt-4 mr-2">

                </div>

              <div className="flex flex-row justify-between py-4">
                <h1 className="text-xl font-semibold">Highlights</h1>
                <img src="pencil.png" alt="edit_logo" className="w-8 h-8 mr-2 cursor-pointer hover:bg-gray-100 rounded-full p-1 flex items-center justify-center "/>
              </div>

             <div className="flex flex-col sm:flex-row gap-2 pr-2 ">
                <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[50%] ">
                     <img className="w-24 h-24 object-cover" src="madras.avif" alt="image"></img>
                       <div className="ml-1">
                        <h1 className="text-xl font-semibold">Madras Cafe</h1>
                        <h3>Movie-Released</h3>
                        <h3>Lead Actress/Ruby</h3>
                        <h3 className="text-gray-600 text-xs">Release Date.20 june 2021</h3>
                     </div>
                    
                </div>
                <div className="flex flex-row border border-gray-400 rounded-md  w-full sm:w-[50%] ">
                     <img className="w-24 h-24 object-cover" src="yodha.jpg" alt="image"></img>
                     <div className="ml-1">
                        <h1 className="text-xl font-semibold">Yodha</h1>
                        <h3>Movie-Released</h3>
                        <h3>Lead Actress/Ruby</h3>
                        <h3 className="text-gray-600 text-xs">Release Date.20 june 2021</h3>
                     </div>
                    
                </div>
                
             </div>

             <div className="w-full clear-both border-b-2 mt-4 mr-2">
                  
                </div>

                <div className="py-4 w-full ">
                    <h1 className="text-xl font-semibold pb-2">Open To</h1>
                    <ul className="list-disc list-inside">
                        <li className="">Film roles in diverse geners</li>
                        <li>Brand endrosments and collabarations</li>
                        <li>Particpation in web series and collabrations</li>
                    </ul>
                </div>

                <div className="w-full clear-both border-b-2 mt-4 mr-2">
                  
                </div>

                <div className="py-4">
                    <div className="flex flex-row justify-between  items-center">
                    <h1 className="text-xl font-semibold pb-2">Personal Attributes</h1>
                    <img className="w-8 h-8 cursor-pointer mr-2"  onClick={openPopup} src="add.png" alt="add icon"></img>
                    </div>
                   

                   <div className="flex flex-wrap gap-6">
                     <h1><span className=" font-semibold">Age </span>28 Years August 21, 1996</h1>
                     <h1><span  className=" font-semibold">Alternative Name </span>Vampier Hunter</h1>
                     <h1><span  className=" font-semibold">Height </span>5'8"(1.75 m)</h1>
                     <h1><span  className=" font-semibold">Weight </span>61 Kgs</h1>
                     <h1><span  className=" font-semibold">Waist </span>32</h1>
                     <h1><span  className=" font-semibold">Hips </span>36</h1>
                     <h1><span  className=" font-semibold">Skin Town </span> Brown</h1>
                     <h1><span  className=" font-semibold">Eyes </span>Black</h1>
                     <h1><span  className=" font-semibold">Gender </span>Female</h1>
                     <h1><span  className=" font-semibold">Relationship status </span>Married</h1>
                     
                   </div>
                </div>

                 {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4 text-blue-800">Add Personal Attributes</h2>

            <form>
              <div className="flex flex-col gap-4">
                {/* Input Fields */}
                <label>
                  Age:
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </label>
                <label>
                  Alternate Name:
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </label>
                <label>
                  Height:
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </label>
                <label>
                  Hair Color:
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </label>
                <label>
                  Eye Color:
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </label>
                <label>
                  Gender:
                  <select
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  className="bg-gray-400 text-white py-1 px-4 rounded-md"
                  onClick={closePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-1 px-4 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

                <div className="py-4">
                   <h1 className="text-xl font-semibold pb-2">Additional Details</h1>

                   <div className="flex flex-wrap gap-6">
                     <h1><span className=" font-semibold">Skirts </span>No</h1>
                     <h1><span  className=" font-semibold">Swim Suits </span>No</h1>
                     <h1><span  className=" font-semibold">Love Making </span>No</h1>
                     <h1><span  className=" font-semibold">On Screen Kiss </span>yes</h1>
                     <h1><span  className=" font-semibold">Open for outstation shoot </span>No</h1>
                     <h1><span  className=" font-semibold">Comfort with anytime </span>Yes</h1>
                     <h1><span  className=" font-semibold">Skin Town </span> Brown</h1>
                     <h1><span  className=" font-semibold">Eyes </span>Black</h1>
                     <h1><span  className=" font-semibold">Gender </span>Female</h1>
                     <h1><span  className=" font-semibold">Relationship status </span>Married</h1>
                     
                   </div>
                </div>

                <div className="w-full clear-both border-b-2 mt-4 mr-2">
                  
                </div>

                <div className="py-4 mr-2">
                    <h1 className="text-xl font-semibold pb-2">Rewards & Recognition</h1>
                    
                    <div className="flex flex-wrap gap-4">
                        
                        <div className="flex flex-row border border-gray-400 rounded-md bg-gray-200 w-full sm:w-[48%] lg:w-[32%] p-2">
                          <img className="w-20 h-20 mr-2" src="price.jpg" alt="picture"></img>
                          <div>
                            <h1 className="text-xl font-semibold">  Best actor award for the film The Director</h1>
                            <p className="text-gray-600 text-xs">Recived April 2021</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-row border border-gray-400 rounded-md bg-gray-200 w-full sm:w-[48%] lg:w-[32%] p-2">
                        <img className="w-20 h-20 mr-2" src="star.jpg" alt="picture"></img>
                          <div>
                            <h1 className="text-xl font-semibold">  Best actor award for the film The Director</h1>
                            <p className="text-gray-600 text-xs">Recived April 2021</p>
                          </div>
                        </div>

                        <div className="flex flex-row border border-gray-400 rounded-md bg-gray-200 w-full sm:w-[48%] lg:w-[32%] p-2">
                        <img className="w-20 h-20 mr-2" src="trophy.jpg" alt="picture"></img>
                          <div>
                            <h1 className="text-xl font-semibold">  Best actor award for the film The Director</h1>
                            <p className="text-gray-600 text-xs">Recived April 2021</p>
                          </div>
                        </div>
                    </div>

                </div>

                <div className="w-full clear-both border-b-2 mt-4 mr-2">
                  
                  </div>
  
                  <div className="py-4 mr-2">
                      <h1 className="text-xl font-semibold pb-2">Rewards & Recognition</h1>
                  </div>  


                    <div className="flex flex-wrap gap-4">
                        
                        <div className="  w-full sm:w-[48%] lg:w-[32%] p-2">
                            <h1 className="font-semibold text-xl">Raashi Khanna</h1>
                            <h1>Raashi.khanna@gmail.com</h1>
                            <h1>+91-74893***</h1>
                        </div>

                        <div className=" w-full sm:w-[48%] lg:w-[32%] p-2">
                            <h1 className="font-semibold text-xl">Profile Manager- Ram</h1>
                            <h1>Raashi.khanna@gmail.com</h1>
                            <h1>+91-74893*****</h1>
                        </div>

                        <div className=" w-full sm:w-[48%] lg:w-[32%] p-2">
                            <h1 className="font-semibold text-xl">Casting Agency</h1>
                            <h1>Raashi.khanna@gmail.com</h1>
                            <h1>+91-74893***</h1>
                        </div>
                    </div>    

                
            </div>

           
        </div>
    )
}
export default Bio;