import React from 'react'
import Accordion from '../composants/Accordion.jsx'
import BannerAbout from '../composants/BannerAbout.jsx'

export default function About() {
  return (
    <div>
      <BannerAbout/>
      <Accordion title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
    </div>
  )
}
