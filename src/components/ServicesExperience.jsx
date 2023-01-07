import React, { useState } from "react";
import {RiReactjsLine} from 'react-icons/ri'
function ServicesExperience() {
  const [services] = useState([
    {
      icon: "RiReactjsLine",
      title: "React Js",
      desc: "I love making websites.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Vue Js",
      desc: "I love making websites.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Javascript",
      desc: "I love making websites.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
               <RiReactjsLine className="m-[10px]" />
              {/* <i className={`ri ${service.icon}`} /> */}
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1</h3>
            <p>month Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>0</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>1</h4>
              <p>month Experience</p>
            </div>
            <div className="portfolio">
              <h4>6</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>1</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
