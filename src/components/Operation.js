import React from "react";
import { add } from "../utilities/Storage/Storage";
import { mul as multiply } from "../utilities/Storage/Storage"; 

const Operation =() =>{
    const first = 100;
    const second= 20;

    const sum = add(first,second)
    const gun = multiply(5,4);


    return(
        <div>
            <h2>Sum={sum} </h2>
            <h2>multiply = {gun}</h2>
        </div>
    )
}

export default Operation;