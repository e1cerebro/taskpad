import React from "react";
import PropTypes from "prop-types";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import ProjectList from "../project/ProjectList";
const Dashboard = props => {
  const { projects } = props;
  return (
    <div className='dashboard container'>
      <div className='row'>
        <div className='col s12 m6'>
          <ProjectList projects={projects} />
        </div>
        <div className='col s12 m5 offset-m1'>
          <Notifications />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps, null)(Dashboard);
