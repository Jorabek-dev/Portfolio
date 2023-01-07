/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/projects/Jorabek1.png",
      gLink: "https://github.com/Jorabek-dev/my-dashboard-app",
      lLink: "https://app-intagram.vercel.app/login",
    },
    {
      title: "Project 2",
      img: "/projects/Jorabek2.png",
      gLink: "https://github.com/Jorabek-dev/My-Moldives-Web",
      lLink: "https://my-moldives-web.vercel.app/",
    },
    {
      title: "Project 3",
      img: "/projects/Jorabek3.png",
      gLink: "https://github.com/Jorabek-dev/Movies-App",
      lLink: "https://movies-app-lovat.vercel.app/",
    },
    {
      title: "Project 4",
      img: "/projects/Jorabek4.png",
      gLink: "https://github.com/Jorabek-dev/Merin-Stack-Javascript",
      lLink: "https://merin-stack-javascript.vercel.app/",
    },
    {
      title: "Project 5",
      img: "/projects/Jorabek5.png",
      gLink: "https://github.com/Jorabek-dev/-Real-Estate-Websit",
      lLink: "https://real-estate-websit.vercel.app/",
    },
    {
      title: "Project 6",
      img: "/projects/Jorabek6.png",
      gLink: "https://github.com/Jorabek-dev/Gym-Website",
      lLink: "https://gym-website-mu-five.vercel.app/",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Jorabek-dev"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                I worked a lot on these projects because they are very
                interesting and fun to make.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
