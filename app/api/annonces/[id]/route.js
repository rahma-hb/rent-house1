let annonces = [
  {
    id: 1,
    nom: "Maison 1",
    image: "/im1.jpg",
    description: "maison de luxe haut standing",
    prix: 1000,
    categorie: "HS"
  },
  {
    id: 2,
    nom: "Maison  3",
    image: "/im2.jpg",
    description: " maison de luxe haut standing",
    prix: 1000.00,
    categorie: "HS"
  },
  {
    id: 3,
    nom: "Maison 3",
    image: "/im3.jpg",
    description: "Maison de lux haut standing",
    prix: 1000.00,
    categorie: "HS"
  },

]


export async function GET(request, { params }) {
  const { id } = params;  

  const annonce = annonces.find((annonce) => annonce.id === parseInt(id));

  if (annonce) {
    return new Response(JSON.stringify(annonce), { status: 200 });
  } else {
    return new Response('Annonce non trouvée', { status: 404 });
  }
}
