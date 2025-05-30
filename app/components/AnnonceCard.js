"use client";

import { useRouter } from 'next/navigation'; 

export default function AnnonceCard({annonce}) {

     const router = useRouter();

    const handleClick = () => {
    router.push(`/annonces/${annonce.id}`);
  };

    return (
        
        <div className="bg-light rounded-3xl lg:p-6 md:p-4 p-2 flex flex-col justify-between h-full lg:space-y-6 md:space-y-4 space-y-2 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className='lg:space-y-6 md:space-y-4 space-y-2'>
                    <img
                    src={annonce.image}
                    className="w-full h-60 object-cover rounded-xl"
                    alt={annonce.nom}
                    />
                    <h1 className="text-lg lg:text-3xl font-semibold text-primary ">{annonce.nom}</h1>
                    <p className="font-semibold ">{annonce.categorie}</p>
                    <p className="font-semibold ">{annonce.prix}</p>

                </div>
                <button
                    className="bg-primary text-secondary py-2 px-6 font-semibold rounded-3xl  w-fit hover:bg-dark"
                    onClick={handleClick}
                >
                    Voir détails
                </button>
            </div>

    );
}
