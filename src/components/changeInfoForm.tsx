import * as React from "react";

import { useForm } from "react-hook-form";
import { http } from "../service/http";

import "../styles/components/common/main.scss";
import "../styles/components/common/form.scss";

import { RootState } from "../store/index";
import { AuthState, userActions } from "../store/auth/.";
import { useSelector } from "react-redux";
import { store } from "../store";

export interface ChangeInfoFormProps {}

interface ChangeInfoProps {
        fullName: string;
        email: string;
}

const ChangeInfoForm: React.FunctionComponent<ChangeInfoFormProps> = () => {
        const authState = useSelector<RootState, AuthState>((state) => state.auth);

        const { register, handleSubmit, getValues } = useForm<ChangeInfoProps>({
                defaultValues: {
                        fullName: "",
                        email: "",
                },
        });

        const onSubmit = React.useCallback(async () => {
                const obj = {
                        fullName: getValues("fullName"),
                        email: getValues("email"),
                };

                store.dispatch(userActions.changeUser(obj));
                // console.log("WTF");
                // store.dispatch(userActions.getUserInfo());
                console.log(authState);
        }, []);

        return (
                <div className="form-container">
                        <div className="form">
                                <div className="form__name-service">
                                        <h2>Update information</h2>
                                </div>
                                <form className="form__info" onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor="fullName">Full Name</label>
                                        <input type="text" id="fullName" name="fullName" ref={register} />
                                        <label htmlFor="Email">Email</label>
                                        <input type="text" id="email" name="email" ref={register} />
                                        <button className="btn" type="submit">
                                                Change
                                        </button>
                                </form>
                        </div>
                </div>
        );
};

export default ChangeInfoForm;
