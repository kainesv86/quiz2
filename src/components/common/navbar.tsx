import * as React from "react";
import { FunctionComponent } from "react";

import "../../styles/components/common/navbar.scss";
import { store, counterActions } from "../../store/auth/counter";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export interface NavBarProps {}

interface dataProps {
        username: string;
        fullname: string;
        email: string;
        isPremium: boolean;
        role: string;
}
const userDefault: dataProps = { username: "", email: "", fullname: "", isPremium: true, role: "USER" };

const NavBar: FunctionComponent<NavBarProps> = () => {
        const history = useHistory();
        const [login, setLogin] = React.useState(false);
        const [user, setUser] = React.useState<dataProps>(userDefault);

        React.useEffect(() => {
                axios.get<dataProps>("http://localhost:4000/api/user", { withCredentials: true })
                        .then(({ data }) => {
                                setLogin(true);
                                setUser(data);
                                console.log(data);
                        })
                        .catch(() => {
                                document.cookie = "re-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                                history.push("/user/login");
                        });
        }, [history]);
        const logout = () => {
                document.cookie = "re-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                setLogin(false);
                setUser(userDefault);
                window.location.reload();
        };
        console.log(user);

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
                                                <div className="btn user__btn">{user.fullname}</div>
                                                <button className="btn user__btn" onClick={logout}>
                                                        Logout
                                                </button>
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
                        </div>
                </div>
        );
};

export default NavBar;
