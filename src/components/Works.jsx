import React from 'react';
import '../styles/Works.css';
import BudgetAppImage from '../images/Budget app.png';
import Bookstore from '../images/Bookstore.png';

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
        <p className="desc">A mobile web app for budget management, enabling users to track their expenses
          by categorizing transactions, providing insights into their spending habits. </p>
        <p className="lang">Languages used: Ruby on Rails, CSS</p>
        <button className="view-project">
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
        <p>This is a website that allow users to add and remove books, it also provides books
           management where users are able to track the progress of the reading of the book and 
           perform status update based on their progress. This website also always grouping of 
           books according to their categories.</p>
        <p>Languages used: React, CSS</p>
        <button className="view-project">
          <a href="https://bookstore-cnbs.onrender.com/">View Project</a>
        </button>
      </div>
    </div>

    <div className="project1">
      <div className="project-image">
        <a href="project3_link_here">
          <img src="project3.jpg" alt="Project 3" />
        </a>
      </div>
      <div className="project-details">
        <h3>Project 3</h3>
        <p>Description of Project 3</p>
        <p>Languages used: HTML, CSS, JavaScript, Node.js</p>
        <button className="view-project">
          <a href="project3_link_here">View Project</a>
        </button>
      </div>
    </div>
    
    <div className="project2">
      <div className="project-image">
        <a href="project2_link_here">
          <img src="project2.jpg" alt="Project 2" />
        </a>
      </div>
      <div className="project-details">
        <h3>Project 4</h3>
        <p>Description of Project 2</p>
        <p>Languages used: HTML, CSS, React</p>
        <button className="view-project">
          <a href="project2_link_here">View Project</a>
        </button>
      </div>
    </div>

    <div className="project1">
      <div className="project-image">
        <a href="project2_link_here">
          <img src="project2.jpg" alt="Project 2" />
        </a>
      </div>
      <div className="project-details">
        <h3>Project 5</h3>
        <p>Description of Project 2</p>
        <p>Languages used: HTML, CSS, React</p>
        <button className="view-project">
          <a href="project2_link_here">View Project</a>
        </button>
      </div>
    </div>
  </section>
);

export default Works;
