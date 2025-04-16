import React from "react";

function Pledges() {
  return (
    <>
      <article className="border border-gray-200 rounded-md flex flex-col px-6 py-4 gap-4">
        <div className="flex flex-col gap-2  md:flex-row md:justify-between md:items-center">
          <h3 className="font-bold text-[13px] font-Commissioner">
            Bamboo Stand
          </h3>
          <h6 className="text-[11px] text-[#73b9b0] font-medium">
            Pledge $25 or more
          </h6>
        </div>

        <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner leading-5">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign and you'll be added to a special
          Backer member list
        </p>
        <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between md:items-center">
          <h2 className="font-bold text-[23px] flex gap-1 items-start">
            101 <span className="text-[9px] text-[#9b9b9b] mt-1">left</span>
          </h2>
          <button className="rounded-full bg-[#157a74] text-white text-[9px] font-Commissioner font-bold px-[3.4em] py-[1.3em] md:px-[15px] md:py-[0.7em]">
            Select Reward
          </button>
        </div>
      </article>
      <article className="border border-gray-200 rounded-md flex flex-col px-6 py-4 gap-4 ">
        <div className="flex flex-col gap-2  md:flex-row md:justify-between md:items-center">
          <h3 className="font-bold text-[13px] font-Commissioner">
            Black Edition Stand
          </h3>
          <h6 className="text-[11px] text-[#73b9b0] font-medium">
            Pledge $75 or more
          </h6>
        </div>
        <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner leading-5">
          You get a Black Special Edition computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included
        </p>
        <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between md:items-center">
          <h5 className="font-bold text-[23px] flex gap-1 items-start">
            64 <span className="text-[9px] text-[#9b9b9b] mt-1">left</span>
          </h5>
          <button className="rounded-full bg-[#157a74] text-white text-[9px] font-Commissioner font-bold px-[3.4em] py-[1.3em] md:px-[15px] md:py-[0.7em]">
            Select Reward
          </button>
        </div>
      </article>
      <article className="border border-gray-200 rounded-md flex flex-col px-6 py-4 gap-4">
        <div className="flex flex-col gap-2  md:flex-row md:justify-between md:items-center">
          <h3 className="font-bold text-[13px] font-Commissioner">
            Mahogany Special Edition
          </h3>
          <h5 className="text-[11px] text-[#73b9b0] font-medium">
            Pledge $200 or more
          </h5>
        </div>
        <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner leading-5">
          You get two Special Edition Mahogany stands, a Backer T-Shirt and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included
        </p>
        <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between md:items-center">
          <h5 className="font-bold text-[23px] text-[#9b9b9b] flex gap-1 items-start">
            0 <span className="text-[9px] text-[#9b9b9b] mt-1">left</span>
          </h5>
          <button className="rounded-full bg-[#9b9b9b] text-white text-[9px] font-Commissioner font-bold px-[3.4em] py-[1.3em] md:px-[15px] md:py-[0.7em]">
            Out of Stock
          </button>
        </div>
      </article>
    </>
  );
}

export default Pledges;
