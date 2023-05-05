import Carousel from "../homepage/Carousel";
import Readings from "../Readings/Readings";
import Section from "../Announcements/Announcement";
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Carousel />
      <Readings />
      <Section />
      {/*
    <Main1/>
    */}
    </div>
  );
};

export default Layout;
