


function CommonInputs({label,type, name, id, value,placeholder,onChange}) {
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name}
            type={type||"text"}
             id={id} 
             placeholder={placeholder || "enter the value"} 
             value={value} 
             onChange={onChange}/>
        </div>
    );
}
export default CommonInputs;