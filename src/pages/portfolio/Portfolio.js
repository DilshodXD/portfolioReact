import React from "react";
import "./../component.css";
import "./../media.css";
import CarouselInfo from "../carouselInfo.json";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const fullSize = (post) => {
  return (
    <div key={post.id} className="portfolio-box">
      <a href={post.link}>
        <LazyLoadImage effect="blur" className="portfolio-img" src={post.img} alt="" />
      </a>
      <h3 className="portfolio-title">{post.title}</h3>
      <p className="portfolio-text">{post.text}</p>
      <a href={post.link} className="portfolio-link">
        Ko'rish uchun bosing
      </a>
      <a href={post.github} className="portfolio-link">
        Github code
      </a>
    </div>
  );
}

const smallSize = (post) => {
  return (
    <div key={post.id} className="portfolio-box">
      <a href={post.link}>
        <LazyLoadImage effect="blur" className="portfolio-img" src={post.img} alt="" />
      </a>
      <h3 className="portfolio-title">{post.title}</h3>
      <p className="portfolio-text">{post.text}</p>
      <br />
      <dir className="portfolio-link">
        <a href={post.link} className="portfolio-link">
          Demo
        </a>
        <a href={post.github} className="portfolio-link">
          Source
        </a>
      </dir>
    </div>
  );
}

const returner = (post) =>{
  if (window.outerWidth <=425) {
   return smallSize(post)
  }
  return fullSize(post)
}

  function Home() {
    return (
      <div className="portfolio">
        <div className="container">
          <h3 className="portfolio__title">Portfolio</h3>
          <div className="portfolio__inner">
            {CarouselInfo.map((post) => returner(post))}
          </div>
        </div>
      </div>
    );
  }

export default Home;
