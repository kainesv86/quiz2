import * as React from "react";
import { FunctionComponent } from "react";
import SlideShow from "../components/common/slideshow";

import "../styles/components/common/main.scss";
import "../styles/pages/home.scss";

import "../styles/components/common/main.scss";

export interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
        return (
                <React.Fragment>
                        <div className="container">
                                <div className="home">
                                        <h1>Make Your Awesome Quiz and become</h1>
                                        <h1>your most unstoppable self</h1>
                                        <SlideShow />
                                        <h1>MyQuiz Is A Great Platform To Build Your Awesome Quizzes</h1>
                                        <h1>Explore Your Knowledge With Our Quizzes</h1>
                                </div>
                        </div>
                </React.Fragment>
        );
};

export default Home;
