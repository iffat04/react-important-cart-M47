import React from 'react';
import { addAsObject,removeItem } from '../../utilities/fakeDB';


const Cosmetic = (props) => {

    const{_id, name , age } = props.cosmetic;
    const addCart = id =>{
        //addToDb(id);
        addAsObject(id)
    }
   


    return (
        <div style={{backgroundColor :"yellow", margin:"10px"}}>
            <h1>ID:{_id}</h1>
            <h2>{name}</h2>
            <h1>Age: {age}</h1>
            <h1 className="bg-secondary">Total:{props.totalAge}</h1>
            <button onClick={()=>addCart(_id)}>add to cart</button>
            <br />
            <button onClick ={()=>removeItem(_id)}>Remove from cart</button>
        </div>
    );
};

export default Cosmetic;