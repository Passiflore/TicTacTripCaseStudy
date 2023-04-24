import './App.css'
import React, {useEffect, useState} from 'react'
import SearchBar from './components/SearchBar'
import Header from './components/Hearder'
import Cards from './components/Cards'

function App() {

  return (
    <>
      <Header></Header>
      <a className='headerOfferImg'> 
        <img src="../src/assets/img/header.jpg"></img>
      </a>
      <SearchBar></SearchBar>
      <body className="homeBody">
        <Cards></Cards>
      </body>
    </>
  )
}

export default App
