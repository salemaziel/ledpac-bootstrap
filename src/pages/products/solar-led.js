import React from 'react'

import Layout from '../../components/layout'
import SolarPage from '../../components/PageComponents/Products/solar/SolarPage'
import SEO from "../../components/seo";

import { GatsbySeo } from 'gatsby-plugin-next-seo';



const Solar = () => (
    <Layout>
        {/*<SEO title="Solar Powered LED Lights" />*/}
        <GatsbySeo
title='Solar Powered LED Lights'
description='NEW HiP solar LED illumination breakthrough using super-efficient white LEDs for bright reliable adjustable illumination, powered by the sun.'
/>
        <SolarPage />
    </Layout>

)

export default Solar