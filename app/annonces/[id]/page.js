"use client";

import { useEffect, useState } from 'react';
 import { useParams } from 'next/navigation';
import DetailsAnnonceCard from '@/app/components/DetailsAnnonceCard';

export default function AnnonceDetailPage() {


  const params = useParams();
  const id = params.id;

  const [annonce, setAnnonce] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/annonces/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        return response.json();
      })
      .then((data) => {
        setAnnonce(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center">Chargement de l'Annonce...</div>;
  }

  if (error) {
    return <div className="p-10 text-center text-red-500">{error}</div>;
  }

   return <DetailsAnnonceCard annonce={annonce} />;
}
