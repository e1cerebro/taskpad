import React from "react";

const ProjectSummary = props => {
  const { title, content, createdAt } = props.project;
  return (
    <div className='card z-depth-2 white accent-3'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title grey-text'>{title}</span>
        <p>{content}</p>
        <p>Posted by the Net Ninja</p>
        <p className='grey-text'>{}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
