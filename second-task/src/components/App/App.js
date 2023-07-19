import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />

      <BackgroundCircles />
    </div>
  );
}

export default App;
