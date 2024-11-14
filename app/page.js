import React from 'react'
import Banner from './components/Banner'
import Title from './components/Title'
import Services from './components/Services'
import Application from './components/Application'
import UIpresentation from './components/UIpresentation'
import Download from './components/Download'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Application/>
      <UIpresentation/>
      <Download/>
      

    </div>
  )
}

export default Home