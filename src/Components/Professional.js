import React, {useState} from "react";

function Professional()
{
   const [all, setAll]=useState(true);
   const [tvshows, setTvshows]=useState(false);


    return(
        <div className="flex justify-center mt-4 ">
            <div className="sm:w-[90%] md:w-[80%] lg:w-[90%] w-[100%] relative pl-4 border-gray-200  bg-white py-2">
              <h1 className="py-4 text-2xl font-bold">Professional</h1>

                <div className="flex flex-row justify-between  items-center">
                    <h1 className="text-xl font-semibold pb-2">Protfolio</h1>
                    <img className="w-8 h-8 cursor-pointer mr-2" src="add.png" alt="add icon"></img>
                </div>

                <div className="space-x-2 mt-2 flex flex-wrap gap-x-2 pb-2 gap-y-2 mt-2 border-b-2 pl-0">
                    <button className="py-1 px-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-800"  onClick={() => {
    setAll(true);
    setTvshows(false);
  }}>All</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-sky-50"  onClick={() => {
    setAll(false);
    setTvshows(true);
  }}>TV Shows</button>
  
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-sky-50">Upcoming</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-gray-50">Previous</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-gray-50">Movies</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-gray-50">Trials</button>
                </div>


{all && <div className="flex flex-wrap gap-2 pr-2 mt-4">
  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="madras.avif" alt="Madras Cafe" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Madras Cafe</h1>
      <h3>Movie-Released</h3>
      <h3>Lead Actress/Ruby</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 20 June 2021</h3>
    </div>
  </div>

  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="yodha.jpg" alt="Yodha" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Yodha</h1>
      <h3>Movie-Released</h3>
      <h3>Lead Actress/Ruby</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 20 June 2021</h3>
    </div>
  </div>

  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="baby.jpg" alt="Film A" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Baby Jhon</h1>
      <h3>Movie-Released</h3>
      <h3>Supporting Actress/Lily</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 12 May 2022</h3>
    </div>
  </div>

  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="lux.jpg" alt="Film B" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Lux Soap</h1>
      <h3>AD</h3>
      <h3>Lead Actress/Emma</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 03 March 2023</h3>
    </div>
  </div>

  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="dance.jpg" alt="Film C" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Dance India Dance</h1>
      <h3>Reality</h3>
      <h3>Lead Actress/Ava</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 08 August 2022</h3>
    </div>
  </div>

  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="farzi.jpg" alt="Film D" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Farzi</h1>
      <h3>Movie-Released</h3>
      <h3>Supporting Actress/Grace</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 15 October 2021</h3>
    </div>
  </div>
</div>}


