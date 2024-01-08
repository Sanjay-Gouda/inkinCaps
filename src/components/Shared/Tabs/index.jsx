/* eslint-disable react/prop-types */
const Tabs = ({ handleType, activeType }) => {
  return (
    <>
      <div className="flex w-full justify-between gap-4">
        <button
          onClick={() => handleType("package")}
          className={`${
            activeType?.package ? "bg-custom-bg text-white" : "bg-white"
          }   bg-white hover:bg-custom-bg hover:text-secondary w-full p-2 flex justify-center items-center text-base text-primary border-1.5 rounded-sm  border-custom-gray`}
        >
          Package
        </button>
        <button
          onClick={() => handleType("pricing")}
          className={`${
            activeType?.pricing ? "bg-custom-bg text-white" : "bg-white"
          }   bg-white hover:bg-custom-bg hover:text-secondary w-full p-2 flex justify-center items-center text-base text-primary border-1.5 rounded-sm  border-custom-gray`}
        >
          Pricing
        </button>
        <button
          onClick={() => handleType("discount")}
          className={`${
            activeType?.discount ? "bg-custom-bg text-white" : "bg-white"
          }   bg-white hover:bg-custom-bg hover:text-secondary w-full p-2 flex justify-center items-center text-base text-primary border-1.5 rounded-sm  border-custom-gray`}
        >
          Discount
        </button>
      </div>
    </>
  );
};

export default Tabs;
