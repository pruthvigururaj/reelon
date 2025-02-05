import React ,{useState} from "react";

function Profile()
{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const tabs = ["Showcase", "Professional", "Services", "Social", "Network", "Posts", "News"];

    return(
        <div className="flex justify-center mt-4 ">
            <div className="sm:w-[90%] md:w-[80%] lg:w-[90%] w-[100%] relative pl-4 border-gray-200  bg-white">
            <div className="absolute top-0 left-0 w-full h-52 border rounded-t-md">
                <img className="h-full w-full" src="cinema.jpg" alt="image object-cover"></img>
            </div>

                <div className="flex sm:flex-row flex-col relative pt-36 ">
                    <img src="profile.jfif" alt="profile_pic" className="w-40 h-40 rounded-full border-2 border-white object-cover"/>
                    <div className="sm:pt-16 ml-2">
                    <h1 className="text-2xl font-bold">Rashi Khanna(29,F)</h1>
                    <h3 className="mt-1 text-gray-600">Actress, filmmaker and screenwriter</h3>
                    <p className="text-gray-400 font-thin">Bengaluru, Karnataka, india - <span className="block sm:inline"><a href="/" className="hover:underline text-blue-800 font-semibold">Contact Info</a></span> </p>
                    
                    </div>
                    <div className="sm:pt-16 sm:ml-auto sm:text-end pr-2 pl-2">
                        <h3 className="text-gray-600">1730 Followers</h3>
                        <h3 className="text-gray-600">103 Following</h3>
                        <h3 className="text-blue-800 mt-1 font-semibold hover:underline cursor-pointer">47 Connections</h3>

                    </div>
                   
                    
                </div>
              
                <div className="mt-4">
                  
                </div>

                <div className="space-x-2 mt-2 flex flex-wrap gap-x-2 sm:justify-end pb-2 gap-y-2 mt-2 border-b-2 pl-0 pr-2">
                    <button className="py-1 px-3 bg-blue-800 text-white rounded-full font-semibold hover:bg-blue-800">Open To</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-sky-50">Add profile section</button>
                    <button className="border border-blue-800 py-1 px-3 rounded-full text-blue-800 font-semibold hover:border-2 hover:bg-sky-50">Enchance profile</button>
                    <button className="border border-black py-1 px-3 rounded-full text-gray-700 font-semibold hover:border-2 hover:bg-gray-50">Resources</button>
                </div>

          

                <div className="hidden sm:flex lg:w-[70%] w-full p-2 rounded-md mt-4 mb-4">
  <div className="flex flex-wrap gap-4 font-semibold">
    <h3 className="text-blue-800 border-b-2 border-blue-800 cursor-pointer">Bio</h3>
    <h3 className="cursor-pointer">Showcase</h3>
    <h3 className="cursor-pointer">Professional</h3>
    <h3 className="cursor-pointer">Services</h3>
    <h3 className="cursor-pointer">Social</h3>
    <h3 className="cursor-pointer">Network</h3>
    <h3 className="cursor-pointer">Posts</h3>
    <h3 className="cursor-pointer">News</h3>
  </div>
</div>

                <div className="sm:hidden relative mt-4 border border-blue-800 rounded-lg mb-4 mr-2">
        <div className="flex flex-row justify-between py-2 px-2">
        <button
          
          className=""
        >
          Bio
        </button>
        
        <img className="w-12 h-8 cursor-pointer" src="dropdown.webp" alt="dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}></img>
        </div>

        {dropdownOpen && (
          <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg z-10">
            {tabs.map((tab, index) => (
              <h3
                key={index}
                className="block w-full py-2 px-4 text-left hover:bg-gray-100 cursor-pointer"
              >
                {tab}
              </h3>
            ))}
          </div>
        )}
      </div>
               
            </div>
            
        </div>
    )
}
export default Profile;