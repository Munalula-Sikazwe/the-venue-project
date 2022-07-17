import './resources/styles.css';
import Header from './components/header_and_footer/header';
import FeaturedComponent from './components/featured/FeaturedComponent';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
const App = ()=> {
  return (
    <div className="App" style={{height:"1500px",background:"cornflowerblue"}}>
     <Header />
     <FeaturedComponent/>
    </div>
  );
}

export default App;
