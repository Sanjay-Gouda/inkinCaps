/* eslint-disable react/prop-types */
const InputBox = ({ name, onChange, value, placeholder }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="h-[40px] p-2 w-full outline-none border-1.5 rounded-sm"
      />
    </>
  );
};

export default InputBox;
