import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Navigation/Layout";
import MainNav from "./components/Navigation/MainNav";
import AboutUs from "./components/whoweare/AboutUs";

const App = () => {
  return (
    
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/">
            <Layout />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          
          
          
        </Switch>
        
      </Router>
    
  );
};

export default App;
