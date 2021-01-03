import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NotFound from "./pages/notFound";
import Home from "./pages/home";

import "./styles/components/common/main.scss";

function App() {
        return (
                <React.Fragment>
                        <NavBar />
                        <div className="container">
                                <Switch>
                                        <Route path="/user/login" component={LoginForm} />
                                        <Route path="/user/register" component={RegisterForm} />
                                        <Route path="/not-found" component={NotFound} />
                                        <Route path="/home" component={Home} />
                                        <Redirect from="" to="/home" />
                                        <Redirect to="/not-found" />
                                </Switch>
                        </div>
                </React.Fragment>
        );
}

export default App;
