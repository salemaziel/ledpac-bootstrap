import React from 'react'

import Layout from '../../components/layout'
import SolarPage from '../../components/PageComponents/Products/solar/SolarPage'
import SEO from "../../components/seo";

const Solar = () => (
    <Layout>
        <SEO title="Solar Powered LED Lights" />

        <SolarPage />
    </Layout>

)

export default Solar