import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/navigation/Layout";
import MainNav from "./components/navigation/MainNav";
import AboutUs from "./components/whoweare/AboutUs";
import Health from "./components/Health/Health";
import SpecialNeeds from "./components/specialneeds/SpecialNeeds";
import Education from "./components/Education/Education";
import Livelihood from "./components/Livelihood/Livelihood";
import Footer from "./components/navigation/Footer";
import Support from "./components/support/Support";

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

          <Route exact path="/health">
            <Health />
          </Route>

          <Route exact path="/specialneeds">
            <SpecialNeeds />
          </Route>
          
          <Route exact path="/education">
            <Education />
          </Route>

          <Route exact path="/livelihood">
            <Livelihood />
          </Route>

          <Route exact path="/support">
            <Support />
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
    
  );
};

export default App;
