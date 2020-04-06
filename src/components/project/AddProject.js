import React, { Component, Fragment, useState } from "react";
import CreateProject from "./EditProject";
import Modal from "../Modal";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import history from "../../history";
import { createProject } from "../../store/actions/projectActions";

const AddProject = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [modalStatus, setModalStatus] = useState(false);

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
    props.createProject(payload);
    closeModal();
    history.push("/");
  };

  const closeModal = () => {
    setModalStatus(true);
  };

  const { auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />;

  return (
    <Fragment>
      <button
        onClick={() => setModalStatus(false)}
        className='btn-floating  btn-large waves-effect waves-light red modal-trigger create-project'
        data-target='modal1'>
        <i className='material-icons'>add</i>
      </button>
      <Modal status={modalStatus}>
        <div className='row'>
          <div className='col s12 m12'>
            <form className='white' onSubmit={handleSubmit}>
              <h5 className='card-title grey-text text-darken-3'>
                Create Project
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
              </div>
              <button
                className='btn waves-light red'
                type='submit'
                onClick={closeModal}
                name='action'>
                Create
                <i className='material-icons right'></i>
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createProject: (project) => {
      dispatch(createProject(project));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
