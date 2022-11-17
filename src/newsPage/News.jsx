import React from 'react'
import './News.css'
import agbada from '../assets/agbada.jpg'
import ashSuit from '../assets/ash-suit.jpg'
import blueSuit from '../assets/blue-suit.jpg'

function News() {
  return (
    <div className='news-body'>
        <div className='gen-news'>
            <h1>Latest News</h1>
            <div className='flex-news'>
              <div>
                <img src={agbada} alt="agbada" />
              </div>
              <div className='text-news'>
                <h3>News Trend</h3>
                <div className='news-p'>
                  <p>17th Nov 2022</p>
                  <p>Like & Comment</p>
                </div>
                <p className='news-tell'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, modi omnis quibusdam quam perferendis ut corporis? Consectetur laboriosam placeat, maxime praesentium nulla atque sint, totam dolorum est ducimus repellendus. Dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magnam eius voluptatum nostrum, cupiditate dolorum aperiam, qui doloremque distinctio quae exercitationem ea ab totam, officiis impedit amet voluptatem? Consequatur, maiores?
                </p>
              </div>
            </div>
            <div className='flex-news'>
              <div>
                <img src={ashSuit} alt="ashSuit" />
              </div>
              <div className='text-news'>
                <h3>News Trend</h3>
                <div className='news-p'>
                  <p>17th Nov 2022</p>
                  <p>Like & Comment</p>
                </div>
                <p className='news-tell'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, modi omnis quibusdam quam perferendis ut corporis? Consectetur laboriosam placeat, maxime praesentium nulla atque sint, totam dolorum est ducimus repellendus. Dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magnam eius voluptatum nostrum, cupiditate dolorum aperiam, qui doloremque distinctio quae exercitationem ea ab totam, officiis impedit amet voluptatem? Consequatur, maiores?
                </p>
              </div>
            </div>
            <div className='flex-news'>
              <div>
                <img src={blueSuit} alt="" />
              </div>
              
              <div className='text-news'>
                <h3>News Trend</h3>
                <div className='news-p'>
                  <p>17th Nov 2022</p>
                  <p>Like & Comment</p>
                </div>
                <p className='news-tell'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, modi omnis quibusdam quam perferendis ut corporis? Consectetur laboriosam placeat, maxime praesentium nulla atque sint, totam dolorum est ducimus repellendus. Dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In magnam eius voluptatum nostrum, cupiditate dolorum aperiam, qui doloremque distinctio quae exercitationem ea ab totam, officiis impedit amet voluptatem? Consequatur, maiores?
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default News