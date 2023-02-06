import React from 'react';
import Card from './Card';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};

const projects = {
  title: 'Project 1',
  description: 'amazing project',
  id: 1,
};

export default function Display() {
  return (
<div>
  
<div>
  <Nav/>
</div>


<div class="container px-4 py-5" id="custom-cards">
<div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
  <Projects title={projects.title} description={projects.description}/>
  </div>
  </div>


<div>
  <Contact/>
</div>

</div>

  );
}
