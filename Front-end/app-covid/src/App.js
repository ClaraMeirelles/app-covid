import { BrowserRouter } from 'react-router-dom'

import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";

import Logo from "./Components/Templates/Logo";
import Nav from "./Components/Templates/Nav";
import Routes from "./Routes";
import Footer from "./Components/Templates/Footer";


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Main from './Components/Templates/Main';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        {/* <FormularioCadastro /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
