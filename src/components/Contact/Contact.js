import React, {Component} from "react";
import './contact.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//import img1 from './image/1.jpg';

//import Button from 'react-bootstrap/Button';

// import {FaPhone} from 'react-icons/fa';
// import { IconContext } from "react-icons";


function renderHyperLink(content){
    return(
        <a href=".">{content}</a>

    )
}

function ContactBox(props) {
    let icon = "phone"
    if(props.icon !== undefined){
        icon = props.icon;
    }
   
    return ( 
               
            /* <Button className="contact-box">
                Contact box 
            </Button> */
            // <div> 
            // <IconContext.Provider value={{ size:"80" , className: "global-class-name" }}>
            //   <div>
            //     <FaPhone />
            //   </div>
            // </IconContext.Provider>
            // </div>
            <div className="contact-box">
                <div className="contact-box-item logo">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="contact-box-item title">
                   {props.title}
                </div>
                <div className="contact-box-item blurb">
                    {props.details}
                </div>
                <div className="contact-box-item number" >
                    {props.action==='email'? renderHyperLink(props.content) : props.content}
                </div>
            </div>
                    
    );
}

class Contact extends Component {
    render() {
        return (
            <div className="contact-section-wrapper contact section" id="contact">
                <div className="contact-box-wrapper">
                    <ContactBox icon="phone" title="Talk to us" 
                    details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    content="096-0009902" action="phone"/>
                    <ContactBox icon="envelope" title="Email us" 
                    details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    content="example@mail.com" action="email"/>
                </div>
            </div>
           
        );
    }
}

export default Contact; 