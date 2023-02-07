import React from 'react';

export default function Footer() {

  return (
    <div className="container" id="contact">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Scroll to Top &#9650;</a></li>
                <li className="nav-item"><a href="https://www.linkedin.com/in/mason-marcantel/"
                        className="nav-link px-2 text-muted" target="_blank">Linkedin <i
                            className="fa-brands fa-linkedin"></i></a> </li>
                <li className="nav-item"><a href="https://github.com/MasonMarc" className="nav-link px-2 text-muted"
                        target="_blank">GitHub <i className="fa-brands fa-github"></i></a></li>
                <li className="nav-item"><a href="mailto:masonmarcantel@gmail.com" className="nav-link px-2 text-muted">Email <i
                            className="fa-solid fa-envelope"></i></a></li>
            </ul>
            <p className="text-center text-muted">Made with &#9829; by Mason Marcantel</p>
        </footer>
    </div>
  );
}
