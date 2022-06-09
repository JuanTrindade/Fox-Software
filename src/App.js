import './Style.css';
import React from 'react';
import logo from './fox.png';

function App() {
  return (
    <div className='pcontainer'>
        <div className="Container">
          <div className='logoContainer'>
            <img 
              width={100}
              height={100}
              className='logo'
              src={logo}
            />
          </div>
          <header>
            <h1 className='Header'>Fox Software</h1>
          </header>
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
            <button className='buttonTest'>Acessar</button>
          </div>
          <div className='centering'>
            <a href='www.youtube.com' className='textUserAndPass'>Esqueci minha senha</a>
          </div>
        </div>
    </div>
  );
}
export default App;
