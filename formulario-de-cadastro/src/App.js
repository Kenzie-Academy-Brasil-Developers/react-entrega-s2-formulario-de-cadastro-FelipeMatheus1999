import "./App.css";
import { Switch, Route } from "react-router-dom";
import Form from "./pages/form/index.jsx";
import LoggedIn from "./pages/isLoggedIn/index.jsx";

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
