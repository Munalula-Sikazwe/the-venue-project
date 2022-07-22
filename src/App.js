import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FeaturedComponent from "./components/featured/FeaturedComponent";
import FooterComponent from "./components/header_and_footer/FooterComponent";
import Header from "./components/header_and_footer/header";
import HighLightComponent from "./components/higlights/HighLightComonent";
import LocationComponent from "./components/Location/LocationComponent";
import PricingComponent from "./components/pricing/PricingComponent";
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
      <PricingComponent/>
      <LocationComponent/>
      <FooterComponent/>
    </div>
  );
};

export default App;
