import React from 'react';
import './Women.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const Women = (props) => {
    // destructure entroprenuer detail
    const {name,education,profession,born,img,stall_Fee}=props.women
    //icon for booking stall button
    const bookingIcon = <FontAwesomeIcon icon={faBook} />
   
    return (
        <div className="women-style">
            {/* add card */}
            <Card  className="cardStyle" style={{ width: '18rem', height:'35rem', backgroundColor:'lightyellow' }}>
<Card.Body>
<Card.Img src={img}/>
  <Card.Title className="card-name">{name}</Card.Title>
  <Card.Text className="card-tags">Profession</Card.Text>
  <Card.Text className="card-profession">{profession}</Card.Text>
  <Card.Text className="card-text" ><small className="card-tags">education:</small>{education}</Card.Text>
  <Card.Text ><small className="card-tags">born: </small>{born}</Card.Text>
  <Card.Text ><small className="card-tags">stall fee: </small> {stall_Fee}</Card.Text>
<button className="booking-btn" onClick={()=>props.handleStallBookingFee(props.women)}>{bookingIcon} Add Booking</button>
</Card.Body>
</Card>
            
        </div>


    );
};

export default Women;