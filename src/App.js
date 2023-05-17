import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Paginas/Inicio';
import Conocenos from './components/Paginas/Conocenos';
import Servicio from './components/Paginas/Servicio';
import Unete from './components/Paginas/Unete';
import Navbar from './components/Navegacion/Navbar';
import Footer from './components/Paginas/Footer';

function App() {
return (
	<>
		<Router>
		  <Navbar/>	
		  <Routes>
			<Route exact path="/" element={<Inicio />}></Route>		  
			<Route path="/conocenos" element={<Conocenos />}></Route>
			<Route path="/servicio" element={<Servicio />}></Route>
			<Route path="/unete" element={<Unete />}></Route>
		  </Routes>
		</Router>
		
		<Footer/>
		</>

);
}

export default App;
