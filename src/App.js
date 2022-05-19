import './App.css';
import { useState } from 'react'
import { Header } from './movie/Header';
import {Movie} from './movie/Movie'
import 'antd/dist/antd.css'


export const  App = () => {
  const [categoriesSelected, setCategoriesSelected] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className="App-content" >
      <div className="App-header">
        <Header setCategoriesSelected={setCategoriesSelected} categoriesSelected={categoriesSelected} setCurrentPage={setCurrentPage} />
      </div>
      <div className="App-list">
        <Movie categoriesSelected={categoriesSelected} setCurrentPage={setCurrentPage} currentPage={currentPage} /> 
      </div>
    </div>
  );
}