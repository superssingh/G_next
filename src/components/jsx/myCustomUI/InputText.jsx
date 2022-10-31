const InputText = ({ name, label, type, error, required, register }) => {
  return (
    <div className="grid relative my-2">
      <div className="grid relative w-full">
        <input
          id={name}
          type={type || "text"}
          placeholder={label}
          {...register(name)}
          required
          className="inputText animate  bg-black/10  text-slate-100 focus:bg-black/60 hover:shadow-sm shadow-black border-black/30 border-2 focus:border-green-500 rounded-md "
        />
        <label
          htmlFor={name}
          className="inputLabel px-4 py-2 absolute text-gray-400 text-sm opacity-0"
        >
          {label}
        </label>
      </div>
      <div
        className={`grid relative ${
          error ? "pb-6 opacity-1 " : "pb-0 h-0 opacity-0 "
        }  w-full  transition-all duration-500`}
      >
        <p
          className={`${
            error ? "grid h-fit py-2 opacity-1 " : "h-0 opacity-0 "
          }  w-full px-4 absolute text-gray-100 text-xs bg-pink-700 rounded-b-md transition-all duration-500 `}
        >
          {error}
        </p>
      </div>
    </div>
  );
};

export default InputText;
