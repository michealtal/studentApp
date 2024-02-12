import React from "react";
import Button from "../cta/button";
import { cardStyle } from "./card";

const EmployeeCard = (props) => {
    return (
         <>
          <div style={cardStyle.container}>
            <div>
                <div style={cardStyle.spacer} />
                <img src={props.src} alt="" style={cardStyle.image}/>
            </div>
            <div>
                <h1>{`${props.first} ${props.last}`}</h1>
                <h4>{props.role}</h4>
            </div>
            <div>
                <Button title={"About"} color={'white'} action={() => console.log(props.data)}/>
            </div>

          </div>

          
         </>
    );
};
export default EmployeeCard