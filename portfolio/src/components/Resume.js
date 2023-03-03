import React from 'react';

export default function Resume() {

  return (
    <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold">Resume:</h1>
    <img className="d-block mx-auto mb-4" src="assets/MasonResume.jpg" alt="Resume" width="800"></img>
    <div className="col-lg-6 mx-auto">
      <a className="lead mb-4" href='assets/BootCampResume.pdf'>Click here to download resume.</a>
    </div>
  </div>
  );
}
