import React, { useState } from 'react';
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
    photoUrl: '"assets/CalendarScreenshot.png"',
  },
  {
    title: 'Album Review Generator',
    description: 'Review generator using node and lasf.fm api',
    url: 'https://github.com/MasonMarc/Album-Review-Gen',
    photoUrl: '"assets/AlbumReviewSH.png"',

  },
  {
    title: 'Note Taker',
    description: 'Note taking app made using node.js and express',
    url: 'https://github.com/MasonMarc/Note-Taker',
    photoUrl: '"assets/notetakeSH.png"',

  },
];

export default function Display() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <div class="container px-4 py-5" id="custom-cards">
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <Projects title={projects[0].title}
            description={projects[0].description}
            url={projects[0].url}
            photoUrl={projects[0].photoUrl} />
          <Projects title={projects[1].title}
            description={projects[1].description}
            url={projects[1].url}
            photoUrl={projects[1].photoUrl} />
          <Projects title={projects[2].title}
            description={projects[2].description}
            url={projects[2].url}
            photoUrl={projects[2].photoUrl} />
        </div>
      </div>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <div>
        <Footer />
      </div>
    </div>
  );
}
