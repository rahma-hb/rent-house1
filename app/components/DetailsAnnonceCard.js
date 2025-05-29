"use client";

export default function DetailsAnnonceCard({annonce}) {

  

    return (
        
         <div className=" h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:space-x-8 md:space-x-6 space-x-2 lg:p-32 md:p-12 p-6 ">
            <div>
                <img
                src={annonce.image}
                className="w-full h-100 rounded-md shadow-2xl"
                />
            </div>
            <div className="flex flex-col lg:gap-6 md:gap-4 gap-2 justify-center">
                <h1 className="text-lg lg:text-3xl font-semibold text-primary ">{annonce.nom}</h1>
                <p className="font-semibold ">{annonce.categorie}</p>
                <p>{annonce.description}</p>
                <p className="font-semibold ">{annonce.price}</p>
                <button className="bg-primary py-2 px-6 text-secondary font-semibold rounded-3xl hover:bg-dark w-fit"   onClick={() => alert("Commande confirmée")}
 >Commander</button>
            </div>

        </div>

    );
}