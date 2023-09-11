import './App.css';
import Banner from './Components/Banner';
import Coming from './Components/Coming';
import Detail from './Components/Detail';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Joinbar from './Components/Joinbar';
import Movie from './Components/Movie';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Joinbar/>
      <Detail/>
      <Movie/>
      <Coming/>
      <Footer/>
    </div>
  );
}

export default App;
