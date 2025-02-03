import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import DetailPage from './pages/DetailPage/DetailPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import './style.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './redux/reducer';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())
  },[])
  return (
    <BrowserRouter>

    <Header />
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/:category' element={<CategoryPage />} />
        <Route path='/product/:id' element={<DetailPage />} />
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
