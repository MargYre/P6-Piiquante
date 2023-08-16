import React from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '../composants/accordion';
import Gallery from '../composants/Gallery'; // Assurez-vous que ce chemin est correct
import bannerAbout from '../images/banner-about.png';
import bannerHome from '../images/banner-home.png';
import logoFooter from '../images/logo-footer.png';

export default function Logement() 
{
    const { logementId } = useParams();

    const logementImages = [
        bannerAbout,
        bannerHome,
        logoFooter
    ];

    return (
        <div>
            Logement {logementId}
            <Gallery images={logementImages} />
        </div>
    );
}