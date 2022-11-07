import React from 'react';
import './component.css'
import './media.css'
import CarouselInfo from './carouselInfo.json'

function Home() {

    return (
        <div className='portfolio'>
            <div className='container'>
                <h3 className='portfolio__title'>Portfolio</h3>
                <div className="portfolio__inner">
                    {CarouselInfo.map(post => {
                        return (
                            <div key={post.id} className="portfolio-box">
                                <a href={post.link}>
                                    <img className='portfolio-img' src={post.img} alt="" />
                                </a>
                                <h3 className='portfolio-title'>{post.title}</h3>
                                <p className="portfolio-text">{post.text}</p>
                                <a href={post.link} className="portfolio-link">Ko'rish uchun bosing</a>
                                <a href={post.github} className="portfolio-link">Github code</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;