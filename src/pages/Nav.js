import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Logo from './img/XD.png'
import './component.css'
import './media.css'

function Home() {
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="header__top-inner">
                        <Link to="/" className="logo">
                            <img src={Logo} alt=""></img>
                            <p>XD Dilshod</p>
                        </Link>
                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <Link className="nav__link" to="/">Bosh sahifa</Link>
                                </li>
                                <li className="nav__item">
                                    <Link className="nav__link" to="/about">Men haqimda</Link>
                                </li>
                                <li className="nav__item">
                                    <Link className="nav__link" to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav__item">
                                    <Link className="nav__link" to="/contact">Aloqa</Link>
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