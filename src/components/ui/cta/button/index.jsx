import React from "react";

const Button = ({title,color,backgroundColor,action,mouseOver}) => {
 const style = {
    color : color || "black",
    backgroundColor: backgroundColor || "aqua",
    border:"1px solid",
    padding:"10px 25px",
    borderRadius:"20px",
    margin:"10px 25px",
}
 return <button style={style} onClick={action} onMouseOver={mouseOver}>{title}</button>
}
export default Button;