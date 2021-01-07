import * as React from "react";
import "../../styles/components/common/loading.scss";

export interface LoadingProps {}

const Loading: React.FunctionComponent<LoadingProps> = () => {
        return (
                <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
        );
};

export default Loading;
