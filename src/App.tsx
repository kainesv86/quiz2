import React, { useEffect, useState } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import NavBar from "./components/common/navbar";
import Loading from "./components/common/loading";
import { store, RootState } from "./store/index";
import { AuthState } from "./store/auth/.";
import { useSelector } from "react-redux";

import "./styles/components/common/main.scss";
import { getUserInfo } from "./store/auth/action";

const LoginForm = React.lazy(() => import("./components/loginForm"));
const RegisterForm = React.lazy(() => import("./components/registerForm"));
const NotFound = React.lazy(() => import("./pages/notFound"));
const ChangeInfoForm = React.lazy(() => import("./components/changeInfoForm"));
const Home = React.lazy(() => import("./pages/home"));

function App() {
        const authState = useSelector<RootState, AuthState>((state) => state.auth);
        useEffect(() => {
                store.dispatch(getUserInfo());
        }, [authState.isLogin]);
        return (
                <React.Fragment>
                        <NavBar />
                        <React.Suspense fallback={<Loading />}>
                                <Switch>
                                        <Route path="/user/login" component={LoginForm} />
                                        <Route path="/user/register" component={RegisterForm} />
                                        <Route path="/user/change" component={ChangeInfoForm} />
                                        <Route path="/not-found" component={NotFound} />
                                        <Route path="/home" component={Home} />
                                        <Redirect from="" to="/home" />
                                        <Redirect to="/not-found" />
                                </Switch>
                        </React.Suspense>
                </React.Fragment>
        );
}

export default App;
