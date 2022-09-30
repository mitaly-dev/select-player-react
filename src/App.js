import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  AOS.init();

  let [addPlayer,setAddPlayer]=useState([])

  return (
    <div>
    <Header addPlayer={addPlayer} setAddPlayer={setAddPlayer}></Header>
    <Main addPlayer={addPlayer} setAddPlayer={setAddPlayer}></Main>
    </div>
  );
}

export default App;
