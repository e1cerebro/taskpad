import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  const renderProjects = () => {
    return projects.map(project => {
      return (
        <Fragment key={project.title}>
          <Link to={`/project/${project.id}`}>
            <ProjectSummary project={project} />
          </Link>
        </Fragment>
      );
    });
  };

  if (projects) {
    return <div className='project-list section'>{renderProjects()}</div>;
  }

  return <Fragment></Fragment>;
};

export default ProjectList;
