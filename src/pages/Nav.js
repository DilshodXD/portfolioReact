import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Logo from './img/XD.png'
import './component.css'
import './media.css'

const logo = () => {
    if (window.outerWidth > 425) {
        return (
            <Link to="/" className="logo">
                <img src={Logo} alt=""></img>
                <p>XD Dilshod</p>
            </Link>
        )
    }
}

function Home() {
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="header__top-inner">
                        {logo()}
                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <Link className="nav__link" to="/">Home</Link>
                                </li>
                                <li className="nav__item">
                                    <Link className="nav__link" to="/about">About me</Link>
                                </li>
                                <li className="nav__item">
                                    <Link className="nav__link" to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav__item">
                                    <Link className="nav__link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Home;