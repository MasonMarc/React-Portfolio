import React from 'react';

export default function Project(props) {

  return (
      <div className="col" id='projectDiv'>
        <a href={props.url} target="_blank" rel="noreferrer" >
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${props.photoUrl})`}} >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" >
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" style={{backgroundColor: 'lightgreen'}}>{props.title}</h3>
            <p className='projdesc' style={{backgroundColor: 'grey'}}>{props.description}</p>
          </div>
        </div>
        </a>
      </div>
  );
}
