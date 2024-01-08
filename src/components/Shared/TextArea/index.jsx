/* eslint-disable react/prop-types */
const TextArea = ({ name, onChange, value }) => {
  return (
    <>
      <textarea
        rows={2}
        name={name}
        value={value}
        onChange={onChange}
        className="p-2 w-full outline-none border-1.5 rounded-sm"
      />
    </>
  );
};

export default TextArea;
