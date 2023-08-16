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
            {/* <h2>{Logements.map()} { logementTitle }</h2> */}
            {/* {Logements.map(l => <div key={l.id}>{l.title}</div>)} */}
            <h1>{Logements.find(l => l.id === logementId)?.title}</h1>
            <p>{Logements.find(l => l.id === logementId)?.location}</p>
        </div>
    );
}