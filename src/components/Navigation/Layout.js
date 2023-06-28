import './Layout.css';
import WhoWeAre from '../whoweare/WhoWeAre';
import Footer from "./Footer";
import Main from '../homepage/Main';

const Layout = () => {

  return (
    <div className="layout">
      <Main/>
      <WhoWeAre />
    </div>
  );
};

export default Layout;
