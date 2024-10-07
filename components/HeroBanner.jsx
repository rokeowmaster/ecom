import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
        <div>
            <p className="beats-solo">SNALL TEXT</p>
            <h3>MID TEXT</h3>
            <Image src="" width={40} height={40} alt="headphones" /> 
        </div>
        <div>
            <Link href="/produts/ID">
                <button type="button">BUTTON TEXT</button>
            </Link>
            <div className="desc">
                <h5>Description</h5>
                <p>DESCRIPTION</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner