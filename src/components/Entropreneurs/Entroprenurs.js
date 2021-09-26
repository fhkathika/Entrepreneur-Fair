import React, { useEffect, useState } from 'react';
import Women from '../Women/Women';
import ListOfPerson from '../ListOfPerson/LIstOfPerson'

import './Entroprenurs.css'
const Entroprenurs = () => {

    // load JSON data
    const [womens,setWomens]=useState([])
    //load total booked stalls
    const [staller,setStaller]=useState([])
    useEffect(()=>{
        fetch('./mybd.JSON')
        .then(res => res.json())
        .then(data => setWomens(data))
    },[])

    const handleStallBookingFee=(bookingDetail)=>{
        const newStaller=[...staller,bookingDetail]
       
        const existStaller=staller.find(staller=> staller.id=== bookingDetail.id)
        // const existStallerName=staller.find(staller=> staller.name=== bookingDetail.name)
      if(existStaller ){
console.log('already exists',existStaller.name)
      }
      else{
        setStaller(newStaller)
       
     
      }
  

    }
    return (
        <div className="bodyPart">
            <h1 className="body-title">নারী উদ্যোক্তা</h1>
           <div className="entroprenur">
           <div className="addedPeopleList">
            
            <ListOfPerson staller={staller} ></ListOfPerson>
         
         </div>
           <div className="entroprenurs-card">
            {
                womens.map(women => 
                <Women key={women.id}
                     women={women}
                     handleStallBookingFee={handleStallBookingFee} >
                </Women>)
            }
            </div>
          
           </div>
           
        </div>
    );
};

export default Entroprenurs;