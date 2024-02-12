import React from "react";
import TextInput from "../components/form/textinput";


 const Login = ({}) =>{
    return(
        <>
        <div style={{background:"radial-gradient(green,black)", color:"white",}}>
           <h1>
             log in
           </h1>
           <TextInput title={"Email"} placeholder={"xyz@example.com"}/>
           <TextInput title={"Password"} placeholder={"***"}/>
         </div>
        </>
    )
};
export default Login