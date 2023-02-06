import React from 'react';

export default function Project(props) {


  return (
      <div class="col">
        <a href={props.url} target="_blank">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.title}</h3>
            <p>{props.description}</p>
          </div>
        </div>
        </a>
      </div>
  );
}
