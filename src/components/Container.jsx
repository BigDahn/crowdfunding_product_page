import React from "react";
import Content from "./Content";
import Slider from "./Slider";
import About from "./About";

function Container() {
  return (
    <section className="m-auto max-w-[76%] md:max-w-[30rem] flex flex-col gap-3 relative bottom-9 font-Commissioner">
      <Content />
      <Slider />
      <About />
    </section>
  );
}

export default Container;
