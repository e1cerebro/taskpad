import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashbaord/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";
import EditProject from "./components/project/EditProject";
import AddProject from "./components/project/AddProject";
import SignIn from "./components/auth/SignIn";
import ChangePassword from "./components/auth/ChangePassword";
import SignUp from "./components/auth/SignUp";
import Profile from "./components/auth/Profile";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/project/edit/:id' exact component={EditProject} />
          <Route path='/project/:id' exact component={ProjectDetails} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/reset-password' exact component={ChangePassword} />
        </Switch>
        <AddProject />
      </div>
    </Router>
  );
}

export default App;
