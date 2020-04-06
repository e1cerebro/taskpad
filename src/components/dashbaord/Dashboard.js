import React from "react";
import PropTypes from "prop-types";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { compose } from "redux";
import ProjectList from "../project/ProjectList";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import _ from "lodash";

const Dashboard = (props) => {
  const { projects, auth, notifications } = props;

  if (!auth.uid) return <Redirect to='/signin' />;

  if (!projects)
    return (
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    );
  return (
    <div className='dashboard container'>
      <div className='row'>
        <div className='col s12 m6'>
          <ProjectList projects={projects} />
        </div>
        <div className='col s12 m5 offset-m1'>
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => {
  const authId = state.firebase.auth.uid;
  const projects = _.values(state.firestore.ordered.projects).filter(
    (project) => project.authorId === authId
  );

  const notifications = _.values(state.firestore.ordered.notifications).filter(
    (notification) => notification.authorId === authId
  );

  return {
    projects: projects,
    auth: state.firebase.auth,
    notifications: notifications,
  };
};

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([
    { collection: "projects", limit: 10, orderBy: ["createdAt", "desc"] },
    {
      collection: "notifications",
      limit: 10,
      orderBy: ["time", "desc"],
    },
  ])
)(Dashboard);
