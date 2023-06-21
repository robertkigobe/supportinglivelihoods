import Carousel from "../homepage/Carousel";
import './Layout.css';
import {CarouselData} from "../homepage/CarouselData";
import WhoWeAre from '../whoweare/WhoWeAre';
import Footer from "./Footer";

const Layout = () => {

  return (
    <div className="layout">
      <WhoWeAre />
      <Footer/>
     
    </div>
  );
};

export default Layout;
