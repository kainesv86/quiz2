import * as React from "react";
import { FunctionComponent } from "react";
import { SlideShow } from "../components/common/slideShow";

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
                                        <h1 style={{ color: `black` }}>MyQuiz Is A Great Platform To Build Your Awesome Quizzes</h1>
                                        <h1 style={{ marginBottom: `16px`, color: `black` }}>Explore Your Knowledge With Our Quizzes</h1>
                                        <div className="statistics">
                                                <div className="statistics__content">
                                                        <h4>1K</h4>
                                                        <section style={{ display: "flex" }}>
                                                                <h4 style={{ color: `#F65868` }}>{">"} </h4>
                                                                <h4> STUDENTS</h4>
                                                        </section>
                                                </div>
                                                <div className="statistics__content">
                                                        <h4>3K</h4>
                                                        <section style={{ display: "flex" }}>
                                                                <h4 style={{ color: `#F65868` }}>{">"} </h4>
                                                                <h4> QUIZZES</h4>
                                                        </section>
                                                </div>
                                                <div className="statistics__content">
                                                        <h4>8K+</h4>
                                                        <section style={{ display: "flex" }}>
                                                                <h4 style={{ color: `#F65868` }}>{">"} </h4>
                                                                <h4> HOURS EXAM</h4>
                                                        </section>
                                                </div>
                                                <div className="statistics__content">
                                                        <h4>500</h4>
                                                        <section style={{ display: "flex" }}>
                                                                <h4 style={{ color: `#F65868` }}>{">"} </h4>
                                                                <h4> TEACHERS</h4>
                                                        </section>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </React.Fragment>
        );
};

export default Home;
