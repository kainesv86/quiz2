import * as React from "react";
import { FunctionComponent } from "react";

import "../styles/components/common/main.scss";

export interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
        return (
                <React.Fragment>
                        <div className="container">
                                <h1>Make Your Awesome Quiz and become</h1>
                                <h1>your most unstoppable self</h1>
                        </div>
                </React.Fragment>
        );
};

export default Home;
