import React, { useState } from "react";
import { useCrowdfund } from "../contexts/MainContext";
import { BiDollar } from "react-icons/bi";

function ModalContent({ onClick }) {
  const { data, dispatch } = useCrowdfund();
  const [rewardName, setRewardName] = useState();
  const [price, setPrice] = useState();

  return (
    <div className="font-Commissioner max-w-[30rem]  ">
      <img
        src="/images/icon-close-modal.svg"
        className="relative left-[30rem] bottom-2 cursor-pointer "
        role="button"
        onClick={() => onClick()}
      />
      <main className="overflow-x-scroll">
        <div>
          <h3 className="font-bold text-[15px] pb-2">Back this project</h3>
          <p className="text-[11px] text-[#9b9b9b] font-medium font-Commissioner leading-5 ">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>
        <section className="flex flex-col gap-4 mt-4">
          <div
            className={`${
              rewardName === "No reward"
                ? "border rounded-md border-green-300 flex items-center gap-2  py-3"
                : "border rounded-md border-gray-200 flex items-center gap-2  py-3"
            }`}
          >
            <label className="flex items-start gap-3 px-4 pt-2 pb-4">
              <input
                type="radio"
                name="reward"
                value="No reward"
                onChange={() => setRewardName("No reward")}
                className="mt-1"
              />
              <div className="flex flex-col gap-1 px-3">
                <h3 className="font-bold text-[13px] font-Commissioner hover:text-[#72aaa2]">
                  Pledge with no reward
                </h3>
                <p className="text-[11.4px] text-[#9b9b9b] font-medium font-Commissioner leading-5 ">
                  Choose to support us without reward if you simply believe in
                  our project. As a backer ,you will be signed to receive
                  products update via email .
                </p>
              </div>
            </label>
          </div>
          {data.map((s) => {
            const { name, info, StockLeft, pledge } = s;
            return (
              <article
                key={name}
                className={`${
                  name === rewardName
                    ? "border rounded-md border-green-300 flex items-center gap-2 pt-2 pb-3"
                    : "border rounded-md border-gray-200 flex items-center gap-2 pt-2 pb-3 "
                }`}
              >
                <label
                  for={name}
                  className="flex items-start gap-3 px-4 pt-2 pb-4 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={name}
                    name="reward"
                    disabled={StockLeft < 1}
                    onChange={(e) => setRewardName(e.target.value)}
                    className="mt-3"
                  />
                  <div className="px-3 flex flex-col gap-2">
                    <div className="flex  gap-2   items-center justify-between">
                      <div className="flex gap-3 items-center">
                        <h3
                          className={`${
                            StockLeft < 1
                              ? "font-bold text-[13px] text-[#8f8f8f] font-Commissioner cursor-not-allowed "
                              : "font-bold text-[13px] font-Commissioner cursor-pointer hover:text-[#72aaa2]"
                          }`}
                        >
                          {name}
                        </h3>

                        <h6 className="text-[11px] text-[#73b9b0] font-medium">
                          Pledge ${pledge} or more
                        </h6>
                      </div>
                      <h2
                        className={`${
                          StockLeft < 1
                            ? "font-bold text-[23px] flex gap-1 items-start text-[#939393]"
                            : "font-bold text-[23px] flex gap-1 items-start"
                        }`}
                      >
                        {StockLeft}
                        <span className="text-[9px] text-[#9b9b9b] mt-1">
                          left
                        </span>
                      </h2>
                    </div>

                    <p className="text-[11.4px]  text-[#9b9b9b] font-medium font-Commissioner leading-5">
                      {info}
                    </p>
                    {rewardName === name && (
                      <div className="border-t-1 border-[#9b9b9b] mt-3">
                        <article className="flex items-center justify-between pt-3">
                          <h5 className="text-[14px] font-bold text-[#9b9b9b]">
                            Enter your pledge
                          </h5>
                          <div className="flex items-center gap-2">
                            <BiDollar className="relative left-9.5 top-[1px]" />
                            <div className="flex items-center flex-col ">
                              <input
                                type="number"
                                defaultValue={pledge}
                                min={pledge}
                                className="w-20 text-center font-bold pl-6 h-10 outline-none border border-[#72aaa2] rounded-full"
                                onChange={(e) => setPrice(e.target.value)}
                              />
                            </div>
                            <button
                              disabled={!price}
                              onClick={() => {
                                dispatch({
                                  type: "pledge",
                                  payload: {
                                    amount: price,
                                    opens: "reward",
                                    name: rewardName,
                                  },
                                });
                              }}
                              className={`${
                                !price
                                  ? "rounded-full bg-[#9b9b9b] cursor-not-allowed text-white text-[15px] font-Commissioner font-bold px-[4em] py-[3em] md:px-[1.3em] md:py-[0.6em]"
                                  : "rounded-full bg-[#157a74] cursor-pointer text-white text-[15px] font-Commissioner font-bold px-[4em] py-[3em] md:px-[1.3em] md:py-[0.6em]"
                              }`}
                            >
                              continue
                            </button>
                          </div>
                        </article>
                      </div>
                    )}
                  </div>
                </label>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}

//
export default ModalContent;
