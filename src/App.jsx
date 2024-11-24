import { useState } from 'react'
import './App.css'
import './components.css'
import Header from './components/header.jsx'
import List from './components/list.jsx'

function App() {
  return (
    <div class="container">
     <Header />
     <section>
      <List />
      <List />
      <List />
     </section>
    </div>
  )
}

export default App;
