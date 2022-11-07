import React from 'react';
import './component.css'
import './media.css'
import { Outlet, Link } from "react-router-dom";
import Logo from "./img/XD.png"

import Call  from './img/calls.png'
import Telegram from './img/telegram.png'
import Instagram from './img/instagram.png'
import Linkedin from './img/linkedin.png'
import Email from './img/mail.png'

function Home() {
    return (
        <footer>
            <div class="footer">
                <div class="container">
                    <h3 className='footer__title'>Aloqa</h3>
                    <div class="footer__inner">
                        <div class="footer__links">
                            <Link to="/" class="footer__text">Bosh sahifa</Link>
                            <Link to="/about" class="footer__text">Men haqimda</Link>
                            <Link to="/portfolio" class="footer__text">Portfolio</Link>
                            <Link to="/contact" class="footer__text">Aloqa</Link>
                        </div>
                        <div class="footer__contact">
                            <p class="footer__text-immutable">Contact:</p>
                            <p class="footer__text-immutable">Email: <a href="mailto:dilshodxdxd@gmail.com"
                                class="footer__text">dilshodxdxd@gmail.com</a></p>
                            <p class="footer__text-immutable">Inst: <a href="#header" class="footer__text">XD Dilshod</a>
                            </p>
                            <p class="footer__text-immutable">Raqam: <a href="tel:+998950186355" class="footer__text">+998
                                (95) - 018 - 63 -55</a> </p>
                        </div>
                        <div class="footer__contant">
                            <Link to="/" class="logo">
                                <img src={Logo} alt=""></img>
                                <p>XD Dilshod</p>
                            </Link>
                        </div>
                    </div>
                    <div className="footer__info">
                        <a href="tel:+998950186355" className="info__logo">
                            <img className='logo-img' src={Call} alt="" />
                            <p className="logo-title">Call</p>
                        </a>
                        <a href="https://t.me/DilshodXD" className="info__logo">
                            <img className='logo-img' src={Telegram} alt="" />
                            <p className="logo-title">Telegram</p>
                        </a>
                        <a href="https://www.instagram.com/dilshod__xojimuhammedov/" className="info__logo">
                            <img className='logo-img' src={Instagram} alt="" />
                            <p className="logo-title">Instagram</p>
                        </a>
                        <a href="https://www.linkedin.com/in/dilshod-xojimuhammedov-843b00250/" className="info__logo">
                            <img className='logo-img' src={Linkedin} alt="" />
                            <p className="logo-title">Linkedin</p>
                        </a>
                        <a href="mailto:dilshodxdxd@gmail.com" className="info__logo">
                            <img className='logo-img' src={Email} alt="" />
                            <p className="logo-title">Email</p>
                        </a>
                    </div>
                </div>
            </div>
            <Outlet />
        </footer>
    );
}

export default Home;