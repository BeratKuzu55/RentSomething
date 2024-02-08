import { useState } from 'react'
import './App.css'
import {useDispatch , useSelector} from "react-redux"
import Header from './components/Header'
import Footer from './components/Footer'
import Talep from './components/Talep'
import TalepSayfasi from './components/TalepSayfasi'

function App() {

  const isTalepSayfasiActive = useSelector(store => store.pageControl.value);
  return (
    <>

      <div>
        <Header></Header> 
        {isTalepSayfasiActive ? <TalepSayfasi></TalepSayfasi> :  <Talep></Talep>}
        <Footer></Footer>
      </div>
    
    </>
  )
}

export default App
