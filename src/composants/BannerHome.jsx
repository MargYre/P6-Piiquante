import React from 'react'
import homeBanner from '../images/banner-home.png'

export default function BannerHome() {
    return (
        <div className="home-banner">
            <img src={homeBanner} alt="Banner Image" />
            <div className="overlay">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}