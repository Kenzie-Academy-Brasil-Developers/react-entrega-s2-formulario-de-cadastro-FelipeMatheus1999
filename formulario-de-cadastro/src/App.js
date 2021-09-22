import "./App.css";
import { Switch, Route } from "react-router-dom";
import Form from "./pages/form";
import LoggedIn from "./pages/isLoggedIn";

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/loggedIn">
            <LoggedIn />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
