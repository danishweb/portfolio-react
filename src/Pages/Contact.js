import React from 'react'
import PagesTitle from '../Components/PagesTitle';
import ContactItems from '../Components/ContactItems';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';

function Contact() {
    return (
        <>
        <div className="title">
            <PagesTitle title={"Contact "} span={"Me"}/>
        </div>
        <ContactItems  icon= {<PhoneIcon/>} title={"Phone"} text= {"+91 9960715116"}/>
        <ContactItems  icon= {<MailOutlineIcon/>} title={"E-Mail"} text= {"danishshaikh5121@gmail.com"}/>
        <ContactItems  icon= {<InstagramIcon/>} title={"Instagram"} text= {"@danish512s"}/>
        </>
    )
}

export default Contact
