import { BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import './App.css';
import CartWidget from './Componentes/CartWidget/CartWidget';
import ItemListContainer from './Componentes/ItemSection/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar/NavBar';
import ItemDetailContainer from "./Componentes/ItemSection/ItemDetailContainer/ItemDetailContainer";
import Cart from './Componentes/Cart/Cart';
import { Context } from 'react';
import { CustomCartContext } from './Context/CustomCartContext';

function App() {
  return (
    <div className="App">
      <CustomCartContext>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='' element={<ItemListContainer/>}/>
            <Route path='/productos/' element={<ItemListContainer/>}/>
            <Route path='/productos/:category' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path="*" element=""/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <CartWidget/>
        </BrowserRouter>
      </CustomCartContext>
    </div>
  );
}

export default App;
