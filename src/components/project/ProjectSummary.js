import React from "react";

const ProjectSummary = ({ title, content }) => {
  return (
    <div className='card z-depth-0 white accent-3'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title grey-text'>{title}</span>
        <p>{content}</p>
        <p>Posted by the Net Ninja</p>
        <p className='grey-text'>3rd Match, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
