import React from 'react';
import { useParams } from 'react-router-dom';
import Logements from "../data/logements.json"
import Accordion from '../composants/accordion';
import Gallery from '../composants/Gallery'; // Assurez-vous que ce chemin est correct
import bannerAbout from '../images/banner-about.png';
import bannerHome from '../images/banner-home.png';
import logoFooter from '../images/logo-footer.png';

export default function Logement() 
{
    const { logementId } = useParams();
    const { logementTitle } = useParams();

    const logementImages = [
        bannerAbout,
        bannerHome,
        logoFooter
    ];

    return (
        <div>
            Logement {logementId}
            <Gallery images={logementImages} />
            <div className='logement-info'>
                <div>
                    <h1>{Logements.find(l => l.id === logementId)?.title}</h1>
                    <p>{Logements.find(l => l.id === logementId)?.location}</p>
                    <p>{Logements.find(l => l.id === logementId)?.tags}</p>
                </div>
                <div>
                    <p>{Logements.find(l => l.id === logementId)?.host.name}</p>
                    <img src={Logements.find(l => l.id === logementId)?.host.picture} alt="Photo de profil du propriétaire du logement" />
                </div>
            </div>
        </div>
    );
}