import React from 'react';
import { useParams } from 'react-router-dom';
import Logements from "../data/logements.json"
import Accordion from '../composants/accordion';
import Gallery from '../composants/Gallery'; // Assurez-vous que ce chemin est correct
import bannerAbout from '../images/banner-about.png';
import bannerHome from '../images/banner-home.png';
import logoFooter from '../images/logo-footer.png';
import Rating from '../composants/Rating';

export default function Logement() 
{
    const { logementId } = useParams();
    const currentLogement = Logements.find(l => l.id === logementId);


    return (
        <div>
            <Gallery images={currentLogement.pictures} />
            <div className='logement-info'>
                <div className='side-by-side'>
                    <div>
                        <h1>{currentLogement.title}</h1>
                        <p>{currentLogement.location}</p>
                        
                    </div>
                    <div className="host-container">
                        <p className='host-name'>{currentLogement.host.name}</p>
                        <img src={currentLogement.host.picture} alt="Photo de profil du propriétaire du logement" />
                    </div>
                </div>
                <div className='side-by-side'>
                    <p className='tags'>{currentLogement.tags.map(t => <span>{t}</span>)}</p>
                    <div className='rating'>
                        <Rating rating = {currentLogement.rating}/>
                    </div>
                    <div className="host-container-mobile">
                        <p className='host-name'>{currentLogement.host.name}</p>
                        <img src={currentLogement.host.picture} alt="Photo de profil du propriétaire du logement" />
                    </div>   
                </div>
                
                    
                <div className='side-by-side accordion'>
                    <Accordion title="Description" content={currentLogement.description}/>
                    <Accordion title="Équipements" content={currentLogement.equipments}/>
                </div>
            </div>
        </div>
    );
}