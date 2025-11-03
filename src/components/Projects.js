import React from 'react';

const projects = [
  {
    name: "Personal Portfolio",
    description: "This portfolio. Built with React and deployed on GitHub Pages.",
    url: "https://imrohittiwari.github.io/portfolio-website"
  },
  {
    name: "Weather App",
    description: "A React weather app fetching live data from OpenWeatherMap.",
    url: "https://github.com/imrohittiwari/weather-app"
  },
  {
    name: "Blog Platform",
    description: "A simple MERN stack blog platform with authentication.",
    url: "https://github.com/imrohittiwari/mern-blog"
  }
];

const Projects = () => (
  <section id="projects" className="section projects">
    <h2>Projects</h2>
    <ul>
      {projects.map((p, i) => (
        <li key={i}>
          <h3>
            <a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>
          </h3>
          <p>{p.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;