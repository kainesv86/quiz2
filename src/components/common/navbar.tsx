import * as React from "react";
import { FunctionComponent } from "react";

import "../../styles/components/common/navbar.scss";

export interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
        return (
                <div className="navbar">
                        <img src="./images/logo.svg" alt="" />
                        <div className="user-container">
                                <form className="search-bar">
                                        <input type="text" placeholder="Search" name="input" />
                                        <button className="search-bar__btn" type="button">
                                                <img src="./images/searchIcon.svg" alt="" />
                                        </button>
                                </form>
                                <a className="btn user__btn" href="google.com">
                                        Login
                                </a>
                                <a className="btn user__btn" href="google.com">
                                        Register
                                </a>
                        </div>
                </div>
        );
};

export default NavBar;
