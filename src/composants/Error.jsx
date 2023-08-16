import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className="error-message">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner à la page d'accueil</Link>
        </div>
    )
}