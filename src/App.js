import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FeaturedComponent from "./components/featured/FeaturedComponent";
import Header from "./components/header_and_footer/header";
import HighLightComponent from "./components/higlights/HighLightComonent";
import VenueInfo from "./components/venue_info/VenueInfo";
import "./resources/styles.css";
const App = () => {
  return (
    <div
      className="App"
      style={{ height: "1500px", background: "cornflowerblue" }}
    >
      <Header />
      <FeaturedComponent />
      <VenueInfo />
      <HighLightComponent/>
    </div>
  );
};

export default App;
