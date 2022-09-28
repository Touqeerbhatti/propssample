

import React from "react";


const Foam=props=>
{   
    const {Alldata,color,setcolor,heading,setheading}=props

    console.log(Alldata)

    return(
        <>
        <h1 onClick={()=>setheading("child")}>
            {heading}
        </h1>
        
        <button onClick={()=>setcolor("Submit me")}>
        {color}
        </button>

        { Alldata.map((element)=>{
            return(
        <>

            <label>Username</label>
            <input type={element.type} name={element.name} value={element.value}  />

        </>
            )
        })
        }

        </>
    )
}


export default Foam;