import React from "react";

function SidebarModal() {
  return (
    <div className="font-Commissioner bg-white rounded-md px-3 py-3 max-w-[96%] relative top-8 m-auto z-[9999]   text-2xl  font-medium ">
      <div className="flex flex-col gap-4  ">
        <h3 className="py-6 border-b border-gray-300">About</h3>
        <h3 className="py-6 border-b border-gray-300 ">Discover</h3>
        <h3 className="py-6">Get Started</h3>
      </div>
    </div>
  );
}

export default SidebarModal;
