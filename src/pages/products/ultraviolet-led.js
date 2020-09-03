import React from 'react'

import Layout from '../../components/layout'
import UVCPage from '../../components/PageComponents/Products/uvc/UVCPage'
import SEO from "../../components/seo";


const UVC = () => (
    <Layout>
        <SEO title="UltraViolet (UV-C) LED Lights" />
        <UVCPage />
    </Layout>

)

export default UVC