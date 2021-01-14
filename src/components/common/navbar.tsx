import * as React from "react";
import { FunctionComponent } from "react";

import "../../styles/components/common/navbar.scss";
import { store } from "../../store";

import { Link } from "react-router-dom";

export interface NavBarProps {}

interface dataProps {
        username: string;
        fullName: string;
        email: string;
        isPremium: boolean;
        role: string;
}

const user = store.getState();
console.log(user);

const userDefault: dataProps = { username: "", email: "", fullName: "", isPremium: true, role: "USER" };

const NavBar: FunctionComponent<NavBarProps> = () => {
        const [login, setLogin] = React.useState(false);
        const [user, setUser] = React.useState<dataProps>(userDefault);
        const logout = () => {
                document.cookie = "re-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                setLogin(false);
                setUser(userDefault);
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

                                {login && user ? (
                                        <React.Fragment>
                                                <div className="btn user__btn">{user.fullName}</div>
                                                <Link className="btn user__btn" to="/user/change"></Link>
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
                                <button className="btn user__btn" onClick={logout}>
                                        Logout
                                </button>
                        </div>
                </div>
        );
};

export default NavBar;
