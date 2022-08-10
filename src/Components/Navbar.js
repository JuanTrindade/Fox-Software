import '../Pages/Style.css';

function Nav (){
    return(
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
    );
}

export default Nav;