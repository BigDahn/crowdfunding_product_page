import React from "react";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import { useCrowdfund } from "../contexts/MainContext";

function Content() {
  const { dispatch, bookmarked } = useCrowdfund();
  return (
    <Modal>
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
            <Modal.Open opens="project">
              <button className="bg-[#3cb4ab] hover:bg-[#157a74] rounded-full text-center px-[3em] text-[10px] py-[1.5em] md:px-[30px] md:py-[11px] text-white md:text-[12px] font-bold cursor-pointer">
                Back this project
              </button>
            </Modal.Open>

            <button
              onClick={() => dispatch({ type: "bookmark" })}
              className={`${
                bookmarked
                  ? "md:bg-[#f4f4f4] flex items-center gap-4  md:pr-[30px] md:rounded-full  text-[#898989] text-[12px] font-bold cursor-pointer"
                  : "md:bg-[#f4f8f9] flex items-center gap-4  md:pr-[30px] md:rounded-full  text-[#157a74] text-[12px] font-bold cursor-pointer"
              }`}
            >
              <img
                src="/images/icon-bookmark.svg"
                className="h-[40px] md:h-[40px]"
              />
              <span className=" hidden md:flex">
                {bookmarked ? "Bookmark" : "Bookmarked"}
              </span>
            </button>
          </div>
        </section>
      </div>
      <Modal.Window name="project">
        <ModalContent />
      </Modal.Window>
    </Modal>
  );
}
//
export default Content;
