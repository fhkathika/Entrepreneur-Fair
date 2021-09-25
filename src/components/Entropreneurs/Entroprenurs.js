import React, { useEffect, useState } from 'react';
import Women from '../Women/Women';
import ListOfPerson from '../ListOfPerson/LIstOfPerson'

import './Entroprenurs.css'
const Entroprenurs = () => {

    // load JSON data
    const [womens,setWomens]=useState([])
    useEffect(()=>{
        fetch('./mybd.JSON')
        .then(res => res.json())
        .then(data => setWomens(data))
    },[])
    return (
        <div>
            <h1>lets explore the entroprenurs</h1>
           <div className="entroprenur">
           <div className="addedPeopleList">
            
            <ListOfPerson></ListOfPerson>
         
         </div>
           <div className="entroprenurs-card">
            {
                womens.map(women => <Women women={women}></Women>)
            }
            </div>
          
           </div>
           
        </div>
    );
};

export default Entroprenurs;