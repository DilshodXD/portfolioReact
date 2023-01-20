import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./../component.css";
import "./../media.css";
import About1 from "./../img/about1.jpg";
import About2 from "./../img/about2.jpg";
import About3 from "./../img/about3.jpg";

const middle = () => {
  return (
    <div className="about__content-middle">
      <div className="about__content-text">
        <h2 className="about__content-title">About me</h2>
        <p className="about__content-subtitle">
          Hello everyone once again! You know my name is Dilshad. Brief information about me: I'm 18 years old, I'm a student at TSTU, I'm interested in Workout and I'm doing it. If you ask me why I learned programming, it is the profession of the future
          and i like it.
          I live in Tashkent region. Programming is a great profession and fun for me. I studied at the Proweb training center and am still improving my knowledge. My goal in starting work is to test my knowledge in practice, improve my skills and help people using my knowledge. My goal is to gain more knowledge and become a Fullstack and Mobile developer.
        </p>
      </div>
    </div>
  )
}

const full = () => {
  return (
    <>
      <div className="about__content-left">
        <div className="about__content-img">
          <LazyLoadImage effect="blur" src={About1} alt="" className="content__img" />
        </div>
        <div className="about__content-img">
          <LazyLoadImage effect="blur" src={About2} alt="" className="content__img" />
        </div>
      </div>
      {middle()}
      <div className="about__content-right">
        <div className="about__content-img">
          <LazyLoadImage effect="blur" src={About3} alt="" className="content__img" />
        </div>
      </div>
    </>
  )
}

const returner = () => {
  if (window.outerWidth <= 425) {
    return middle()
  }
  return full()
}

function Home() {
  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <div className="about__inner">
            <div className="about__content">
              {returner()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
