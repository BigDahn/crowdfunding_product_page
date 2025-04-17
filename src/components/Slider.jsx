import ProgressBar from "@ohaeseong/react-progress-bar";
import { formatCurrency } from "../utils/helper";
import { useCrowdfund } from "../contexts/MainContext";

function Slider() {
  const { maxPrice, totalPrice } = useCrowdfund();

  return (
    <div className="flex flex-col bg-[#ffffff] shadow-lg md:items-center px-6 py-8 ">
      <div class="rounded-md text-center divide-gray-400 flex flex-col gap-4 divide-y-1 md:divide-y-0 md:flex-row px-6 md:gap-5 md:divide-x-1 items-center py-8 ">
        <div className="flex flex-col gap-1 pb-3 md:pr-3 ">
          <h3 className="font-bold text-3xl">
            {formatCurrency(totalPrice).replace(".00", "")}
          </h3>
          <p className="text-[10px]">{`of ${formatCurrency(maxPrice).replace(
            ".00",
            ""
          )} backed`}</p>
        </div>
        <div className="flex flex-col gap-1 pb-3 md:pr-14  ">
          <h3 className="font-bold text-3xl">5,007</h3>
          <p className="text-[10px]">total backers</p>
        </div>
        <div className="flex flex-col gap-1 pb-3 md:pr-4 ">
          <h3 className="font-bold text-3xl ">56</h3>
          <p className="text-[10px]">days left</p>
        </div>
      </div>

      <div className="w-[100%] ">
        <ProgressBar
          value={totalPrice}
          max={maxPrice}
          labelVisible={false}
          trackColor="#43b0a7"
          borderRadius="20px"
          height="10px"
        />
      </div>
    </div>
  );
}

export default Slider;
