import React, { useContext, useEffect, useState } from "react";
import ImageSelector from "../Shared/ImageSelector";
import Tabs from "../Shared/Tabs";
import InputBox from "../Shared/InputBox";
import TextArea from "../Shared/TextArea";
import { offerContext } from "../../context/offerContext";

const CreateOffer = () => {
  const { setCreatedOffers } = useContext(offerContext);
  const [type, setType] = useState("package");
  const [activeType, setActiveType] = useState({
    package: false,
    pricing: false,
    discount: false,
  });
  const [coverImage, setCoverImage] = useState("");
  const [details, setDetails] = useState({
    title: "",
    subtitle: "",
    desc: "",
  });

  const handleType = (type) => {
    setType(type);

    if (type === "package") {
      setActiveType({
        package: true,
        pricing: false,
        discount: false,
      });
    } else if (type === "pricing") {
      setActiveType({
        package: false,
        pricing: true,
        discount: false,
      });
    } else {
      setActiveType({
        package: false,
        pricing: false,
        discount: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const handleFileInputChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setCoverImage(url);
  };

  const handleSubmit = () => {
    if (
      details.title === "" ||
      details.description === "" ||
      coverImage === "" ||
      type === ""
    ) {
      alert("please fill all the details");
    } else {
      setCreatedOffers((prev) => [
        ...prev,
        {
          details,
          coverImage,
          type,
        },
      ]);
      setActiveType({
        package: false,
        pricing: false,
        discount: false,
      });
      setCoverImage(null);
      setDetails({
        title: "",
        subtitle: "",
        desc: "",
      });
    }
  };

  return (
    <>
      <div className="w-1/2 flex flex-col gap-4">
        <div>
          <ImageSelector
            coverImage={coverImage}
            onChange={handleFileInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="title">Type</p>
          <Tabs
            activeType={activeType}
            handleType={(type) => handleType(type)}
          />
        </div>
        <div className="flex  gap-2 justify-between">
          <div className="w-full">
            <p className="title">Title</p>
            <InputBox
              name="title"
              onChange={handleChange}
              value={details.title}
            />
          </div>
          <div className="w-full">
            <p className="title">Subtitle</p>
            <InputBox
              name="subtitle"
              onChange={handleChange}
              value={details.subtitle}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="title">Description</p>
          <TextArea name="desc" onChange={handleChange} value={details.desc} />
        </div>

        <div className="flex w-full justify-center mt-4 items-center">
          <button
            onClick={handleSubmit}
            className="bg-custom-gradient  w-[200px] rounded-md p-2 flex justify-center items-center text-base text-white "
          >
            Create Offer
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateOffer;
