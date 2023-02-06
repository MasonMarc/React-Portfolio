import React from 'react';

export default function Footer() {

  return (
    <div class="container" id="contact">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Scroll to Top &#9650;</a></li>
                <li class="nav-item"><a href="https://www.linkedin.com/in/mason-marcantel/"
                        class="nav-link px-2 text-muted" target="_blank">Linkedin <i
                            class="fa-brands fa-linkedin"></i></a> </li>
                <li class="nav-item"><a href="https://github.com/MasonMarc" class="nav-link px-2 text-muted"
                        target="_blank">GitHub <i class="fa-brands fa-github"></i></a></li>
                <li class="nav-item"><a href="mailto:masonmarcantel@gmail.com" class="nav-link px-2 text-muted">Email <i
                            class="fa-solid fa-envelope"></i></a></li>
            </ul>
            <p class="text-center text-muted">Made with &#9829; by Mason Marcantel</p>
        </footer>
    </div>
  );
}
