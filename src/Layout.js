import Carousel from "./components/homepage/Carousel";
import Readings from "./components/Readings/Readings";
import Section from "./components/Announcements/Announcement";
import './shared.css';

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
