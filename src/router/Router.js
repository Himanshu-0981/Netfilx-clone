import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Latest from '../pages/Latest';
import Movies from '../pages/Movies';
import MyList from '../pages/MyList';
import TvShows from '../pages/TvShows';

const Router = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                 <Route path='/' element={<Home />}></Route>
                 <Route path='/tvshows' element={<TvShows />}></Route>
                 <Route path='/movies' element={<Movies />}></Route>
                 <Route path='/latest' element={<Latest />}></Route>
                 <Route path='/mylist' element={<MyList />}></Route>
                 
            </Routes>
        </BrowserRouter>

    )
}

export default Router;
