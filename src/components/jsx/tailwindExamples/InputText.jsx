const InputText = ({ name, label, required, type }) => {
  return (
    <div>
      <div className=" mb-8">
        <div className="inputTextBox grid ">
          <input
            id={name}
            type={type || "text"}
            required={required || ""}
            placeholder={label}
            className="inputText animate bg-black/10  text-teal-300 focus:bg-black/60 hover:shadow-sm shadow-black border-black/30 border-2 focus:border-green-500 rounded-md"
          />
          <label
            htmlFor={name}
            className="inputLabel px-4 py-2 absolute text-gray-400 text-sm opacity-0"
          >
            {label}
          </label>
        </div>
      </div>
    </div>
  );
};

export default InputText;
