import Carousel from "../homepage/Carousel";
import './Layout.css';
import {CarouselData} from "../homepage/CarouselData";
import WhoWeAre from '../whoweare/WhoWeAre';

const Layout = () => {

  return (
    <div className="layout">
      <WhoWeAre />
      <Carousel slides={CarouselData}/>
      {/*
      <Section />
    <Main1/>
    */}
    </div>
  );
};

export default Layout;
