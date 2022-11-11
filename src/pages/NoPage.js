import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./component.css";
import "./media.css";

function Home() {
  return (
    <>
      <div className="notfound">
        <div className="notfound__inner">
          <div className="notfound__circle">?</div>
          <h1 className="notfound__title">404 NOT FOUND</h1>
          <div className="notfound__link">
            <Link className="notfound__links" to="/">
              Home
            </Link>
            <Link className="notfound__links" to="contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
