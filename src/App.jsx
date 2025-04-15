import { useWindowSize } from "@react-hook/window-size";
import { useEffect } from "react";
import { useState } from "react";

const mobileImg = "/images/image-hero-mobile.jpg";
const desktopImg = "/images/image-hero-desktop.jpg";

function App() {
  const [width] = useWindowSize();

  const [image, setImage] = useState(desktopImg);

  useEffect(() => {
    if (width < 1000) {
      setImage(mobileImg);
    }
  }, [width]);
  console.log(image);
  return (
    <div className="font-Commissioner">
      <div
        className={`relative bg-[url(/images/image-hero-mobile.jpg)]  md:bg-[url(/images/image-hero-desktop.jpg)] bg-cover bg-no-repeat h-96`}
      >
        <section className="flex justify-between items-center max-w-6xl px-6 md:max-w-5xl m-auto pt-10">
          <img src="/images/logo.svg" />

          <ul className="font-Commissioner text-white font-normal text-[16px] hidden lg:flex lg:gap-6">
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
          <img src="/images/icon-hamburger.svg" className="flex  md:hidden" />
        </section>
      </div>
      <section className="m-auto max-w-[30rem] flex flex-col gap-3 relative bottom-9">
        <div class="bg-[#ffffff] shadow-lg   rounded-md  ">
          <img
            src="/images/logo-mastercraft.svg"
            className="flex items-center m-auto relative bottom-4.5 h-10"
          />
          <section className="flex flex-col items-center gap-10 pb-10 w-[100%] ">
            <div className="flex flex-col gap-2 h-[100%] items-center">
              <h2 className="font-bold text-lg">
                Mastercraft Bamboo Monitor Riser
              </h2>
              <p className="text-[12px]">
                A beautiful & handcrafted monitor to stand to reduce neck and
                eye strain.
              </p>
            </div>
            <div className="flex items-center px-5 w-[100%] justify-between ">
              <button className="bg-[#157a74] rounded-full text-center px-[30px] py-[11px] text-white text-[12px] font-bold">
                Back this project
              </button>
              <button className="bg-[#f5f6f9] flex items-center gap-4  pr-[30px] rounded-full  text-[#157a74] text-[12px] font-bold">
                <img src="/images/icon-bookmark.svg" className="h-[40px]" />
                Bookmark
              </button>
            </div>
          </section>
        </div>
        <div class="bg-[#ffffff] shadow-lg rounded-md flex px-6 gap-5 divide-x-1 items-center py-8 ">
          <div className="flex flex-col gap-1 pr-4 ">
            <h3 className="font-bold text-3xl">$89,914</h3>
            <p className="text-[10px]">of $100,000 backed</p>
          </div>
          <div className="flex flex-col gap-1 pr-14  ">
            <h3 className="font-bold text-3xl">5,007</h3>
            <p className="text-[10px]">total backers</p>
          </div>
          <div>
            <h3 className="font-bold text-3xl">56</h3>
            <p className="text-[10px]">days left</p>
          </div>
        </div>
        <div class="bg-red-300 h-[30vh] rounded-md ">dfdf</div>
      </section>
    </div>
  );
}

export default App;
