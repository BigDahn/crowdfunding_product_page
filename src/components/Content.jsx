import React from "react";

function Content() {
  return (
    <div class="bg-[#ffffff] shadow-lg   rounded-md  ">
      <img
        src="/images/logo-mastercraft.svg"
        className="flex items-center m-auto relative bottom-4.5 h-10"
      />
      <section className="flex flex-col items-center px-6 pb-8 text-center gap-7 md:gap-10 md:pb-10 md:w-[100%] ">
        <div className="flex flex-col gap-2 h-[100%] items-center">
          <h2 className="font-bold text-lg">
            Mastercraft Bamboo Monitor Riser
          </h2>
          <p className="text-[12px]">
            A beautiful & handcrafted monitor to stand to reduce neck and eye
            strain.
          </p>
        </div>
        <div className="flex items-center gap-1  md:px-5 md:w-[100%] md:justify-between ">
          <button className="bg-[#157a74] rounded-full text-center px-[3em] text-[10px] py-[1.5em] md:px-[30px] md:py-[11px] text-white md:text-[12px] font-bold">
            Back this project
          </button>
          <button className="md:bg-[#f5f6f9] flex items-center gap-4  md:pr-[30px] md:rounded-full  text-[#157a74] text-[12px] font-bold">
            <img
              src="/images/icon-bookmark.svg"
              className="h-[40px] md:h-[40px]"
            />
            <span className=" hidden md:flex">Bookmark</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Content;
