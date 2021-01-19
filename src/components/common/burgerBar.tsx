import * as React from "react";
import { Link } from "react-router-dom";

export interface BurgerBarProps {
        isBurgerClick: boolean;
        setIsBurgerClick: Function;
        onLogout: Function;
}

const BurgerBar: React.FunctionComponent<BurgerBarProps> = ({ isBurgerClick, onLogout, setIsBurgerClick }) => {
        return (
                <React.Fragment>
                        <button
                                className={`burger-button ${isBurgerClick ? `burger-button--active` : ``}`}
                                onClick={() => setIsBurgerClick(!isBurgerClick)}
                        >
                                <span className="burger-button__stick"></span>
                                <span className="burger-button__stick"></span>
                                <span className="burger-button__stick"></span>
                        </button>
                        <div className={`burger-bar ${isBurgerClick ? "burger-bar--active" : " "}`}>
                                <div className="burger-bar__button">
                                        <Link className="burger-bar__list" to="/user/change">
                                                Update information
                                        </Link>
                                        <span className="burger-bar__stick"></span>
                                </div>
                                <div className="burger-bar__button">
                                        <Link className="burger-bar__list" to="/user/change">
                                                Change password
                                        </Link>
                                        <span></span>
                                </div>
                                <div className="burger-bar__button">
                                        <div className="burger-bar__list" onClick={() => onLogout()}>
                                                Logout
                                        </div>
                                        <span></span>
                                </div>
                        </div>
                </React.Fragment>
        );
};

export default BurgerBar;
