import * as React from "react";
import "./style.scss";

export interface LoadingProps {}

export const Loading: React.FunctionComponent<LoadingProps> = () => {
        return (
                <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
        );
};
