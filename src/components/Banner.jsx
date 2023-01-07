/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img  ">
            <img src="/jora.png" alt="" className="w-[220px] lg:w-[220px]"/>
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Jorayev Jorabek</h6>
            <h3>Frontend Developer</h3>
            <p>
              19 y.o Frontend Developerfrom Uzbekistan Tashkent
              Sergeli. Welcome to my personal website
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
