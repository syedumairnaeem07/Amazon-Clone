import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
	// eslint-disable-next-line
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//Means User is logged in/ was signed in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				//Means user logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	// eslint-disable-next-line
	}, []);

	return (
		//Default route must be at the bottom otherwise it never get picked up or listened
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/">
						<Header />

						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
