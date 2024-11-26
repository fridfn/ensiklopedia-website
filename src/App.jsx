import react, { useState, useEffect } from 'react'

import './App.css'
import './components.css'
import Header from './components/header.jsx'
import List from './components/list.jsx'
import Navbar from './components/navbar.jsx'
import Loading from './components/loading.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
   setTimeout(() => {
    setLoading(false)
   }, 10000);
  }, []);
  
  return (
   <>
    <div className="container">
     {loading ? (
       <Loading />
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
