import React, { useState } from 'react';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
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
  {
    title: 'Generate-a-Date',
    description: 'Generator for date ideas using APIs',
    url: 'https://github.com/MasonMarc/Generate-a-Date',
    photoUrl: '"assets/GenDateSH.png"',

  },
  {
    title: 'Weather Dashboard',
    description: 'Weather Dashboard using 5-day weather forecast API',
    url: 'https://github.com/MasonMarc/Weather-Dashboard',
    photoUrl: '"assets/WeatherSH.png"',

  },
  {
    title: 'Ecommerce Backend',
    description: 'Back end for E-commerce using Sequelize with MySQL.',
    url: 'https://github.com/MasonMarc/Ecommerce-Backend',
    photoUrl: '"assets/Ecomm.gif"',

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
    if (currentPage === 'Resume') {
      return <Resume />;
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
          <Projects title={projects[3].title}
            description={projects[3].description}
            url={projects[3].url}
            photoUrl={projects[3].photoUrl} />
          <Projects title={projects[4].title}
            description={projects[4].description}
            url={projects[4].url}
            photoUrl={projects[4].photoUrl} />
          <Projects title={projects[5].title}
            description={projects[5].description}
            url={projects[5].url}
            photoUrl={projects[5].photoUrl} />
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
