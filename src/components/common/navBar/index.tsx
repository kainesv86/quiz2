import * as React from "react";
import { FunctionComponent } from "react";
import BurgerBar from "../burgerBar";

import "./style.scss";

import { Link } from "react-router-dom";

import { RootState } from "../../../store/index";
import { AuthState } from "../../../store/auth";
import { useSelector } from "react-redux";

export interface NavBarProps {}

export const NavBar: FunctionComponent<NavBarProps> = () => {
        const authState = useSelector<RootState, AuthState>((state) => state.auth);
        const [isBurgerClick, setIsBurgerClick] = React.useState(false);
        const logout = () => {
                document.cookie = "re-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.reload();
        };

        return (
                <div className="navbar">
                        <Link to="./home">
                                <img src="/images/logo.svg" alt="" />
                        </Link>
                        <div className="user-container">
                                <form className="search-bar">
                                        <input type="text" placeholder="Search" name="input" />
                                        <button className="search-bar__btn" type="button">
                                                <img src="/images/searchIcon.svg" alt="" />
                                        </button>
                                </form>

                                {authState.isLogin ? (
                                        <React.Fragment>
                                                {authState.isLogin ? <div className="btn user__btn">{authState.fullName}</div> : null}
                                                <BurgerBar isBurgerClick={isBurgerClick} onLogout={logout} setIsBurgerClick={setIsBurgerClick} />
                                        </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                                <Link className="btn user__btn" to="/user/login">
                                                        Login
                                                </Link>
                                                <Link className="btn user__btn" to="/user/register">
                                                        Register
                                                </Link>
                                        </React.Fragment>
                                )}
                        </div>
                </div>
        );
};
