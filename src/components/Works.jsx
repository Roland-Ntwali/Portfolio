import React from 'react';
import '../styles/Works.css';
import BudgetAppImage from '../images/Budget app.png';
import Bookstore from '../images/Bookstore.png';
import BlogApp from '../images/Blog app.png';
import LibraryApp from '../images/School.png';
import MetricsApp from '../images/metrics.png';

const Works = () => (
  <section className="projects">

    <div className="project1">
      <div className="project-image">
        <a href="https://github.com/Roland-Ntwali/Budget-app">
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
        <button type="button" className="view-project">
          <a href="https://budget-app-g6n2.onrender.com">View Project</a>
        </button>
      </div>
    </div>

    <div className="project2">
      <div className="project-image">
        <a href="https://github.com/Roland-Ntwali/Bookstore">
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
        <button type="button" className="view-project">
          <a href="https://bookstore-cnbs.onrender.com/">View Project</a>
        </button>
      </div>
    </div>

    <div className="project1">
      <div className="project-image">
        <a href="https://github.com/Roland-Ntwali/Blog-App">
          <img src={BlogApp} alt="Project 3" />
        </a>
      </div>
      <div className="project-details">
        <h3>Blog App</h3>
        <p>
          A blog platform featuring post listings and enabling
          visitors to comment on or engage with posts through likes.
          {' '}
        </p>
        <p>Languages used: Ruby on Rails</p>
        <button type="button" className="view-project">
          <a href="https://github.com/Roland-Ntwali/Blog-App">View Project</a>
        </button>
      </div>
    </div>

    <div className="project2">
      <div className="project-image">
        <a href="https://github.com/Roland-Ntwali/School-library-app">
          <img src={LibraryApp} alt="Project 2" />
        </a>
      </div>
      <div className="project-details">
        <h3>School library app</h3>
        <p>
          The Book Rental Management System is a user-friendly Ruby
          application designed to streamline the process of managing
          a book rental service. This app allows users to effortlessly
          add new books, view a comprehensive list of available books
          and users, create rentals, and track rental history for specific individuals.
        </p>
        <p>Languages used: Ruby</p>
        <button type="button" className="view-project">
          <a href="https://github.com/Roland-Ntwali/School-library-app">View Project</a>
        </button>
      </div>
    </div>

    <div className="project1">
      <div className="project-image">
        <a href="https://github.com/Roland-Ntwali/Metrics-webapp">
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
        <button type="button" className="view-project">
          <a href="https://metrics-webapp-iwdl.onrender.com/">View Project</a>
        </button>
      </div>
    </div>
  </section>
);

export default Works;
