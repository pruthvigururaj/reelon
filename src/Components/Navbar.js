// import React from "react";

// function Navbar(){
//     return(
//         <div className="w-[full] h-16 flex flex-row border border-black justify-between px-4 items-center ">  
//                <div className="flex felx-row gap-4" >
//                   <h1 className="text-blue-800 text-4xl font-semibold">reelOn</h1>
//                   <input type="text" placeholder="Search movies, stars, jobs" className="w-60 px-2 bg-blue-100 border border-blue-800 rounded-md"/>
//                </div>

//                <div className="hidden sm:flex flex-row space-x-4">
//                <div className="flex justify-center flex-col items-center hover:font-semibold cursor-pointer">
//                     <img src="home.png" alt="home_icon" className="w-8 h-6 justify-center"/>
//                     <p>Home</p>
//                 </div>
//                 <div className="flex justify-center flex-col items-center hover:font-semibold cursor-pointer">
//                     <img src="network.png" alt="network_icon" className="w-8 h-6 justify-center"/>
//                     <p>My Network</p>
//                 </div>
//                 <div className="flex justify-center flex-col items-center hover:font-semibold cursor-pointer">
//                     <img src="job.png" alt="job_icon" className="w-8 h-6  justify-center"/>
//                     <p>Jobs</p>
//                 </div>
//                 <div className="flex justify-center flex-col items-center hover:font-semibold cursor-pointer">
//                     <img src="message.jfif" alt="message_icon" className="w-8 h-6  justify-center"/>
//                     <p>Message</p>
//                 </div>
//                 <div className="flex justify-center flex-col items-center hover:font-semibold cursor-pointer">
//                     <img src="profile.jfif" alt="profile_icon" className="w-8 h-6 rounded-full justify-center"/>
//                     <p>Me</p>
//                 </div>

//                </div>

//         </div>
//     )
// }
// export default Navbar;


import React, { useState } from "react";
import SlideMenu from "./SlideMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-16 flex flex-row  justify-between px-4 items-center bg-white">
      {/* Logo and Search */}
      <div className="flex flex-row gap-4">
        <h1 className="text-blue-800 text-4xl font-semibold">reelOn</h1>
        <input
          type="text"
          placeholder="Search movies, stars, jobs"
          className="hidden sm:block w-60 px-2 bg-blue-100 border border-blue-800 rounded-md"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row space-x-6">
        {[
          { src: "home.png", label: "Home" },
         
          { src: "notification.jpg", label: "Notifications" },
          { src: "message.jfif", label: "Message" },
          { src: "profile.jfif", label: "Me", rounded: true },
        ].map((item) => (
          <div
            key={item.label}
            className="flex justify-center flex-col items-center hover:font-semibold cursor-pointer"
          >
            <img
              src={item.src}
              alt={`${item.label}_icon`}
              className={`w-8 h-6 justify-center ${item.rounded ? "rounded-full" : ""}`}
            />
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden ">
        <img
          src={isMenuOpen ? "close.png" : "menu.png"}
          alt="menu_icon"
          className="w-8 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Slide Menu */}
      {isMenuOpen && <SlideMenu closeMenu={() => setIsMenuOpen(false)} />}
    </div>
  );
}

export default Navbar;
