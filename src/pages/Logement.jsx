import React from 'react'
import { useParams } from 'react-router-dom'

export default function Logement() {
  const {logementId}=useParams();
  return (
    <div>Logement {logementId}</div>
  )
}
