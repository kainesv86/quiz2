import * as React from "react";
import { FunctionComponent } from "react";

export interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
        return (
                <React.Fragment>
                        <div>
                                <h1>Make Your Awesome Quiz and become</h1>
                                <h1>your most unstoppable self</h1>
                        </div>
                </React.Fragment>
        );
};

export default Home;
