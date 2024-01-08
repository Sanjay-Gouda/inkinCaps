/* eslint-disable react/prop-types */

import { IoEyeOutline } from "react-icons/io5";
import Edit from "../../assets/svg/edit";
import { Delete } from "../../assets/svg/delete";

const Offers = ({ coverImage, title, desc }) => {
  return (
    <>
      <div className="w-full p-4 flex flex-col gap-3 border-1.5  rounded-lg">
        <div className="w-full flex gap-2 justify-end items-center">
          <IoEyeOutline size={25} color={"#2B2B34"} />
          <Edit />
          <Delete />
        </div>
        <div className="w-full flex gap-3 ">
          <div className="w-[150px] h-[100px]">
            <img src={coverImage} className="w-full h-full object-contain" />
          </div>
          <div className="w-full flex flex-col">
            <p className="heading">{title}</p>
            <p className="desc">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
