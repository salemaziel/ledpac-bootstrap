import React from 'react'

import Hero from './hero'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import ContentCardsSection from './ContentCardsSection'
import List from './list'


const HomePage = () => (
    <>
        <Hero />
        <SectionOne />
        <ContentCardsSection />
        <List />
        <SectionTwo />
        <SectionThree />
    </>
)

export default HomePage