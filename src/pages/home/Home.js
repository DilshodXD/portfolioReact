import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./../component.css";
import "./../media.css";
import top from "./../img/gl-top.png";
import bottom from "./../img/gl-bottom.png";



const left = () => {
  return (
    <div className="header__bottom-left">
      <h1 className="header__bottom-title">Salom</h1>
      <p className="header__bottom-subtittle">Men Dilshod Xojimuhammedov</p>
      <p className="header__bottom-text">
        Men web dasturchilik kursida o'qidim va dasturlashning Front-end
        yo'nalishi bo'yicha bilimlarga ega bo'ldim. Bu yo'nalishni
        yanada chuqurroq o'rganish uchun o'z ustimda ishlab kelmoqdaman.
      </p>
      <Link to="contact" className="header__bottom-contact">
        Men bilan bog'lanish
      </Link>
      <a
        href="https://github.com/DilshodXD"
        className="header__bottom-contact"
      >
        Git hub akaunt
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
          <div className="round round2">css</div>
          <div className="round round3">js</div>
          <div className="round round4">html</div>
          <div className="round round5">React</div>
          <div className="round round6">git</div>
          <div className="round round7">sass</div>
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
