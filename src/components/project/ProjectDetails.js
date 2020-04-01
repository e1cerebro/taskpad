import React, { Fragment } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
const ProjectDetails = props => {
  const id = props.match.params.id;

  const { project } = props;

  console.log(project);

  if (project) {
    return (
      <div className='container section project-details'>
        <div className='card z-depth-0 white accent-3'>
          <div className='card-content grey-text text-darken-3'>
            <span className='card-title'>{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>
              Posted by {`${project.authorLastName} ${project.authorFirstName}`}
            </div>
            <div>Poste on March 23rd, 2020</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
