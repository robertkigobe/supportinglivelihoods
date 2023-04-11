
import Sections from "./Sections";
import Carousel from "./CarouselF"

const Home = () => {
  return (
    <div className="container-fluid">
      <div>
        <Carousel />
      </div>
      <div>
        <Sections />
      </div>
    </div>
  );
};

export default Home;
