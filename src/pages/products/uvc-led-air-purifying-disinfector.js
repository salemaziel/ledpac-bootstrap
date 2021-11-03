import React from 'react'

import Layout from '../../components/layout'
import CARPage from '../../components/PageComponents/Products/car/CARPage'
import { GatsbySeo } from 'gatsby-plugin-next-seo';


const Car = () => (
    <Layout>
                <GatsbySeo
title='UVC LED Mobile Air Purifier and Disinfector'
description="UVC LED Air Purifier and Disinfector you can take anywhere. Perfect for your car, bedroom, or office."
/>
        <CARPage />

    </Layout>
)

export default Car