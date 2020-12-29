import * as React from "react";
import { FunctionComponent } from "react";
import "../styles/components/common/auth.scss";

import Navbar from "../components/common/navbar";
import LoginForm from "../components/loginForm";

export interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
        return (
                <React.Fragment>
                        <Navbar />
                        <div className="auth">
                                <LoginForm />
                        </div>
                </React.Fragment>
        );
};

export default Login;
