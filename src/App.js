import {useEffect, useState} from "react"
import './App.css';
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App() {
  let[search, setSearch]= useState("")
  let[message, setMessage]= useState("Search for Music!")
  let[data, setData]= useState([])
  
  return (
    <div className="App">
    <SearchBar/> 
    <br/>
      {message}
      <Gallery/>
    </div>
  );
}

export default App;
