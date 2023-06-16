import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>

    {/* Project 1 */}
    <div>
      <h3>Project 1</h3>
      <img src="project1.jpg" alt="Project 1" />
      <p>Description of Project 1</p>
      <a href="#">View Project</a>
    </div>

    {/* Project 2 */}
    <div>
      <h3>Project 2</h3>
      <img src="project2.jpg" alt="Project 2" />
      <p>Description of Project 2</p>
      <a href="#">View Project</a>
    </div>

    {/* Project 3 */}
    <div>
      <h3>Project 3</h3>
      <img src="project3.jpg" alt="Project 3" />
      <p>Description of Project 3</p>
      <a href="#">View Project</a>
    </div>
  </section>
);

export default Projects;
