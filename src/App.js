import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./components/Navigation/Footer";
import MainNav from "./components/Navigation/MainNav";
import ChildrenCommittee from "./components/committees/children/ChildrenCommittee";
import RadioProgramming from "./components/Radio/RadioProgramming";
import Packages from "./components/packages/Packages";

const App = () => {
  return (
    
      <Router>
       
        <MainNav />
        <Switch>
          <Route exact path="/">
            <Layout />
          </Route>
          <Route path="/currentreading">
            <Packages/>
          </Route>
          <Route path="/">
            <ChildrenCommittee />
          </Route>
          <Route path="/">
            <RadioProgramming />
          </Route>
        </Switch>
        <Footer />
      </Router>
    
  );
};

export default App;
