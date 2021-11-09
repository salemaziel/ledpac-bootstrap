import React from 'react'

import Hero from './hero'
import SectionOne from './sectionOne'
import SectionCTA from './sectionCTA'
import SectionTwo from './sectionTwo'
import SectionProducts from './SectionProducts'

//import ClientsSection from './ClientsSection'


const HomePage = () => (
    <>
        <Hero />
        <SectionOne />
        <SectionProducts />

        <SectionTwo />
        <SectionCTA />
    </>
)

export default HomePage