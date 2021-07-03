//Sections
import HomePage from "./components/homepage/HomePage";
import SignUp from "./components/signup/SignUp";
import NavBar from "./components/Navbar";
import SecondNavbar from "./components/SecondNavbar"
//React Router
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
function App() {
	return (
		<div>
			<Router>
					<NavBar/>
					<SecondNavbar />
					<Switch>
						<PrivateRoute exact path = "/" component = {HomePage}></PrivateRoute>
						<Route exact path="/" component={HomePage}/>
					
						<Route path="/SignUp" component={SignUp}/>
					</Switch>
			</Router>
		</div>
	);
}

export default App;
