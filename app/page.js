import React from 'react'
import { Product, Herobanner, FooterBanner, Footer } from '@/components'
import { getBannerData } from '@/sanity/query'

const Home = async () => {

  const bannerData = await getBannerData()

  console.log(bannerData)
  return (
    <div>
      <Herobanner />
      <div className="products-heading">
        <h2>Best seller Products</h2>
        <p>Speaker There are many variaions pages</p>
      </div>
      <FooterBanner />
    </div>
  )
}

export default Home