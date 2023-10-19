import { BrowserRouter, Routes ,Route, NavLink } from 'react-router-dom';
import './App.css';
import Bollywood from './Routes/bollywood';
import Hollywood from './Routes/hollywood';
import Fitness from './Routes/fitness';
import Technology from './Routes/technology';
import Food from './Routes/food';

function App() {
  return (
    <>
      <BrowserRouter>
    <NavLink to={'/bollywood'}>Bollywood</NavLink>
    <NavLink to={'/hollywood'}>Hollywood</NavLink>
    <NavLink to={'/technology'}>Technology</NavLink>
    <NavLink to={'/fitness'}>Fitness</NavLink>
    <NavLink to={'/food'}>Food</NavLink>
      <Routes>
        <Route path='/bollywood' element={<Bollywood/>}></Route>
        <Route path='/hollywood' element={<Hollywood/>}></Route>
        <Route path='/fitness' element={<Fitness/>}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
        <Route path='/food' element={<Food/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
