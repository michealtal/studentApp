import React, { useState } from "react";
import Button from "../cta/button";

//higher order components
// the structure of higher order components 
// const newComponents = higherFunction (wrappedComponents)

const Incremental = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
          <p> You have clicked: {count}</p>
          <Button title={"Add more"} action={() => {setCount((count) => count + 1)}}/>
        </div>
    );
};
export default Incremental