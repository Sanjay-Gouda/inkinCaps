import { AddIcon } from "../../../assets/svg/addIcon";

const ImageSelector = ({ onChange, coverImage }) => {
  return (
    <>
      {coverImage ? (
        <div className="w-full h-64 border-2 border-gray-300  rounded-sm ">
          <img src={coverImage} className="w-full h-full object-contain" />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full opacity-95">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full opacity-95 h-64 border-2 border-gray-300  rounded-sm cursor-pointer bg-primary "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <AddIcon />
              <p className="mb-2   heading ">Upload a cover photo of offer</p>
              <p className=" text-gray-500 ">
                Only JPG, PNG file types (Max 500kb)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={onChange}
            />
          </label>
        </div>
      )}
    </>
  );
};

export default ImageSelector;
