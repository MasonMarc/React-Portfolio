import React from 'react';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';


const projects = [
  {
  title: 'Project 1',
  description: 'amazing project',
  },
  {
    title: 'Project 2',
    description: 'this is great',
  },
  {
    title: 'Project 3',
    description: 'fantastic work',
  },
];

export default function Display() {
  return (
<div>
  
<div>
  <Nav/>
</div>


<div class="container px-4 py-5" id="custom-cards">
<div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
  <Projects title={projects[0].title} description={projects[0].description}/>
  <Projects title={projects[1].title} description={projects[1].description}/>
  <Projects title={projects[2].title} description={projects[2].description}/>
  </div>
  </div>


<div>
  <Contact/>
</div>

<div>
  <Footer/>
</div>

</div>

  );
}
