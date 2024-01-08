import React from "react";

const OffersTab = () => {
  const isActive = false;
  const isOffer = true;
  return (
    <>
      <div className="flex w-full ">
        <button
          //   onClick={() => handleType("package")}
          className={`${
            isActive ? "bg-custom-gradient text-white" : "bg-white"
          }   bg-white font-[600] hover:bg-custom-gradient hover:text-secondary w-full p-2 flex justify-center items-center text-base text-primary border-1.5 rounded-sm  border-custom-gray`}
        >
          Packages
          <span className="text-custom-gray text-[16px]">(3)</span>
        </button>
        <button
          className={`${
            isActive ? "bg-custom-bg text-white" : "bg-white"
          }   bg-white font-[600] hover:bg-custom-gradient hover:text-secondary w-full p-2 flex justify-center items-center text-base text-primary border-1.5 rounded-sm  border-custom-gray`}
        >
          Pricings
          <span className="text-custom-gray text-[16px]">(2)</span>
        </button>
        <button
          className={`${
            isOffer ? "bg-custom-gradient text-white" : "bg-white"
          }   bg-white font-[600]  hover:bg-custom-bg hover:text-secondary w-full p-2 flex justify-center items-center text-base text-primary border-1.5 rounded-sm  border-custom-gray`}
        >
          Offers
          <span className="text-custom-gray text-[16px]">(15)</span>
        </button>
      </div>
    </>
  );
};

export default OffersTab;
