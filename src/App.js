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
import {Element} from "react-scroll";
const App = () => {
  return (
    <div
      className="App"
      style={{ height: "1500px", background: "cornflowerblue" }}
    >
      <Header />
      <Element
        name={"countdown"}
      >
         <FeaturedComponent />
      </Element>
      <Element name={"info"}>
      <VenueInfo />
      </Element>
      <Element name={"highlights"}>
      <HighLightComponent />
      </Element>
      <Element  name={"pricing"}>
      <PricingComponent/>
      </Element>
      <Element name={"location"}>
      <LocationComponent />
      </Element>
      <Element name={"footer"}>
      <FooterComponent />
      </Element>
     
    </div>
  );
};

export default App;
