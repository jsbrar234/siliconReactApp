import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './Components/About/About'
import { NavBar } from './Components/CommonComponents/NavBar'
import { Contact } from './Components/Contact/Contact'
import { HomePage } from './Components/HomePage/HomePage'
import { CommoditiesStorage } from './Components/ServiceDetails/CommoditiesStorage'
import { Logistics } from './Components/ServiceDetails/Logistics'
import { ReverseLogistics } from './Components/ServiceDetails/ReverseLogistics'
import { Transportation } from './Components/ServiceDetails/Transportation'
import { ValueAdded } from './Components/ServiceDetails/ValueAdded'
import { Warehousing } from './Components/ServiceDetails/WarehousingServices'

import { Services } from './Components/Services/Services'
import { WhyUs } from './Components/WhyUs/WhyUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/why-us" exact element={<WhyUs />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/commodities-storage" exact element={<CommoditiesStorage />} />
            <Route path="/logistics" exact element={<Logistics />} />
            <Route path="/reverse-logistics" exact element={<ReverseLogistics />} />
            <Route path="/value-added-services" exact element={<ValueAdded />} />
            <Route path="/transportation" exact element={<Transportation />} />
            <Route path="/warehousing" exact element={<Warehousing />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  )
}

export default App
