import React from "react";

function Hero() {
  return (
    <div
      className={`relative bg-[url(/images/image-hero-mobile.jpg)]  md:bg-[url(/images/image-hero-desktop.jpg)] bg-cover bg-no-repeat h-96`}
    >
      <section className="flex justify-between items-center max-w-6xl px-6 md:max-w-5xl m-auto pt-10">
        <img src="/images/logo.svg" />

        <ul className="font-Commissioner text-white font-normal text-[16px] hidden md:flex md:gap-6">
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
        <img src="/images/icon-hamburger.svg" className="flex  md:hidden" />
      </section>
    </div>
  );
}

export default Hero;
