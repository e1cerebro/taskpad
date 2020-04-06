import React, { Fragment } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";
import moment from "moment";
import { removeProject } from "../../store/actions/projectActions";
const ProjectDetails = (props) => {
  const id = props.match.params.id;
  const { auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />;

  if (props.project) {
    const {
      title,
      content,
      createdAt,
      authorLastName,
      authorFirstName,
      id,
    } = props.project;

    const handleRemoveProject = () => {
      console.log(id);
      props.removeProject(id);
      props.history.push("/");
    };

    return (
      <div className='container section project-details'>
        <div className='card z-depth-0 white accent-3'>
          <div className='card-content grey-text text-darken-3'>
            <span className='card-title'>{title}</span>
            <p>{content}</p>
          </div>
          <div className='card-action grey lighten-4 grey-text'>
            <div>Posted by {`${authorLastName} ${authorFirstName}`}</div>
            <div>{moment(createdAt.toDate()).calendar()}</div>
          </div>
          <div className='card-action'>
            <span>
              <Link
                to={`/project/edit/${id}`}
                className='waves-effect blue btn-small'>
                Edit Task
              </Link>
            </span>
            &nbsp;
            <span>
              <button
                onClick={() => handleRemoveProject()}
                className='waves-effect red btn-small'>
                Remove Task
              </button>
            </span>
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
  const project = projects ? { ...projects[id], id: id } : null;

  return {
    project: project,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeProject: (id) => {
      dispatch(removeProject(id));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
