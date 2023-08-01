const InputGroup = ({
  label,
  placeholder = "",
  type ="text",
  name,
  required = false,
}:{
  label: string,
  placeholder?: string,
  type?: string,
  name: string,
  required?: boolean,
}) => {
  return (
    (
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
          <input type={type} placeholder={placeholder} className="input input-bordered w-full max-w-xs" name={name} required={required} />
         
        </div>
    )
  )
}

export default InputGroup