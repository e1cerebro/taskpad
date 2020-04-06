import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <Fragment key={project.title}>
          <Link to={`/project/${project.id}`}>
            <ProjectSummary project={project} />
          </Link>
        </Fragment>
      );
    });
  };

  if (projects.length > 0) {
    return <div className='project-list section'>{renderProjects()}</div>;
  }

  return (
    <Fragment>
      {" "}
      <div className='section notification-zero'>
        <div className='card z-depth-0 '>
          <div className='card-content'>No Tasks Created...</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectList;
