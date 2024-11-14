import React from 'react'
import Banner from './components/Banner'
import Title from './components/Title'
import Services from './components/Services'
import Application from './components/Application'
import UIpresentation from './components/UIpresentation'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <Application/>
      <UIpresentation/>
      

    </div>
  )
}

export default Home