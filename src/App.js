import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import TrainingHome from "./pages/TrainingHome";
import Signup from "./pages/Signup";
import Module from "./pages/Module";
import { Layout } from "./components/";

const LandingPage = () => (
  <Layout>
    <Landing />
  </Layout>
);

const LoginPage = () => (
  <Layout>
    <Login />
  </Layout>
);

const TrainingHomePage = () => (
  <Layout>
    <TrainingHome />
  </Layout>
);

const SignupPage = () => (
  <Layout>
    <Signup />
  </Layout>
);

const ModulePage = () => (
  <Layout>
    <Module />
  </Layout>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/training" component={TrainingHomePage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/module-01" component ={ModulePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
