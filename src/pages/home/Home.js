import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./../component.css";
import "./../media.css";
import top from "./../img/gl-top.png";
import bottom from "./../img/gl-bottom.png";



const left = () => {
  return (
    <div className="header__bottom-left">
      <h1 className="header__bottom-title">Hello</h1>
      <p className="header__bottom-subtittle">I'm Dilshod Xojimuhammedov</p>
      <p className="header__bottom-text">
      I am a frontend developer and currently expanding my knowledge. In the future, I aim to work even harder to become a strong Engineer.
      </p>
      <Link to="contact" className="header__bottom-contact">
        Contact me
      </Link>
      <a
        href="https://github.com/DilshodXD"
        className="header__bottom-contact"
      >
        Github
      </a>
    </div>
  )
}
const full = () => {
  return (
    <>
      {left()}
      <div className="header__bottom-right">
        <div className="header__bottom-round">
          <div className="round__img">
            <img className="round__img-top" src={top} alt="" />
            <img className="round__img-bottom" src={bottom} alt="" />
          </div>
          <div className="round round2">Sass</div>
          <div className="round round3">next</div>
          <div className="round round4">html</div>
          <div className="round round5">React</div>
          <div className="round round6">Node</div>
          <div className="round round7">Ts</div>
        </div>
      </div>
    </>
  )
}

const retuner = () => {
  if (window.outerWidth <= 425) {
    return left()
  }
  return full()
}

function Home() {
  return (
    <>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">
            {retuner()}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
