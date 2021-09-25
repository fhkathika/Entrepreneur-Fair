import React from 'react';
import './Women.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button} from 'react-bootstrap';

const Women = (props) => {
    console.log(props.women)
    const {name,education,profession,born,img,salary}=props.women
    return (
        <div className="women-style">
            <Card style={{ width: '18rem', height:'36rem' }}>
<Card.Body>
<Card.Img src={img}/>
  <Card.Title>{name}</Card.Title>
  <Card.Text>{profession}</Card.Text>
  <Card.Text>{education}</Card.Text>
  <Card.Text>{born}</Card.Text>
  <Card.Text>{salary}</Card.Text>
<Button variant="primary">Add</Button>
</Card.Body>
</Card>
            
        </div>


    );
};

export default Women;