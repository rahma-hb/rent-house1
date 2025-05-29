
'use client';
import React from 'react';
import { useState, useEffect} from 'react';
import AnnonceCard from '../components/AnnonceCard';


export default function AnnonceList() {

  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetch('/api/annonces')
      .then((res) => res.json())
      .then((data) => setAnnonces(data))
      .catch((err) => console.error('Erreur de chargement des annonces:', err));
  }, []);
 
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">Annonces disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {annonces.map((annonce) => (

          <AnnonceCard key={annonce.id} annonce={annonce}/>
      
        ))}
        
      </div>
    </div>
  );
}
