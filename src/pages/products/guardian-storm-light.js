import React from 'react'

import Layout from '../../components/layout'
import GuardianStormPage from '../../components/PageComponents/Products/guardian/GuardianStormPage'
import SEO from "../../components/seo";

import { GatsbySeo } from 'gatsby-plugin-next-seo';


const Cob = () => (
    <Layout>
        {/*<SEO title="Chip On Board LED Lights" />*/}
        <GatsbySeo
title='Guardian Storm Light LED Light Panel'
description='Guardian Storm Light Antiseptic and Anti-virus Air Cleaning LED Panel Light'
/>

        <GuardianStormPage />
    </Layout>

)

export default Cob