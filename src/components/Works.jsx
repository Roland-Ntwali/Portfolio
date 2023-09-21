import React from 'react';
import '../styles/Works.css';
import BudgetAppImage from '../images/Budget app.png';
import Bookstore from '../images/Bookstore.png';
import Event from '../images/event.png';
import MetricsApp from '../images/metrics.png';

const Works = () => (
  <section className="projects">

    <div className="project1">
      <div className="project-image">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Roland-Ntwali/Budget-app">
          <img src={BudgetAppImage} alt="Budget-app" />
        </a>
      </div>
      <div className="project-details">
        <h3>Budget App</h3>
        <p className="desc">
          A mobile web app for budget management, enabling users to track their expenses
          by categorizing transactions, providing insights into their spending habits.
          {' '}
        </p>
        <p className="lang">Languages used: Ruby on Rails, CSS</p>
        <div className="buttons">
          <button type="button" className="view-project">
            <a target="_blank" rel="noopener noreferrer" href="https://budget-app-g6n2.onrender.com">Preview</a>
          </button>
          <button type="button" className="view-project">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Roland-Ntwali/Budget-app">See code</a>
          </button>
        </div>
      </div>
    </div>

    <div className="project2">
      <div className="project-image">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Roland-Ntwali/Bookstore">
          <img src={Bookstore} alt="Project 2" />
        </a>
      </div>
      <div className="project-details">
        <h3>Bookstore</h3>
        <p>
          This is a website that allow users to add and remove books, it also provides books
          management where users are able to track the progress of the reading of the book and
          perform status update based on their progress. This website also always grouping of
          books according to their categories.
        </p>
        <p>Languages used: React, CSS</p>
        <div className="buttons">
          <button type="button" className="view-project">
            <a target="_blank" rel="noopener noreferrer" href="https://bookstore-cnbs.onrender.com/">Preview</a>
          </button>
          <button type="button" className="view-project">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Roland-Ntwali/Bookstore">See code</a>
          </button>
        </div>
      </div>
    </div>

    <div className="project1">
      <div className="project-image">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Roland-Ntwali/Event-website">
          <img src={Event} alt="Project 2" />
        </a>
      </div>
      <div className="project-details">
        <h3>Event website</h3>
        <p>
          EventHub is a dynamic platform designed to seamlessly connect event organizers
          and attendees in a vibrant community of knowledge-sharing and inspiration.
          With a focus on meticulously curated events and distinguished featured speakers,
          EventHub aims to revolutionize the way people discover
          and participate in meaningful gatherings.
        </p>
        <p>Languages used: Javascript and CSS</p>
        <div className="buttons">
          <button type="button" className="view-project">
            <a target="_blank" rel="noopener noreferrer" href="https://roland-ntwali.github.io/Event-website/">Preview</a>
          </button>
          <button type="button" className="view-project">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Roland-Ntwali/Event-website">See code</a>
          </button>
        </div>
      </div>
    </div>

    <div className="project2">
      <div className="project-image">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Roland-Ntwali/Metrics-webapp">
          <img src={MetricsApp} alt="Project 2" />
        </a>
      </div>
      <div className="project-details">
        <h3>Metrics App</h3>
        <p>
          This is a react project that renders the COVID-19 updates from different
          countries of the world, it displays the number of cases present per day,
          tests collected, deaths cases, and much more information, and all those
          information is obtained from the API and displayed on the UI.
          {' '}
        </p>
        <p>Languages used: React, CSS</p>
        <div className="buttons">
          <button type="button" className="view-project">
            <a target="_blank" rel="noopener noreferrer" href="https://metrics-webapp-iwdl.onrender.com/">Preview</a>
          </button>
          <button type="button" className="view-project">
            <a target="_blank" rel="noopener noreferrer" href="https://preeminent-treacle-2e03fb.netlify.app/">See code</a>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Works;
