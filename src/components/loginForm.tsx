import * as React from "react";
import { FunctionComponent } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";

import "../styles/components/common/form.scss";

export interface LoginFormProps {}

interface LoginUserProps {
        username: string;
        password: string;
}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
        const { register, handleSubmit, getValues } = useForm<LoginUserProps>();

        const onSubmit = React.useCallback(() => {
                const obj = { username: getValues("username"), password: getValues("password") };

                axios.post("http://localhost:4000/api/auth/login", obj);
        }, [getValues]);

        return (
                <div className="form">
                        <div className="form__name-service">
                                <h2>Login with</h2>
                                <div className="form__name-service__logo">
                                        <img src="./images/logo.svg" alt="" />
                                </div>
                        </div>
                        <form className="form__info" onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" ref={register} />
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" ref={register} />
                                <a className="form__forgot" href="https://www.google.com/">
                                        Forgot your password?
                                </a>
                                <button className="btn" type="submit">
                                        Sign In
                                </button>
                        </form>

                        <div className="form__others">
                                <div className="form__others__icon">
                                        <img src="./images/google.svg" alt="" />
                                </div>
                                <a href="https://www.google.com/" className="form__others__text">
                                        Continue with Google
                                </a>
                        </div>
                        <div className="form__others">
                                <div className="form__others__icon">
                                        <img src="./images/facebook.svg" alt="" />
                                </div>
                                <a className="form__others__text" href="https://www.google.com/">
                                        Continue with Facebook
                                </a>
                        </div>
                        <div className="form__others">
                                <div className="form__others__icon">
                                        <img src="./images/github.svg" alt="" />
                                </div>
                                <a className="form__others__text" href="https://www.google.com/">
                                        Continue with Github
                                </a>
                        </div>
                </div>
        );
};

export default LoginForm;
