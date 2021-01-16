import * as React from "react";
import { Link } from "react-router-dom";

export interface BurgerBarProps {
        isBurgerClick: boolean;
        onLogout: Function;
}

const BurgerBar: React.FunctionComponent<BurgerBarProps> = ({ isBurgerClick, onLogout }) => {
        return (
                <div className={`burger-bar ${isBurgerClick ? "burger-bar--active" : " "}`}>
                        <Link className="burger-bar__list" to="/user/change">
                                Update information
                        </Link>
                        <span className="burger-bar__stick"></span>
                        <Link className="burger-bar__list" to="/user/change">
                                Change password
                        </Link>
                        <span></span>
                        <button className="burger-bar__list" onClick={() => onLogout()}>
                                Logout
                        </button>
                        <span></span>
                </div>
        );
};

export default BurgerBar;
