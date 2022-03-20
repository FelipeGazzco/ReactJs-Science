import { BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import './App.css';
import CartWidget from './Componentes/CartWidget/CartWidget';
import ItemListContainer from './Componentes/ItemSection/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar/NavBar';
import ItemDetailContainer from "./Componentes/ItemSection/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:category' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path="*" element=""/>
        </Routes>
        <CartWidget/>
      </BrowserRouter>
    </div>
  );
}

export default App;
