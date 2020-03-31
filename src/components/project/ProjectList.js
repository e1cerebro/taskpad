import React, { Fragment } from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = props => {
  const renderProjects = () => {
    return props.projects.map(project => {
      return (
        <ProjectSummary
          key={project.title}
          title={project.title}
          content={project.content}
        />
      );
    });
  };

  if (props.projects) {
    return <div className='project-list section'>{renderProjects()}</div>;
  }

  return <Fragment></Fragment>;
};

export default ProjectList;
