import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./components/Navigation/Footer";
import MainNav from "./components/Navigation/MainNav";
import ChildrenCommittee from "./components/committees/children/ChildrenCommittee";
import RadioProgramming from "./components/Radio/RadioProgramming";
import CurrentReading from "./components/Readings/CurrentReading";
import Chaplains from "./components/chaplaincy/Chaplains";

const App = () => {
  return (
    
      <Router>
       
        <MainNav />
        <Switch>
          <Route exact path="/">
            <Layout />
          </Route>
          <Route path="/chaplaincy">
            <Chaplains/>
          </Route>
          <Route path="/currentreading">
            <CurrentReading/>
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