import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/index.jsx';
import Head from './components/Head/index.jsx';
import Main from './components/Main/index.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Head />
      <Footer />
      <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
