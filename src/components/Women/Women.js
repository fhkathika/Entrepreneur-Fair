import React from 'react';
import './Women.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button} from 'react-bootstrap';

const Women = (props) => {
    // console.log(props.women)
    // destructure entroprenuer detail
    const {id,name,education,profession,born,img,stall_Fee}=props.women
   
    return (
        <div className="women-style">
            <Card style={{ width: '18rem', height:'36rem' }}>
<Card.Body>
<Card.Img src={img}/>
  <Card.Title>{name}</Card.Title>
  <Card.Text>{profession}</Card.Text>
  <Card.Text>{education}</Card.Text>
  <Card.Text>{born}</Card.Text>
  <Card.Text>{stall_Fee}</Card.Text>
<Button onClick={()=>props.handleStallBookingFee(props.women)} >Add</Button>
</Card.Body>
</Card>
            
        </div>


    );
};

export default Women;