import { useCrowdfund } from "../contexts/MainContext";

function Pledges() {
  const { dispatch, data } = useCrowdfund();

  return (
    <>
      {data.map((s) => {
        const { name, pledge, info, StockLeft } = s;
        return (
          <article
            key={name}
            className="border border-gray-200 rounded-md flex flex-col px-6 py-4 gap-4"
          >
            <div className="flex flex-col gap-2  md:flex-row md:justify-between md:items-center">
              <h3
                className={`${
                  StockLeft < 1
                    ? "font-bold text-[13px] font-Commissioner text-[#8f8f8f] "
                    : "font-bold text-[13px] font-Commissioner"
                }`}
              >
                {name}
              </h3>
              <h6 className="text-[11px] text-[#73b9b0] font-medium">
                Pledge ${pledge} or more
              </h6>
            </div>
            <p className="text-[10px] text-[#9b9b9b] font-medium font-Commissioner leading-5">
              {info}
            </p>
            <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between md:items-center">
              <h2 className="font-bold text-[23px] flex gap-1 items-start">
                {StockLeft}
                <span className="text-[9px] text-[#9b9b9b] mt-1">left</span>
              </h2>

              <button
                onClick={() =>
                  dispatch({
                    type: "confirm",
                    payload: { opens: "project", name: name },
                  })
                }
                disabled={StockLeft < 1}
                className={`${
                  StockLeft < 1
                    ? "rounded-full bg-[#9b9b9b] cursor-not-allowed text-white text-[9px] font-Commissioner font-bold px-[3.4em] py-[1.3em] md:px-[15px] md:py-[0.7em]"
                    : "rounded-full bg-[#3cb4ab] hover:bg-[#157a74] text-white text-[9px] font-Commissioner font-bold px-[3.4em] py-[1.3em] md:px-[15px] md:py-[0.7em] cursor-pointer"
                }`}
              >
                {StockLeft > 1 ? " Select Reward" : "Out of stock"}
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default Pledges;
