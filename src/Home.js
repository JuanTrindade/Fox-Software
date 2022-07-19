import React from 'react';
import './Style.css';

function Home(){
    return(
        <div className='pcontainer'>
            <nav className='nav'>
                <ul className='listStyle'>
                    <li>
                        <a className='textUserAndPass'>Fox Software ©</a>
                    </li>
                    <li>
                        <button className='buttonNav'>Sair</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;