import Tabs from "../Shared/Tabs";
import InputBox from "../Shared/InputBox";
import Offers from "./offers";
import { useContext } from "react";
import { offerContext } from "../../context/offerContext";
import OffersTab from "../Shared/Tabs/offersTab";

const ShowOffer = () => {
  const { createdOffers } = useContext(offerContext);

  console.log(createdOffers);

  return (
    <>
      <div className="w-1/2 flex flex-col gap-4">
        <div className="w-full">
          {/* <Tabs /> */}
          <OffersTab />
        </div>
        <div className="w-full">
          <InputBox placeholder="Search for offers..." />
        </div>
        <div className="w-full flex flex-col gap-2 ">
          {createdOffers?.map((dt, ind) => (
            <Offers
              key={ind}
              coverImage={dt.coverImage}
              title={dt?.details?.title}
              desc={dt?.details?.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowOffer;
