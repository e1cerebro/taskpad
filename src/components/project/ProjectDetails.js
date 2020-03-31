import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0 white accent-3'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>Card Title - {id}</span>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Christian</div>
          <div>Poste on March 23rd, 2020</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
