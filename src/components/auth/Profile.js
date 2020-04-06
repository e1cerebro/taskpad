import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteProfile } from "../../store/actions/authAction";
import _ from "lodash";
import moment from "moment";

const Profile = (props) => {
  const { user, projects, lastlogin } = props;
  const last_login = new Date(lastlogin * 1000).toString();
  console.log(last_login);

  const removeProfile = () => {
    const response = window.confirm(
      "Are you sure you want to delete this account? You will lose all data associated with this account and the action cannot be undone"
    );

    if (response === true) {
      props.deleteProfile();
    }
  };

  return (
    <div className='container  section'>
      <div className='row'>
        <div className='col s12 m8  '>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>
                Welcome to {user.firstName}'s Profile
              </span>

              <ul className='collection'>
                <li className='collection-item '>
                  <p>
                    <span className='title'>Name: </span>
                    {user.firstName} {user.lastName}
                  </p>
                </li>
                <li className='collection-item '>
                  <p>
                    <span className='title'>Total Tasks: </span>
                    {projects}
                  </p>
                </li>
              </ul>
              <div className='grey lighten-4 grey-text grey-text note-date'>
                Last Login: {last_login}
              </div>
            </div>
            <div className='card-action'>
              <button
                className='btn red waves-effect waves-light'
                type='button'
                onClick={removeProfile}
                name='action'>
                Delete Profile
                <i className='material-icons right'>delete</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const authId = state.firebase.auth.uid;
  const projects = _.values(state.firestore.ordered.projects).filter(
    (project) => project.authorId === authId
  );

  return {
    user: state.firebase.profile,
    projects: projects.length,
    lastlogin: state.firebase.auth.lastLoginAt,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteProfile: () => {
      dispatch(deleteProfile());
    },
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "projects", orderBy: ["createdAt", "desc"] }])
)(Profile);
