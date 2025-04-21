import React from "react";
import SidebarModal from "./SidebarModal";
import { useCrowdfund } from "../contexts/MainContext";

function Hero() {
  const { isSidebarOpen, dispatch } = useCrowdfund();
  return (
    <div
      className={`relative bg-[url(/images/image-hero-mobile.jpg)]  md:bg-[url(/images/image-hero-desktop.jpg)] bg-cover bg-no-repeat h-96`}
    >
      <section className="flex justify-between items-center max-w-6xl px-6 md:max-w-5xl m-auto pt-10">
        <img src="/images/logo.svg" />

        <ul className="font-Commissioner text-white font-normal text-[16px] hidden md:flex md:gap-6 cursor-pointer">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>

        {isSidebarOpen ? (
          <img
            src="/images/icon-close-menu.svg"
            className="flex  md:hidden"
            role="button"
            onClick={() => dispatch({ type: "sidebar" })}
          />
        ) : (
          <img
            src="/images/icon-hamburger.svg"
            className="flex  md:hidden"
            role="button"
            onClick={() => dispatch({ type: "sidebar" })}
          />
        )}
      </section>
      <div>{isSidebarOpen && <SidebarModal />}</div>
    </div>
  );
}

export default Hero;
