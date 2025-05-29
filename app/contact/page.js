import ContactForm from "../components/form";


export default function Contact(){

    return(
        <div className="lg:h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 p-4 bg-white">

            <div className="flex flex-col gap-6 text-dark text-xl max-w-md mx-auto border border-dark rounded-lg bg-background shadow-2xl p-6">
                <div className="space-y-2">
                <p><strong>Adresse :</strong> Rue des Jardins, Tunis</p>
                <p><strong>Téléphone :</strong> +216 12 345 678</p>
                <p><strong>Email :</strong> contact@renthouse.tn</p>
                </div>

                <img
                src="house.jfif"
                alt="Maison à louer"
                className="mx-auto w-full max-w-sm rounded-2xl shadow-lg"
                />
            </div>

            <div className="w-full max-w-xl mx-auto">
                <ContactForm />
            </div>
    </div>
    );
}