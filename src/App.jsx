
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import { useDentistaStates } from "./Components/utils/global.context";


function App() {
    const { theme } = useDentistaStates(); 
    const app = theme === 'dark' ? 'dark' : 'light';
  
  return (
      <div className={app}>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/> 
              <Route path='/detail/:id' element={<Detail/>}/> 
              <Route path='/favs' element={<Favs/>}/> 
              <Route path='/contact' element={<Contact/>}/>
              <Route path='*' element={<h1>Ruta no encontrada...</h1>}/> //NotFound
          </Routes>  
          <Footer/>
      </div>
  );
}

export default App;
