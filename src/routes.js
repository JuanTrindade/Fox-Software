import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './Pages/App';
import Home from './Pages/Home';

function Routering(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/home' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routering;