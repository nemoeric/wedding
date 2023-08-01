const InputGroup = ({
  label,
  placeholder = "",
  type ="text",
  name,
  required = false,
  hidden = false,
  defaultValue = ""
}:{
  label?: string,
  placeholder?: string,
  type?: string,
  name: string,
  required?: boolean,
  hidden?: boolean
  defaultValue?: string
}) => {
  // Handle hidden input
  if (hidden) return <input type={type} placeholder={placeholder} className="input input-bordered w-full max-w-xs" defaultValue={defaultValue} hidden name={name} required={required} />

  return (
    (
      <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{label}</span> 
          </label>
          <input type={type} placeholder={placeholder} className="input input-bordered w-full max-w-xs" name={name} defaultValue={defaultValue} required={required} />
         
        </div>
    )
  )
}

export default InputGroup