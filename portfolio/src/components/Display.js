import React from 'react';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';


const projects = [
  {
  title: 'Express Urgent Care',
  description: 'Urgent care website with calendar',
  url: 'https://github.com/MasonMarc/Urgent-Care-Appointment-Scheduler',
  },
  {
    title: 'Album Review Generator',
    description: 'Review generator using node and lasf.fm api',
      url: 'https://github.com/MasonMarc/Album-Review-Gen',

  },
  {
    title: 'Note Taker',
    description: 'Note taking app made using node.js and express',
      url: 'https://github.com/MasonMarc/Note-Taker',

  },
];

export default function Display() {
  return (
<div>
  
<div>
  <Nav/>
</div>

<div>
  <About/>
</div>


<div class="container px-4 py-5" id="custom-cards">
<div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
  <Projects title={projects[0].title} description={projects[0].description} url={projects[0].url}/>
  <Projects title={projects[1].title} description={projects[1].description} url={projects[1].url}/>
  <Projects title={projects[2].title} description={projects[2].description} url={projects[2].url}/>
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
