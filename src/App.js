import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SignUpIn } from "../src/pages/signUpIn";
import { Dashboard } from './pages/dashboard';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/">
          <SignUpIn />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      
    </div>
    </BrowserRouter>

  );
}

export default App;
