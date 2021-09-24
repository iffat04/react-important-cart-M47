import React, { useEffect } from "react";
import { useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import ShowCart from "../ShowCart/ShowCart";


const Cosmetics =() =>{
    const [cosmetics , setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('./cosmetics.json')
        .then(res => res.json())
        .then(data=> setCosmetics(data))
    },[])
    console.log(cosmetics)


    const ageReducer = (prev,current) =>{
        return prev + current.age;
    } 
    
    const totalAge = cosmetics.reduce(ageReducer,0);
    console.log(totalAge)

    return(
        <div>
         <h1>Cosmetics data</h1>
         <h1 className="bg-secondary">{totalAge}</h1>
         {
             cosmetics.map(cosmetic=> <Cosmetic cosmetic ={cosmetic} key={cosmetic._id} totalAge={totalAge}></Cosmetic>)
         }

         <ShowCart></ShowCart>
        </div>
    )
}

export default Cosmetics;