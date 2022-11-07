import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./component.css";
import "./media.css";
import top from "./img/gl-top.png";
import bottom from "./img/gl-bottom.png";

function Home() {
  return (
    <>
      <div class="header__bottom">
        <div class="container">
          <div class="header__bottom-inner">
            <div class="header__bottom-left">
              <h1 class="header__bottom-title">Salom</h1>
              <p class="header__bottom-subtittle">Men Dilshod Xojimuhammedov</p>
              <p class="header__bottom-text">
                Men web dasturchilik kursida o'qidim va dasturlashning Front-end
                yo'nalishi bo'yicha bilimlarga ega bo'ldim. Bu yo'nalishni
                yanada chuqurroq o'rganish uchun o'z ustimda ishlab kelmoqdaman.
              </p>
              <Link to="contact" class="header__bottom-contact">
                Men bilan bog'lanish
              </Link>
              <a
                href="https://github.com/DilshodXD"
                class="header__bottom-contact"
              >
                Git hub akaunt
              </a>
            </div>
            <div class="header__bottom-right">
              <div class="header__bottom-round">
                <div class="round__img">
                  <img class="round__img-top" src={top} alt=""></img>
                  <img class="round__img-bottom" src={bottom} alt=""></img>
                </div>
                <div class="round round2">css</div>
                <div class="round round3">js</div>
                <div class="round round4">html</div>
                <div class="round round5">React</div>
                <div class="round round6">git</div>
                <div class="round round7">sass</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
