import React from 'react'
import aboutBanner from '../images/banner-about.png'

export default function BannerAbout() {
    return (
        <div className="home-banner">
            <img src={aboutBanner} alt="Banner Image" />
            <div className="overlay">
            </div>
        </div>
    )
}