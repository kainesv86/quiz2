import * as React from "react";

import { FunctionComponent } from "react";

import "../styles/components/common/form.scss";
import "../styles/components/common/main.scss";

import { store } from "../store";
import { userActions } from "../store/auth";

import { useForm } from "react-hook-form";

export interface RegisterFormProps {}

interface RegisterUserProps {
        fullName: string;
        username: string;
        password: string;
        confirmPassword: string;
}

const RegisterForm: FunctionComponent<RegisterFormProps> = () => {
        const { register, handleSubmit, getValues } = useForm<RegisterUserProps>();

        const onSubmit = React.useCallback(() => {
                const obj = {
                        fullName: getValues("fullName"),
                        username: getValues("username"),
                        password: getValues("password"),
                        confirmPassword: getValues("confirmPassword"),
                };
                console.log(obj);
                store.dispatch(userActions.registerUser(obj));
        }, [getValues]);

        return (
                <div className="container">
                        <div className="form">
                                <div className="form__name-service">
                                        <h2>Register with</h2>
                                        <div className="form__name-service__logo">
                                                <img src="/images/logo.svg" alt="" />
                                        </div>
                                </div>
                                <form className="form__info" onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor="fullName">Full Name</label>
                                        <input type="text" id="fullName" name="fullName" ref={register} />
                                        <label htmlFor="username">Username</label>
                                        <input type="text" id="username" name="username" ref={register} />
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" ref={register} />
                                        <label htmlFor="password">Confirm Password</label>
                                        <input type="password" id="confirmPassword" name="confirmPassword" ref={register} />
                                        <a className="form__forgot" href="https://www.google.com/">
                                                Sign in instead?
                                        </a>
                                        <button className="btn" type="submit">
                                                Sign Up
                                        </button>
                                </form>

                                <div className="form__others">
                                        <div className="form__others__icon">
                                                <img src="/images/google.svg" alt="" />
                                        </div>
                                        <a href="https://www.google.com/" className="form__others__text">
                                                Continue with Google
                                        </a>
                                </div>
                                <div className="form__others">
                                        <div className="form__others__icon">
                                                <img src="/images/facebook.svg" alt="" />
                                        </div>
                                        <a className="form__others__text" href="https://www.google.com/">
                                                Continue with Facebook
                                        </a>
                                </div>
                                <div className="form__others">
                                        <div className="form__others__icon">
                                                <img src="/images/github.svg" alt="" />
                                        </div>
                                        <a className="form__others__text" href="https://www.google.com/">
                                                Continue with Github
                                        </a>
                                </div>
                        </div>
                </div>
        );
};

export default RegisterForm;
