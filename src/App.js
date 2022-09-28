

import React, { useState } from "react";
import {Data} from "./Alldata";
import Foam from "./Foam";

const App=()=>
{

  const[color,setcolor]=useState("Click me");
  const[heading,setheading]=useState("initialvalue");
  

  return(
    <>
    <h1>
      code App
    </h1>

    <Foam 
    Alldata={Data} 
    color={color}
    setcolor={setcolor}
    heading={heading}
    setheading={setheading}

    />

    </>
  )
}

export default App;
