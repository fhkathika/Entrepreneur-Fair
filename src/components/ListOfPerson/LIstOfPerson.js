import React, { useEffect, useState } from 'react';
import './LIstOfPerson..css'

const LIstOfPerson = (props) => {
    // total Booked stall and amount
    const {staller}=props
    // console.log(props)

    let totalPaidAmount=0;
  
    for (const stall of staller){
       
    //    console.log(stall.name)
        totalPaidAmount=totalPaidAmount +stall.stall_Fee
    }

    return (
        <div className="listed-people-cart">
            <h1 className="cart-header">Staller List</h1>
            <h4 className="text-style" >total staller :{ staller.length} </h4>
            <h3 className="text-style">total Paid Amount :{totalPaidAmount} </h3>
           
         <ul>
         {staller.map(nameList=> (<li  className="staller-name" key={nameList.id}>{nameList.name}</li>))}
         </ul>
       
            
          
        </div>
    );
};

export default LIstOfPerson;