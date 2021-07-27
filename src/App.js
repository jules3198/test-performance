import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import LoginComponent from './component/Login.component';
import RegisterComponent from './component/Register.component';
import 'bootstrap/dist/css/bootstrap.css';
import authService from './Services/auth-service';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  const user = authService.getCurrentUser();
  return (
    <div className="App" style={{ paddingTop: "5rem"}}>
       <Router>
       <Switch>
          <Route exact path="/home">
            {
              user ? <Home />  : <Redirect to="/"/>
            }
          </Route>
          <Route path="/register">
            <RegisterComponent />
          </Route>
          <Route path="/">
            <LoginComponent />
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
