import React from 'react';

export default function Contact() {

  return (
    <div class="container">
    <main class="form-signin w-100 m-auto">
  <form>
    <h1 class="h3 mb-3 fw-normal">Contact Me:</h1>

    <div class="form-floating">
      <input type="name" class="form-control" id="floatingInput" placeholder="Name"></input>
      <label for="floatingInput">Name</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <textarea name="message" class="form-control" id="message" placeholder="message"></textarea>
      <label for="message">Type your message here</label>
    </div>
    
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
  </form>
</main>
</div>
  );
}
