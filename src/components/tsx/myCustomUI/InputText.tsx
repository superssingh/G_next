interface InputTextProps {
  name: string
  label: string
  type?: 'text' | 'email' | 'password' | 'number'
  error?: string
  focus?: boolean
  required?: boolean
  register: any
}

const InputText = ({
  name,
  label,
  type = 'text',
  error,
  focus = false,
  required = false,
  register,
}: InputTextProps) => {
  return (
    <>
      <div className="relative my-2 w-full md:w-60">
        <div className="grid relative">
          <input
            id={name}
            type={type}
            placeholder={label}
            autoFocus={focus}
            required
            {...register(name, {
              required,
            })}
            className="inputText  animate w-full bg-black/10 text-slate-100 focus:bg-black/60 hover:shadow-sm shadow-black border-black/30 border-2 focus:border-green-500 rounded-md"
          />
          <label
            htmlFor={name}
            className={`inputLabel  px-4 py-2 absolute text-gray-400 text-sm opacity-0 hover:opacity-100`}
          >
            {label}
          </label>
        </div>
        <div
          className={`relative ${
            error ? 'opacity-1' : 'h-0 opacity-0'
          } transition-all duration-500`}
        >
          <label
            className={`px-4 ${
              error ? 'grid h-fit py-2 opacity-1' : 'h-0 opacity-0'
            } text-gray-100 text-xs bg-pink-700 rounded-b-md transition-all duration-500`}
          >
            {error}
          </label>
        </div>
      </div>
    </>
  )
}

export default InputText
