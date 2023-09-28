import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
          Hi, I'm Dilshod! I'm a frontend developer with experience in the
          React. In 2021, I began learning programming at PROWEB training center
          in Uzbekistan, where I gained a solid foundation in web development. I
          am passionate about using technology to solve real-world problems and
          create innovative solutions. Throughout my learning journey, I have
          developed a strong understanding of front-end development. My
          technical skills include proficiency in JavaScript, React, HTML, CSS,
          and Git. I am a fast learner and am always seeking new challenges to
          improve my skills and knowledge. Aside from coding, I enjoy playing
          chess, reading books, and exploring new technologies. If you're
          interested in working together, please feel free to reach out to me.
        </p>
      </div>
    </div>
  );
};

const full = () => {
  return (
    <>
      <div className="about__content-left">
        <div className="about__content-img">
          <LazyLoadImage
            effect="blur"
            src={About1}
            alt=""
            className="content__img"
          />
        </div>
        <div className="about__content-img">
          <LazyLoadImage
            effect="blur"
            src={About2}
            alt=""
            className="content__img"
          />
        </div>
      </div>
      {middle()}
      <div className="about__content-right">
        <div className="about__content-img">
          <LazyLoadImage
            effect="blur"
            src={About3}
            alt=""
            className="content__img"
          />
        </div>
      </div>
    </>
  );
};

const returner = () => {
  if (window.outerWidth <= 425) {
    return middle();
  }
  return full();
};

function Home() {
  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <div className="about__inner">
            <div className="about__content">{returner()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
