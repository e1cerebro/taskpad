import React, { useState, useEffect, Fragment } from "react";
import { updateProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import history from "../../history";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import _ from "lodash";

const EditProject = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (props.project) {
      setTitle(props.project.title);
      setContent(props.project.content);
    }
  }, [props.project]);

  const { auth, project, docId } = props;
  if (!auth.uid) return <Redirect to='/signin' />;

  const handleInputChange = (e) => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "content":
        setContent(e.target.value);
        break;
      default:
        break;
    }
  };

  let payload = {
    title,
    content,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Edit clicked:", payload);
    props.updateProject(payload, docId);
    history.push(`/project/${docId}`);
  };

  if (project) {
    return (
      <div className='container section project-details'>
        <div className='row'>
          <div className='col s12 m8 offset-m2 '>
            <form className='white' onSubmit={handleSubmit}>
              <h5 className='content-title grey-text text-darken-3'>
                Edit: {props.project.title}
              </h5>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    id='title'
                    type='text'
                    className='validate'
                    value={title}
                    onChange={handleInputChange}
                  />
                  <label htmlFor='title'>Title</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <textarea
                    onChange={handleInputChange}
                    id='content'
                    className='materialize-textarea'
                    defaultValue={content}></textarea>
                  <label htmlFor='content'>Content</label>
                </div>
              </div>{" "}
              <button
                className='btn waves-light red'
                type='submit'
                name='action'>
                Update
                <i className='material-icons right'>create</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return <Fragment>Loading</Fragment>;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateProject: (project, docId) => {
      dispatch(updateProject(project, docId));
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  const project = _.values(state.firestore.ordered.projects).filter(
    (project) => project.id === ownProps.match.params.id
  )[0];

  return {
    auth: state.firebase.auth,
    project,
    docId: ownProps.match.params.id,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "projects" }])
)(EditProject);
