import Carousel from "../homepage/Carousel";
import './Layout.css';
import {CarouselData} from "../homepage/CarouselData";
import Readings from '../Readings/Readings';

const Layout = () => {

  return (
    <div className="layout">
      <Carousel slides={CarouselData}/>
      <Readings />
      {/*
      <Section />
    <Main1/>
    */}
    </div>
  );
};

export default Layout;
