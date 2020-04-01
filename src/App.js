import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashbaord/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";
import CreateProject from "./components/project/CreateProject";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/project/create' exact component={CreateProject} />
          <Route path='/project/:id' exact component={ProjectDetails} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/signup' exact component={SignUp} />
        </Switch>
        <Link
          to=''
          className='btn-floating btn-large waves-effect waves-light blue create-project'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
