function Slider() {
  return (
    <div>
      <div class="bg-[#ffffff] shadow-lg rounded-md text-center divide-gray-400 flex flex-col gap-4 divide-y-1 md:divide-y-0 md:flex-row px-6 md:gap-5 md:divide-x-1 items-center py-8 ">
        <div className="flex flex-col gap-1 pb-3 md:pr-4 ">
          <h3 className="font-bold text-3xl">$89,914</h3>
          <p className="text-[10px]">of $100,000 backed</p>
        </div>
        <div className="flex flex-col gap-1 pb-3 md:pr-14  ">
          <h3 className="font-bold text-3xl">5,007</h3>
          <p className="text-[10px]">total backers</p>
        </div>
        <div>
          <h3 className="font-bold text-3xl">56</h3>
          <p className="text-[10px]">days left</p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
