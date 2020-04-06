import React from "react";
import moment from "moment";

const ProjectSummary = (props) => {
  const {
    title,
    content,
    createdAt,
    authorLastName,
    authorFirstName,
  } = props.project;
  return (
    <div className='card z-depth-0 white accent-3'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title grey-text'>{title}</span>
        <p>{content}</p>
      </div>
      <div className='card-action grey lighten-4 grey-text'>
        <p>
          <em>
            Posted by {authorLastName} {authorFirstName}
          </em>
        </p>
        <p className='grey-text'>{moment(createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
