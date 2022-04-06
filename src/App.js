import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
   const [num, setNum] = useState(1)
  return (
    <>
    <Header/> 
   <main>
    
    <h1>{num}</h1> 
    <button onClick={() => setNum(currentNum => currentNum + 1)}
          >Submit</button>

    </main>
    <Footer />
    </>
  );
}

export default App;
