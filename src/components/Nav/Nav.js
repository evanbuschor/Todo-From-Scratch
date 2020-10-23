import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
const Nav = () => {
	return (
		<div className="nav">
			<div className="nav__left">Logged in as Evan</div>
			<div className="nav__center">
				<Link to="/" className="nav__logo">
					<span className="nav__logo-text">Todo</span>
					<DoneOutlineIcon />
				</Link>
			</div>
			<div className="nav__right">
				<Link to="/todos" className="nav__page-link">
					Todos
				</Link>{" "}
				<Link to="/signup" className="nav__page-link">
					Sign Up
				</Link>
				<Link to="/signin" className="nav__page-link">
					Sign in
				</Link>
				<Link to="/logout" className="nav__page-link">
					Log Out
				</Link>
			</div>
		</div>
	);
};

export default Nav;
