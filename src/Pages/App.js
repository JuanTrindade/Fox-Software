import './Style.css';
import React from 'react';
import logo from '../Images/fox.png';
import {Link} from 'react-router-dom'

import Nav from '../Components/Navbar';
import Footer from '../Components/Footer';

function App() {
  async function realocate(){
    window.open('https://youtube.com.br', 'blank', 'noopener,noreferrer');
  }

  return (
    <div className='loginPageContainer'>
      <Nav />

      <form className="Container">
        <div className='logoContainer'>
          <img 
            width={100}
            height={100}
            className='logo'
            src={logo}
          />
        </div>
        <h1 className='Header'>Fox Software</h1>
        <div className='textContent'>
          <h3>
            Acesse o sistema da Fox Engine
          </h3>
        </div>
        <div className='containerInput'>
          <p className='textUserAndPass'>Usuario</p>
          <input 
            type="text"
            className="Input"
          />
          <div className='separation'/>
          <p className='textUserAndPass'>senha</p> 
          <input 
            type="password"
            className="Input"
          />
        </div>
        <div className='containerButton'>
          <Link to='/home' className='buttonTest'>Acessar</Link>
        </div>
        <div className='centering'>
          <a  href="https://br.linkedin.com/" target="blank" rel='noopener noreferrer' className='textUserAndPass'>Esqueci minha senha</a>
        </div>
      </form>

      <Footer />
    </div>
  );
}
export default App;
