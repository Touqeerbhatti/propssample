

import React from "react";


const Foam=props=>
{   
    const {Alldata}=props

    console.log(Alldata)
    return(
        <>
        <h1>
            Form
        </h1>

        { Alldata.map((element)=>{
            return(
        <>

            <label>Username</label>
            <input type={element.type} name={element.name} value={element.value} />
        </>
            )
        })
        }

        </>
    )
}


export default Foam;