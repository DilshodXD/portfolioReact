import React from "react";
import "./../component.css";
import "./../media.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "./../img/XD.png";

import Call from "./../img/calls.png";
import Telegram from "./../img/telegram.png";
import Instagram from "./../img/instagram.png";
import Linkedin from "./../img/linkedin.png";
import Email from "./../img/mail.png";

const fullSize = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <h3 className="footer__title">Aloqa</h3>
          <div className="footer__inner">
            <div className="footer__links">
              <Link to="/" className="footer__text">
                Home
              </Link>
              <Link to="/about" className="footer__text">
                About me
              </Link>
              <Link to="/portfolio" className="footer__text">
                Portfolio
              </Link>
              <Link to="/contact" className="footer__text">
                Contact
              </Link>
            </div>
            <div className="footer__contact">
              <p className="footer__text-immutable">Contact:</p>
              <p className="footer__text-immutable">
                Email:{" "}
                <a href="mailto:dilshodxdxd@gmail.com" className="footer__text">
                  dilshodxdxd@gmail.com
                </a>
              </p>
              <p className="footer__text-immutable">
                Inst:{" "}
                <a href="#header" className="footer__text">
                  XD Dilshod
                </a>
              </p>
              <p className="footer__text-immutable">
                Call:{" "}
                <a href="tel:+998950186355" className="footer__text">
                  +998 (95) - 018 - 63 -55
                </a>{" "}
              </p>
            </div>
            <div className="footer__contant">
              <Link to="/" className="logo">
                <img src={Logo} alt=""></img>
                <p>XD Dilshod</p>
              </Link>
            </div>
          </div>
          <div className="footer__info">
            <a href="tel:+998950186355" className="info__logo">
              <img className="logo-img" src={Call} alt="" />
              <p className="logo-title">Call</p>
            </a>
            <a href="https://t.me/DilshodXD" className="info__logo">
              <img className="logo-img" src={Telegram} alt="" />
              <p className="logo-title">Telegram</p>
            </a>
            <a
              href="https://www.instagram.com/dilshod__xojimuhammedov/"
              className="info__logo"
            >
              <img className="logo-img" src={Instagram} alt="" />
              <p className="logo-title">Instagram</p>
            </a>
            <a
              href="https://www.linkedin.com/in/dilshod-xojimuhammedov-843b00250/"
              className="info__logo"
            >
              <img className="logo-img" src={Linkedin} alt="" />
              <p className="logo-title">Linkedin</p>
            </a>
            <a href="mailto:dilshodxdxd@gmail.com" className="info__logo">
              <img className="logo-img" src={Email} alt="" />
              <p className="logo-title">Email</p>
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </footer>
  )
}
const smallSize = () => {
  return (
    <div className='small-footer'>
      <div className="container">
        <div className="footer__info">
          <a
            href="tel:+998950186355"
            className="info__logo">
            <img className="logo-img" src={Call} alt="" />
            <p className="logo-title">Call</p>
          </a>
          <a
            href="https://t.me/DilshodXD"
            className="info__logo">
            <img className="logo-img" src={Telegram} alt="" />
            <p className="logo-title">Telegram</p>
          </a>
          <a
            href="https://www.instagram.com/dilshod__xojimuhammedov/"
            className="info__logo"
          >
            <img className="logo-img" src={Instagram} alt="" />
            <p className="logo-title">Instagram</p>
          </a>
          <a
            href="https://www.linkedin.com/in/dilshod-xojimuhammedov-843b00250/"
            className="info__logo"
          >
            <img className="logo-img" src={Linkedin} alt="" />
            <p className="logo-title">Linkedin</p>
          </a>
          <a
            href="mailto:dilshodxdxd@gmail.com"
            className="info__logo">
            <img className="logo-img" src={Email} alt="" />
            <p className="logo-title">Email</p>
          </a>
        </div>
      </div>
    </div>
  )
}

const returner = () => {
  if (window.outerWidth <= 425) {
    return smallSize()
  }
  return fullSize()
}

function Home() {
  return returner()
}

export default Home;
