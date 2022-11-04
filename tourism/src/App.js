import Header from './Compnents/Header';
import Footer from './Compnents/Footer';
import Home from './Compnents/Home';
import './App.css';

import { Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
</Routes>
<Footer/>
    </div>
  );
}

export default App;
