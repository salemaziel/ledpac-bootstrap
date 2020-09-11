import React from 'react'

import Layout from '../../components/layout'
import RgbPage from '../../components/PageComponents/Products/rgb/RgbPage'
import SEO from "../../components/seo";
import SimpleReactLightbox from "simple-react-lightbox";



const RGB = () => (
    <SimpleReactLightbox>

    <Layout>
        <SEO title="RGB LED Grow Lights" />

        <RgbPage />
    </Layout>
    </SimpleReactLightbox>


)

export default RGB