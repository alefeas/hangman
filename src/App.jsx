import './styles/styles.scss';
import { Game } from './components/game.jsx/Game.jsx';
import { Tutorial } from './components/tutorial/Tutorial.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Game/>}/>
        <Route path='/tutorial' element={<Tutorial/>}/>
        <Route path='*' element={<Game/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
