const TextArea = ({ name, label, rows, cols, error, required, register }) => {
  return (
    <div className="relative my-2 w-full p-2 m-2">
      <div className="grid relative ">
        <textarea
          id={name}
          rows={rows || 4}
          cols={cols || 0}
          required={required || ''}
          placeholder={label}
          {...register(name)}
          className="textArea w-full animate bg-black/20  text-teal-200 focus:bg-black/60 hover:shadow-sm shadow-black border-black/30 border-2 focus:border-green-500 rounded-md"
        />
        <label
          htmlFor={name}
          className="inputLabel px-4 py-2 absolute text-slate-200 text-sm opacity-0"
        >
          {label}
        </label>
      </div>
      <div
        className={`grid w-full relative ${
          error ? ' opacity-1 ' : ' h-0 opacity-0 '
        }    transition-all duration-500`}
      >
        <label
          className={`w-full px-4 ${
            error ? 'grid h-fit py-2 opacity-1 ' : 'h-0 opacity-0 '
          }    text-gray-100 text-xs bg-pink-700 rounded-b-md transition-all duration-500 `}
        >
          {error}
        </label>
      </div>
    </div>
  )
}

export default TextArea
