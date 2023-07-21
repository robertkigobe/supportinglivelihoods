import './Layout.css';
import WhoWeAre from '../whoweare/WhoWeAre';
import Main from '../main/Main';

const Layout = () => {

  return (
    <div className="layout">
      <Main/>
      <WhoWeAre />
    </div>
  );
};

export default Layout;
