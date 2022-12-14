import React from 'react'
import './NavBar.css'
import  {Phone, FacebookLogo, TwitterLogo, LinkedinLogo, InstagramLogo, Envelope, ShoppingCart, MagnifyingGlass} from 'phosphor-react'
import Hamburger from '../Hamburger'

function NavBar() {
  return (
    <div className='nav'>
        <div className='my-nav'>
        <div className='first-bar'>
            <div className='phone-icon'>
            <Phone size={20} color="#173560" weight="thin" />
            <a href="tel:07039514066">Call us: +234 7039514066</a>
            </div>
            <div className='logo'>
            <a href="www.facebook.com"><FacebookLogo size={20} color="#173560" weight="fill" /></a>
            <a href="www.twitter.com"><TwitterLogo size={20} color="#173560" weight="fill" /></a>
            <a href="www.linkedin.com"><LinkedinLogo size={20} color="#173560" weight="fill" /></a>
            <a href="www.instagram.com"><InstagramLogo size={20} color="#173560" weight="fill" /></a>
            </div>
            <div className='select'>
            <select name="select" id="select-box">
                <option value="Choice 1">English</option>
                <option value="Choice 2">Hausa</option>
                <option value="Choice 3">French</option>
            </select>
            <span>Open hour: 24hrs</span>
            </div>
        </div>
       </div>
       <div className='my-nav2'>
        <div className="second-bar">
            <div className='mails'>
            <Envelope size={20} color="#173560" weight="fill" />
            <a href="mailto:chrixantoz@gmail.com">chrixantoz@gmail.com</a>
            </div>
            <div className='second-nav-txt'>
                <h2>XANTOZ FASHION CLINIC</h2>
            </div>
            <div className='cart'>
            <ShoppingCart size={20} color="#173560" weight="fill" />
            <button>Order Now</button>
            </div>
        </div>
       </div>
       <div className='my-nav3'>
        <div className='third-bar'>
            <div className='lists'>
                <ul>
                    <a href='#'><li>Home</li></a> 
                    <a href='#about'><li>About</li></a>                  
                    <a href='#product'><li>Product</li></a>
                    <a href='#news'><li>Updates</li></a>
                    <a href='#contact'><li>Say Hi</li></a>                
                </ul>
            </div>
            <div className='glass'>
                <input type="text" className='input' placeholder='Search'/>
                <MagnifyingGlass size={20} color="#babdbe" weight="bold" />
            </div>
        </div>
       <div className='nav-ham'>
        <Hamburger/>
       </div>
       </div>
        
    </div>
    
  )
}

export default NavBar