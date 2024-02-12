import React from "react";

const WelcomeUser = ({name}) => {
    return (
        <>
         <div>{name ? <h1>Hello {name}</h1> : <h1>You are suspisious</h1>}</div>
         {name && <div> {name} </div>}
        </>
    )
}
export default WelcomeUser