{tvshows && <div className="flex flex-wrap gap-2 pr-2 mt-4">
  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="farzi.jpg" alt="Madras Cafe" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Farzi</h1>
      <h3>Movie-Released</h3>
      <h3>Lead Actress/Ruby</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 20 June 2021</h3>
    </div>
  </div>

  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="rudra.jpg" alt="Yodha" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Rudra</h1>
      <h3>Movie-Released</h3>
      <h3>Lead Actress/Ruby</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 20 June 2021</h3>
    </div>
  </div>

  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="friends.jpg" alt="Film A" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Friends</h1>
      <h3>Movie-Released</h3>
      <h3>Supporting Actress/Lily</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 12 May 2022</h3>
    </div>
  </div>

  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="office.jpg" alt="Film B" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Office</h1>
      <h3>AD</h3>
      <h3>Lead Actress/Emma</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 03 March 2023</h3>
    </div>
  </div>

  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="rock.jpg" alt="Film C" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">3D Rock</h1>
      <h3>Reality</h3>
      <h3>Lead Actress/Ava</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 08 August 2022</h3>
    </div>
  </div>

  <div className="flex flex-row border border-gray-400 rounded-md w-full sm:w-[48%] p-2">
    <img className="w-24 h-24 object-cover" src="billion.jpg" alt="Film D" />
    <div className="ml-1">
      <h1 className="text-xl font-semibold text-blue-800">Billions</h1>
      <h3>Movie-Released</h3>
      <h3>Supporting Actress/Grace</h3>
      <h3 className="text-gray-600 text-xs">Release Date: 15 October 2021</h3>
    </div>
  </div>
</div>}
  
           
                <div className="flex flex-row justify-between  items-center py-4">
                    <h1 className="text-xl font-semibold pb-2">Experience</h1>
                    <img className="w-8 h-8 cursor-pointer mr-2" src="add.png" alt="add icon"></img>
                </div>

                <div className="flex sm:flex-row flex-col pr-2">

                    <div className="mr-2 flex-shrink-0">
                         <img className="w-28 h-30" src="m.jpg" alt="image"></img>
                    </div>

                    <div>
                         <h1 className="text-xl font-bold sm:pt-0 pt-2">Arena Multimedia, New York</h1>
                         <h3>Dharma Productions . Full Time</h3>
                         <p className="text-gray-700"> 2014 - 2017 | Jaipur, Rajasthan</p>
                         <p>Raashii Khanna (born 30 November 1990) is an Indian actress who works predominantly in Telugu and Tamil films. She made her acting debut in a supporting role with the Hindi film Madras Cafe (2013) and subsequently had starring roles in the Telugu film Oohalu Gusagusalade (2014), Tamil film Imaikkaa Nodigal (2018) and Malayalam film Villain (2017).</p>
                    </div>

                </div>

                <div className="w-full clear-both border-b-2 mt-4 mr-2">
                  
                </div>

                

                <div className="flex sm:flex-row flex-col pr-2 pt-4">

                    <div className="mr-2 flex-shrink-0">
                         <img className="w-28 h-30" src="m.jpg" alt="image"></img>
                    </div>

                    <div>
                         <h1 className="text-xl font-bold sm:pt-0 pt-2">Arena Multimedia, New York</h1>
                         <h3>Dharma Productions . Full Time</h3>
                         <p className="text-gray-700"> 2014 - 2017 | Jaipur, Rajasthan</p>
                         <p>Raashii Khanna (born 30 November 1990) is an Indian actress who works predominantly in Telugu and Tamil films. She made her acting debut in a supporting role with the Hindi film Madras Cafe (2013) and subsequently had starring roles in the Telugu film Oohalu Gusagusalade (2014), Tamil film Imaikkaa Nodigal (2018) and Malayalam film Villain (2017).</p>
                    </div>

                </div>


                 <div className="w-full clear-both border-b-2 my-4 mr-2">
                  
                </div>

                <div className="flex flex-row justify-between  items-center py-4">
                    <h1 className="text-xl font-semibold pb-2">Eduction</h1>
                    <img className="w-8 h-8 cursor-pointer mr-2" src="add.png" alt="add icon"></img>
                </div>

                <div className="space-x-2 mt-2 flex flex-wrap gap-x-2 pb-2 gap-y-2  border-b-2 pl-0 ">
                    <button className="border bg-blue-800 py-1 px-3 rounded-full text-white font-semibold ">All</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-gray-50">Courses</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-gray-50">Schools</button>
                </div>

                <div className="flex flex-row py-4">
                  <img className="w-10 h-10 cursor-pointer mr-2" src="c.jpg" alt="add icon"></img>
                    <div>
                     <h1 className="text-lg font-semibold">Arena Multimedia, New York</h1>
                     <p className="text-sm text-gray-600">2014-2017 | Advanced Diploma in Multimedia</p>
                    </div> 
                </div>

                <div className="flex flex-row py-4">
                  <img className="w-10 h-10 cursor-pointer mr-2" src="c.jpg" alt="add icon"></img>
                    <div>
                     <h1 className="text-lg font-semibold">Diploma in Acting</h1>
                     <p className="text-sm text-gray-600">2014-2017 | Advanced Diploma in Multimedia</p>
                    </div> 
                </div>

                <div className="flex flex-row py-4 ">
                  <img className="w-10 h-10 cursor-pointer mr-2" src="c.jpg" alt="add icon"></img>
                    <div>
                     <h1 className="text-lg font-semibold">Certificate Horse Riding</h1>
                     <p className="text-sm text-gray-600">2014-2017 | Advanced Diploma in Multimedia</p>
                    </div> 
                </div>

                <div className="flex flex-row justify-between  items-center py-4">
                    <h1 className="text-xl font-semibold pb-2">Language</h1>
                    <img className="w-8 h-8 cursor-pointer mr-2" src="add.png" alt="add icon"></img>
                </div>


<div className="overflow-x-auto pr-4">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-2 py-2 text-center">Language</th>
        <th className="border border-gray-300 px-2 py-2 text-center">Speak</th>
        <th className="border border-gray-300 px-2 py-2 text-center">Read</th>
        <th className="border border-gray-300 px-2 py-2 text-center">Write</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-2 py-2 text-center">English</td>
        <td className="border border-gray-300 px-2 py-2 text-center">Script-ready</td>
        <td className="border border-gray-300 px-2 py-2 text-center">Basic Understanding</td>
        <td className="border border-gray-300 px-2 py-2 text-center">No Proficency</td>
        
      </tr>
      <tr>
        <td className="border border-gray-300 px-2 py-2 text-center">Kannada</td>
        <td className="border border-gray-300 px-2 py-2 text-center">Script-ready</td>
        <td className="border border-gray-300 px-2 py-2 text-center">Basic Understanding</td>
        <td className="border border-gray-300 px-2 py-2 text-center">No Proficency</td>
        
      </tr>
      <tr>
        <td className="border border-gray-300 px-2 py-2 text-center">Tamil</td>
        <td className="border border-gray-300 px-2 py-2 text-center">Script-ready</td>
        <td className="border border-gray-300 px-2 py-2 text-center">Basic Understanding</td>
        <td className="border border-gray-300 px-2 py-2 text-center">No Proficency</td>
        
      </tr>
      <tr>
        <td className="border border-gray-300 px-2 py-2 text-center">Telugu</td>
        <td className="border border-gray-300 px-2 py-2 text-center">Script-ready</td>
        <td className="border border-gray-300 px-2 py-2 text-center">Basic Understanding</td>
        <td className="border border-gray-300 px-2 py-2 text-center">No Proficency</td>
        
      </tr>
      <tr>
        <td className="border border-gray-300 px-2 py-2 text-center">Hindi</td>
        <td className="border border-gray-300 px-2 py-2 text-center">Script-ready</td>
        <td className="border border-gray-300 px-2 py-2 text-center">Basic Understanding</td>
        <td className="border border-gray-300 px-2 py-2 text-center">No Proficency</td>
        
      </tr>
    </tbody>
  </table>
</div>




            </div>
        </div>
    )
}
export default Professional;