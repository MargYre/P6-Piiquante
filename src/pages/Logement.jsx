import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Accordion from '../composants/accordion';
import Gallery from '../composants/Gallery'; // Assurez-vous que ce chemin est correct
import Rating from '../composants/Rating';

export default function Logement() 
{
    const { logementId } = useParams();
    const navigate = useNavigate();
    const [currentLogement, setCurrentLogements] = useState(null);
    useEffect(()=> {
        fetch('/data/logements.json')
        .then(res => res.json())
        .then(data =>{
            const logement = data.find(l => l.id === logementId);
            if(!logement) {
                navigate('/404')
            }
            setCurrentLogements(logement) })
        .catch(error => console.log(error))
    },[]);

    return (
        !currentLogement?
        <div>
            chargement ...
        </div>
        :
        <div>
            <Gallery images={currentLogement.pictures} />
            <div className='logement-info'>
                <div className='side-by-side'>
                    <div>
                        <h1>{currentLogement.title}</h1>
                        <p>{currentLogement.location}</p>
                        <p className='tags'>{currentLogement.tags.map(t => <span key={t}> {t}</span>)}</p>
                    </div>
                    <div className="host-info">
                        <div className="host-container">
                            <p className='host-name'>{currentLogement.host.name}</p>
                            <img src={currentLogement.host.picture} alt="Photo de profil du propriétaire du logement" />
                        </div>
                        <div className='rating'>
                        <Rating rating = {currentLogement.rating}/>
                    </div>
                    </div>
                </div>
                {/*<div className='side-by-side'>
                    <p className='tags'>{currentLogement.tags.map(t => <span key={t}> {t}</span>)}</p>
                    <div className='rating'>
                        <Rating rating = {currentLogement.rating}/>
                    </div>
                    <div className="host-container-mobile">
                        <p className='host-name'>{currentLogement.host.name}</p>
                        <img src={currentLogement.host.picture} alt="Photo de profil du propriétaire du logement" />
                    </div>   
    </div>*/}
                
                    
                <div className='side-by-side accordion'>
                    <Accordion title="Description" content={currentLogement.description}/>
                    <Accordion title="Équipements" content={currentLogement.equipments}/>
                </div>
            </div>
        </div>
    );
}