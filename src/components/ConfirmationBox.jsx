import React from "react";

function ConfirmationBox({ onClick }) {
  function HandleConfirmBox() {
    onClick();
  }
  return (
    <div className="flex flex-col items-center gap-4 max-w-[17rem] font-Commissioner">
      <img src="/images/icon-check.svg" />
      <h3 className="font-bold text-[15px]">Thanks for your support!</h3>
      <p className="text-center text-[10px] text-[#9b9b9b]">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide .You will get an email once our campaign is
        completed.
      </p>
      <button
        onClick={HandleConfirmBox}
        className="rounded-full bg-[#157a74] px-6 text-white font-bold py-2 cursor-pointer"
      >
        Get it!
      </button>
    </div>
  );
}

export default ConfirmationBox;
