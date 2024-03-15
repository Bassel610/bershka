import './App.css';
import './Responsive.css';
import MianPedg from './Componand/MianPedg/MainPedg';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import MainNew from "./Componand/AllNavPages/New-pages/MainNew" ; 
import  ACCESSORIES from "./Componand/AllNavPages/ACCESSORIES" ; 
import BAGS from  "./Componand/AllNavPages/BAGS" ; 
import BASICS from "./Componand/AllNavPages/BASICS"  ;
import CLOTHES from "./Componand/AllNavPages/CLOTHES" ;
import SHOES from "./Componand/AllNavPages/SHOES" ;
import Creators from "./Componand/AllNavPages/Bershka-Creators" ;
import Popular from "./Componand/AllNavPages/Most-popular" ;
import Jumpsuits from "./Componand/AllNavPages/Jumpsuits" ;
import Trousers from "./Componand/AllNavPages/Trousers" ;
import Sweatshirts from "./Componand/AllNavPages/Sweatshirts" ;
import Jackets from "./Componand/AllNavPages/Jackets";
import Shirts from "./Componand/AllNavPages/shirts";
import Skirts from "./Componand/AllNavPages/Skirts" ;
import Sale from './Componand/AllNavPages/Sale';
import AllViewsPages from './Componand/AllMainComponand/AllComponantScoNav/AllViewsPages';

function App() {
  return (
    <div className="App">
  <Routes>
      <Route path='/' element={<MianPedg />} /> 
      <Route path='/New' element={<MainNew /> } />
      <Route path='/CLOTHES' element={<CLOTHES /> } />
      <Route path='/Sale' element={<Sale />} />
      <Route path='/SHOES' element={<SHOES /> } />
      <Route path='/ACCESSORIES' element={<ACCESSORIES /> } />
      <Route path='/BAGS' element={<BAGS /> } />
      <Route path='/BASICS' element={<BASICS /> } />
      <Route path='/Creators' element={<Creators /> } />
      <Route path='/popular' element={<Popular /> } />
      <Route path='/Jumpsuits' element={<Jumpsuits /> } />
      <Route path='/Trousers' element={<Trousers /> } />
      <Route path='/Jackets' element={<Jackets /> } />
      <Route path='/Sweatshirts' element={<Sweatshirts /> } />
      <Route path='/T-shirts' element={<Shirts /> } />
      <Route path='/Shirts' element={<Shirts /> } />
      <Route path='/Skirts' element={<Skirts /> } />
      <Route path='/Shoes' element={<SHOES /> } />
      <Route path='/Accessories' element={<ACCESSORIES /> } />
      <Route path='/Barshka/:ProductId' element={<AllViewsPages />} />
  </Routes>
    </div>
  );
}

export default App;
