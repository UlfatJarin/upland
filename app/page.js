import React from 'react'
import Banner from './components/Banner'
import Title from './components/Title'
import Services from './components/Services'
import Application from './components/Application'
import UIpresentation from './components/UIpresentation'
import Download from './components/Download'
import AboutUs from './components/AboutUs'
import Trial from './components/Trial'
import QuesAns from './components/QuesAns'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Application/>
      <UIpresentation/>
      <Download/>
      <AboutUs/>
      <Trial/>
      <QuesAns/>
      

    </div>
  )
}

export default Home