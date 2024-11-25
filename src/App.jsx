import react, { useState, useEffect } from 'react'
import './App.css'
import './components.css'
import Header from './components/header.jsx'
import List from './components/list.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
   setTimeout(() => {
    setLoading(false)
   }, 20);
  }, []);
  
  return (
   <>
    <div className="container">
     {loading ? (
       <p className="loading">Loading...</p>
     ) : (
       <>
         <Header />
         <section>
           <List />
           <List />
           <List />
           <List />
         </section>
         <Navbar />
       </>
     )}
   </div>
  </>
  )
}

export default App;
