import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Form from ',/components/Forms'
function App() {

   const [num, setNum] = useState(1)
   const [username, setUsername] = useState('Type anything here!')
  return (
    <>
    <Header/> 
    <main>
    <Form />
    <h1>{num}</h1> 
    <button onClick={() => setNum(currentNum => 
    currentNum + 1)}> Submit</button>
    <br />
    <h1>{username}</h1>
    <input name = 'username' value = {username}
    onChange = {(e)  => setUsername(e.target. value)}/>

    </main>
    <Footer />
    </>
  );
}

export default App;
