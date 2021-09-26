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
            <h1>list cart</h1>
            <h2 >total staller :{ staller.length} </h2>
            <h1>total Paid Amount :{totalPaidAmount} </h1>
           
         <ul>
         {staller.map(nameList=> (<li key={nameList.id}>{nameList.name}</li>))}
         </ul>
       
            
          
        </div>
    );
};

export default LIstOfPerson;