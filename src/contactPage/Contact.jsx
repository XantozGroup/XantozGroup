import React from 'react'
import './Contact.css'
import { MapPin, Phone, EnvelopeSimple, FacebookLogo, LinkedinLogo, InstagramLogo, TwitterLogo, WhatsappLogo } from 'phosphor-react';

function Contact() {
  return (
    <div>
        <div className='contact-body'>
            <div className="contact-gen">
                <div className="contact-head">
                    <h1 >Contact Us</h1>
                    <div className="contact-wrap" style={{margin: '80px 0 0'}}>
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
                    <span className="contact-add"><a href="https://wa.me/08039514066">+234-80-39514066</a></span><br /><br />
                    <div className="contact-wrap">
                        <EnvelopeSimple size={32} className='
                        contact-icon' />
                        <span>E-mail Address</span>
                    </div>
                    <span className="contact-add"><a href="mailto:chrixantoz@gmail.com">chrixantoz@gmail.com</a></span>
                </div>
            </div>
            <form className='formc' onSubmit={sendEmail} ref={form}>
                <div className="colc">          
                <h2>Send Us A Message</h2>
                <div className="custom-input">
                <input  placeholder='Your full name*' name="user_name" style = {{width: '100%', marginBottom: '.5rem', padding: '.8rem', backgroundColor: 'transparent', border: '1px solid white'}} />
                <input  placeholder='Email*' name="user_email" style = {{width: '100%', marginBottom: '.5rem', padding: '.8rem', backgroundColor: 'transparent', border: '1px solid white'}} />
                <input  placeholder='Phone number*' name="user_phone" style = {{width: '100%', marginBottom: '.5rem', padding: '.8rem', backgroundColor: 'transparent', border: '1px solid white'}} />
                <textarea placeholder="Write us a message" cols="20" rows="4" id="textc" name="message"></textarea>
                <button title = 'SUBMIT' type = 'submit' style = {{width: '100%', margin: '8px 0% 0', padding: '.8rem', backgroundColor: '#AB7E5F'}} />
                </div>
                
                </div>
            </form>
        </div>  
    </div>
  )
}

export default Contact