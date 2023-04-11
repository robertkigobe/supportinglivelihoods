import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import CurrentReading from "./Readings/CurrentReading";
import Footer from "./Navigation/Footer";
import MainNav from "./Navigation/MainNav";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <MainNav />
        <Switch>
          <Route exact path="/">
            <Layout />
          </Route>
          <Route path="/currentreading">
            <CurrentReading />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
