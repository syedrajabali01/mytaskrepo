import React from 'react';
import '../App.css';
import Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {FaSignal, FaWifi, FaBatteryFull, FaCalendarAlt, 
    FaMapPin,FaLink,FaAngleRight,FaRegHandshake, FaHandPaper} from 'react-icons/fa';
const Landing = () => {
  return (
    <>
    <div className='d-flex  status-bar '>
        <div className='Time'>
            09:41
        </div>
        <div className='d-flex justify-content-end myicon'>
        <FaSignal/>&nbsp; <FaWifi></FaWifi>&nbsp;<FaBatteryFull></FaBatteryFull>
        
        </div>
        
    </div>
    
        <div className='mytitle' >

        
            <h1><span className='maintitle'>Imagine if <br></br>
        <span className='snapchat'>Snapchat</span>
        <br></br> had events.</span> </h1>
        
            <p className='title-body'>Easily host and share events with your friends across any social media.</p>
        </div>
    <div className='mycard'>
        <Card  className='myfullcard' 
        
        style={{ width: '20rem', borderRadius:'30px',backgroundColor:'rgba(0, 0, 0, 0.02)',  
        filter: 'dropShadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05)',
        borderRadius: '13.2326px' }}>
            <Card.Img variant="top" src="card-img.png "/>
            <Card.Body style={{ padding:'0px' }}>
                
                <Card.Title><span className='mycolor'>Movie Night</span></Card.Title>
                <p><FaHandPaper></FaHandPaper>&nbsp;Hosted By Elysia</p>
            
                <Card.Text >
                    <div className='card-response'>
                        <p>14 responses - see guests
                        &nbsp;&nbsp; 
                        <Button variant="primary" style={{background:'#8456EC'}}>
                            <FaRegHandshake> </FaRegHandshake> &nbsp; Invite</Button> </p>
                    </div>
                    <div  class=" d-flex">
                        <div className=" card-icon-border"><FaCalendarAlt></FaCalendarAlt></div>
                        <div className=''><b>18 August 6:00</b>
                            <p><small>to 19 August 1:00 UTC+10</small></p>
                        </div>
                        <div className='card-icon-border'><FaAngleRight></FaAngleRight></div>   

                    </div>
                    <div class="d-flex">
                    <div class="card-icon-border"><FaMapPin></FaMapPin></div>
                        <div className=''><b>18 August 6:00</b>
                            <p><small>to 19 August 1:00 UTC+10</small></p>
                        </div>  
                     <div className='card-icon-border'><FaAngleRight></FaAngleRight></div>   
                    </div>
                    <div class="d-flex">
                    <div class=" card-icon-border"><FaLink></FaLink></div>
                    <div className=''><b>18 August 6:00</b>
                            <p><small>to 19 August 1:00 UTC+10</small></p>
                        </div>
                        <div className='card-icon-border'><FaAngleRight></FaAngleRight></div>   

                    </div>

                </Card.Text>
                
            </Card.Body>
            </Card>
        </div>    <br></br>
            <Button variant="primary" className='mybtn-for-event' style={{fontSize:'25px',fontWeight:'Bold'}} > Create My event</Button>
        
<br></br>
    </>
  )
}

export default Landing