import React from "react";
import Pledges from "./Pledges";

function About() {
  return (
    <div className="bg-[#ffffff] rounded-md  shadow-lg px-3 md:px-10 py-8 flex flex-col gap-6">
      <h3 className="text-[16px] font-bold font-Commissioner">
        About this project
      </h3>
      <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <Pledges />
    </div>
  );
}

export default About;
