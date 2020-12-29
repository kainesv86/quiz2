import * as React from "react";
import { Component } from "react";

import { FunctionComponent } from "react";
import NavBar from "../components/common/navbar";
import "../styles/components/common/auth.scss";

import RegisterForm from "../components/registerForm";

export interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
        return (
                <React.Fragment>
                        <NavBar />
                        <div className="auth">
                                <RegisterForm />
                        </div>
                </React.Fragment>
        );
};

export default Register;
