import React from 'react'
import './Contact.css'
import { MapPin, EnvelopeSimple, FacebookLogo, LinkedinLogo, InstagramLogo, TwitterLogo, WhatsappLogo } from 'phosphor-react';

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-body'>
            <div className="contact-gen">
                <div className="contact-head">
                    <h1 >Contact Us</h1>
                    <div className="contact-wrap">
                        <MapPin size={32} className='
                        contact-icon' />  
                        <span> Physical Address</span>
                    </div>
                    <span className="contact-add">No 8 Poultry Road, Jahi 1, Abuja.</span><br /><br />
                    <div className="contact-wrap">
                        <WhatsappLogo size={32} className='
                        contact-icon' /> 
                        <span> Let's Chat</span>
                    </div>
                    <span className="contact-add"><a href="https://wa.me/+2348039514066">+234-80-39514066</a></span><br /><br />
                    <div className="contact-wrap">
                        <EnvelopeSimple size={32} className='
                        contact-icon' />
                        <span>E-mail Address</span>
                    </div>
                    <span className="contact-add"><a href="mailto:chrixantoz@gmail.com">chrixantoz@gmail.com</a></span>
                </div>
            </div>
            <form className='contact-form'>
                <div className="message">          
                    <h2>Send Us A Message</h2>
                    <div className="form-input">
                    <input  type="text" placeholder='Your full name*' name="user_name"/><br />
                    <input  type="text" placeholder='Email*' name="user_email"/><br />
                    <input  type="text" placeholder='Phone number*' name="user_phone"/><br />
                    <textarea placeholder="Write us a message" cols="63" rows="10"  name="message"></textarea><br />
                    <button type = 'submit'>SUBMIT</button>
                    </div> 
                </div>
            </form>
        </div> 
        <footer>
            <div className='foot'>
                <div className="foot1">
                    <div className="foot2">
                        <a href="https://www.facebook.com/"><p><FacebookLogo size={30} className = 'bluei' /></p></a>
                        <a href="https://www.linkedin.com/in/"><p><LinkedinLogo size={30} className = 'linkd' /></p></a>
                        <a href="https://www.instagram.com"><p><InstagramLogo size={30} className = 'insta'  /></p></a>
                        <a href="https://www.twitter.com/"><p><TwitterLogo size={30} className = 'twit' /></p></a>
                    </div>
                </div>
                <div className="foot3">
                    <span>&copy; 2022 Xantoz Fashion Clinic Ltd. All Rights Reserved | <span className='gabz'>Designed with &#128150; by Gabbie</span></span>
                </div>
            </div>
        </footer> 
    </div>
  )
}

export default Contact