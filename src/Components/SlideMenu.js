import React from "react";

function SlideMenu({ closeMenu }) {
  return (
    <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transition-transform transform z-10">
      <div className="p-4">
        
        <h1 className="text-2xl font-semibold cursor-pointer  text-end" onClick={closeMenu}>X</h1>
        <div className="flex flex-col space-y-6">
          {["Home", "My Network", "Jobs", "Message", "Me"].map((label) => (
            <button
              key={label}
              className="text-left hover:font-semibold cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideMenu;
