import './resources/styles.css';
import Header from './components/header_and_footer/header';
import FeaturedComponent from './components/featured/FeaturedComponent';
const App = ()=> {
  return (
    <div className="App" style={{height:"1500px",background:"cornflowerblue"}}>
     <Header />
     <FeaturedComponent/>
    </div>
  );
}

export default App;
