import './Style.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import logo from '../Images/fox.png';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  async function realocate(){
    window.open('https://youtube.com.br', 'blank_', 'noopener,noreferrer');
  }

  return (
    <div className='pcontainer'>
      <nav className='nav'>
        <ul className='listStyle'>
          <li>
            <a className='textUserAndPass'>Fox Software ©</a>
          </li>
          <li>
            <button className='buttonNav'>Cadastre-se</button>
          </li>
        </ul>
      </nav>

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
          <button 
            className='buttonTest'
            onPress={() => realocate()}
          >Acessar</button>
        </div>
        <div className='centering'>
          <a  href="https://br.linkedin.com/" target="blank" rel='noopener noreferrer' className='textUserAndPass'>Esqueci minha senha</a>
        </div>
      </form>

      <footer className='footer'>
        <h1 style={{ height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', color: '#F2F2F2', fontSize: '22px', fontWeight: 'bold'}}>FoxSoftware ©</h1>
      </footer>
    </div>
  );
}
export default App;
