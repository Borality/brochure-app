//Sections
import HomePage from "./components/homepage/HomePage";
import SignUp from "./components/signup/SignUp";
//React Router
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
          <Route path = "/SignUp">
			  <SignUp/>
          </Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
