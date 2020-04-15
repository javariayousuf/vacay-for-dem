import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import TrainingHome from "./pages/TrainingHome";
import Signup from "./pages/Signup";
import Module from "./pages/Module";
import ModuleQuiz from "./pages/ModuleQuiz";
import Testimonial from "./pages/Testimonial";
import { Layout } from "./components/";

import { IdentityContextProvider } from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";

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

const ModuleQuizPage = () => (
  <Layout>
    <ModuleQuiz />
  </Layout>
);

const TestimonialPage = () => (
  <Layout>
    <Testimonial />
  </Layout>
);

class App extends Component {
  render() {
    return (
      <IdentityContextProvider url={"https://vacay-for-dem.netlify.com/"}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/training" component={TrainingHomePage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/module-02" component={ModulePage} />
            <Route exact path="/module-02-quiz" component={ModuleQuizPage} />
            <Route exact path="/testimonials" component={TestimonialPage} />
          </Switch>
        </BrowserRouter>
      </IdentityContextProvider>
    );
  }
}
export default App;
