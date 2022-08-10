import './Style.css';

import Nav from '../Components/Navbar';
import Footer from '../Components/Footer';

function Home(){
    return(
        <div className='homeContainer'>
            <Nav />
                <div className='contentBox'>
                    <h1 className=''>TEST</h1>  
                    <h1 className=''>TEST</h1>  
                </div>
                <div className='contentBox'>
                    <h1 className=''>TEST</h1>  
                    <h1 className=''>TEST</h1>  
                </div>
                <div className='contentBox'>
                    <h1 className=''>TEST</h1>  
                    <h1 className=''>TEST</h1>  
                </div>
                <div className='contentBox'>
                    <h1 className=''>TEST</h1>  
                    <h1 className=''>TEST</h1>  
                </div>
                <div className='contentBox'>
                    <h1 className=''>TEST</h1>  
                    <h1 className=''>TEST</h1>  
                </div>
                <div className='contentBox'>
                    <h1 className=''>TEST</h1>  
                    <h1 className=''>TEST</h1>  
                </div>
            <Footer />
        </div>
    );
}

export default Home;