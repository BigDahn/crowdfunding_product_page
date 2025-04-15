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
        <div class="bg-[#ffffff] rounded-md  shadow-lg px-10 py-8 flex flex-col gap-6">
          <h3 className="text-[16px] font-bold font-Commissioner">
            About this project
          </h3>
          <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          <article className="border border-gray-200 rounded-md flex flex-col px-6 py-4 gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[13px] font-Commissioner">
                Bamboo Stand
              </h3>
              <h6 className="text-[11px] text-[#73b9b0] font-medium">
                Pledge $25 or more
              </h6>
            </div>

            <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner leading-5">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign and you'll be added to a
              special Backer member list
            </p>
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-[16px] flex gap-1 items-start">
                101 <span className="text-[9px] text-[#9b9b9b] mt-1">left</span>
              </h2>
              <button className="rounded-full bg-[#157a74] text-white text-[9px] font-Commissioner font-bold px-[15px] py-[0.7em]">
                Select Reward
              </button>
            </div>
          </article>
          <article className="border border-gray-200 rounded-md flex flex-col px-5 py-4 gap-4 ">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[13px] font-Commissioner">
                Black Edition Stand
              </h3>
              <h6 className="text-[11px] text-[#73b9b0] font-medium">
                Pledge $75 or more
              </h6>
            </div>
            <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner leading-5">
              You get a Black Special Edition computer stand and a personal
              thank you. You'll be added to our Backer member list. Shipping is
              included
            </p>
            <div className="flex justify-between items-center">
              <h5 className="font-bold text-[16px] flex gap-1 items-start">
                64 <span className="text-[9px] text-[#9b9b9b] mt-1">left</span>
              </h5>
              <button className="rounded-full bg-[#157a74] text-white text-[9px] font-Commissioner font-bold px-[15px] py-[0.7em]">
                Select Reward
              </button>
            </div>
          </article>
          <article className="border border-gray-200 rounded-md flex flex-col px-6 py-4 gap-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[13px] font-Commissioner">
                Mahogany Special Edition
              </h3>
              <h5 className="text-[11px] text-[#73b9b0] font-medium">
                Pledge $200 or more
              </h5>
            </div>
            <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner leading-5">
              You get two Special Edition Mahogany stands, a Backer T-Shirt and
              a personal thank you. You'll be added to our Backer member list.
              Shipping is included
            </p>
            <div className="flex justify-between items-center">
              <h5 className="font-bold text-[16px] text-[#9b9b9b] flex gap-1 items-start">
                0 <span className="text-[9px] text-[#9b9b9b] mt-1">left</span>
              </h5>
              <button className="rounded-full bg-[#9b9b9b] text-white text-[9px] font-Commissioner font-bold px-[15px] py-[0.7em]">
                Out of Stock
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
