





const SelectGroup = ({
    label,
    id,
    disabled,
    form,
    name,
    readonly,
    required,
    value,
    handleChange,
    options
})=>{


    return (
        <div className="w-full grid grid-cols-1 gap-3 content-start">
      <div className="flex items-center justify-between gap-3">
        <label
          htmlFor={id}
          className="font-medium text-base text-[#5d7186] capitalize"
        >
          {label}
        </label>
      </div>

      <div className="w-full relative">
        <select name={name} id={id} className={`w-full py-2 px-4 rounded-lg border border-solid border-[var(--bs-input-border-color)] outline-0 transition-colors
        font-normal leading-[1.5] text-[#5d7186] text-sm focus:border-[var(--bs-input-focus-border-color)] placeholder:text-[var(--font-placeholder-color)]
        check-validity
        `}
        value={value}
        onChange={handleChange}
        >
            {
                options.map((option,index)=>{
                    return(
                        <option key={option.value} value={option.value}>{
                            option.name
                        }</option>
                    )
                })
            }
        </select>
    </div>
    
    </div>
    )


};


export default SelectGroup;