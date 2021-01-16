import * as React from "react";

import { useForm } from "react-hook-form";

import "../styles/components/common/main.scss";
import "../styles/components/common/form.scss";

export interface ChangeInfoFormProps {}

interface ChangeInfoProps {
        fullname: string;
        email: string;
}

const ChangeInfoForm: React.FunctionComponent<ChangeInfoFormProps> = () => {
        const { register, handleSubmit } = useForm<ChangeInfoProps>({
                defaultValues: {
                        fullname: "",
                        email: "",
                },
        });
        const onSubmit = React.useCallback(() => {
                console.log("Changed");
        }, []);
        return (
                <div className="form-container">
                        <div className="form">
                                <div className="form__name-service">
                                        <h2>Update information</h2>
                                </div>
                                <form className="form__info" onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor="fullname">Full Name</label>
                                        <input type="text" id="fullname" name="fullname" ref={register} />
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
