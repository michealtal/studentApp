import React from "react";
import { inputStyle } from "./inputStyle";

const TextInput = (props) => {
    const [inputValue,setInputValue] = React.useState('')
    const [inputType] = React.useState('props.type');
    const handleChanged = (event) => {
        const newValue = event.target.value
                        setInputValue(newValue);
                        console.log(inputValue)
                        if (props.onChange) props.onChange(newValue);

    }
    return(
    <>
    <span>{props?.title? props.title : ''}:</span> <br />
    < input 
     type={inputType}
     value={inputValue}
     name="input-field"
     onChange={handleChanged}
     placeholder={props?.placeholder}
     autoComplete={props?.autoComplete? props.autoComplete : "off"}
     style={inputStyle}
     />
    </>
    );
};
export default TextInput