import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import Container from "./components/Container";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Todos from "./components/Todos";

function App() {
	return (
		<div className="app">
			<Nav />
			<Container>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/signup">
						<SignUp />
					</Route>
					<Route path="/signin">
						<SignIn />
					</Route>
					<Route path="/todos">
						<Todos />
					</Route>
				</Switch>
			</Container>
		</div>
	);
}

export default App;
