import Image from "next/image";

export default function Home() {
  return (
  <section class="bg-white lg:grid lg:h-screen lg:place-content-center text-dark">
  <div
    className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
  >
    <div className="max-w-prose text-left">
      <h1 className="text-4xl font-bold sm:text-5xl">
         Trouvez votre
        <strong class="text-primary">maison idéale </strong>
         facilement
      </h1>

      <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
        accusamus impedit minima harum corporis iusto.
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <a
          className="inline-block rounded border bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-dark"
          href="/annonces"
        >
          Annonces
        </a>

        <a
          className="inline-block rounded border  px-5 py-3 font-medium  shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          href="#"
        >
          Publier
        </a>
      </div>
    </div>
     <div className="">
      <img
        src="house1.jfif"
        alt="Maison à louer"
      className="mx-auto  max-w-md md:block rounded-2xl"
      />
    </div>

    
  </div>
</section>
  );
}

