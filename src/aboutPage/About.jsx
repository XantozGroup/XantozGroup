import React from 'react'
import './About.css'
import Clip from '../assets/clip.webp'
import Boss from '../assets/boss.png'

function About() {
  return (
    <div id='about'>
        <div className='about-body'>
            <div className='about-bg'>
                <div className='about-comp'>
                 <h1>About Us</h1>
                 <div className='clip1'>
                   <img src={Clip} alt="clip-art" />
                </div>
                 <p>Our mission is what drives us to do everything possible to expand human potentials. We do that by creating groundbreaking and outstanding fashion innovations, by making our products more sustainable and accessible, by building creative and diverse team for the benefit of our communities at work and where we live. We extend and communicate western designs and our African cultural abilities globally through fashion.</p>
                </div>
                <div className='clip'>
                   <img src={Clip} alt="clip-art" />
                </div>
            </div>
            <div className='about-ceo'>
                <div className='meet-ceo'>
                <h1>Meet the CEO</h1>
                <div className='boss1'>
                <img src={Boss} alt="boss" />
                </div>
                <p>Xantoz Fashion Clinic was founded by <span>Engr. Christopher Idoko A.</span> and is aimed at bringing diverse team with fashionable ideas together to protect and contribute devotedly to the world of fashion. <span>Engr. Chris</span> is a fashion designer with striking thoughts of making out of the world ideas to reality in no time! He's into real estate and also doing very well with structural designs playing out his potentials.</p>
                </div>
                <div className='boss'>
                <img src={Boss} alt="boss" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About