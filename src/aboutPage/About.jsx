import React from 'react'
import Clip from '../assets/clip.webp'

function About() {
  return (
    <div>
        <div className='about-body'>
            <div className='about-bg'>
                <div className='about-comp'>
                 <h1>About Us</h1>
                 <p>Our mission is what drives us to do everything possible to expand human potentials. We do that by creating groundbreaking and outstanding fashion innovations, by making our products more sustainable and accessible, by building creative and diverse team for the benefit of our communities at work and where we live. We extend and communicate our African cultural abilities globally through fashion.</p>
                </div>
                <div>
                   <img src={Clip} alt="clip-art" />
                </div>
            </div>
            <div className='about-ceo'>
                <div className='meet-ceo'>

                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About