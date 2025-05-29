"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Accueil", "Annonces", "Publier", "Inscription"];

  return (
    <nav className="flex flex-wrap justify-between items-center font-montserrat  px-4 sm:px-6 md:px-8 py-4 shadow-2xs shadow-primary bg-secondary relative z-50">
      
      
      <div className="h-16">
        <img src="logo.svg" alt="Logo" className="h-full object-contain" />
      </div>


      <div className="lg:hidden text-primary">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
   <div className="hidden lg:flex items-center gap-8">
        <ul className="flex gap-8 text-primary text-base md:text-xl lg:text-2xl items-center">
          {navItems.map((item) => (
            <li
              key={item}
              className="capitalize hover:text-dark hover:scale-105 hover:underline transition-all"
            >
              <Link href={`/${item === "Accueil" ? "" : item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

      
        <Link
          href="/connexion"
          className="ml-4 bg-primary text-white px-4 py-2 rounded-xl text-base hover:bg-dark transition"
        >
          Connexion
        </Link>
      </div>

    
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white flex flex-col gap-4 px-6 py-4 text-primary text-lg shadow-md lg:hidden">
          {navItems.map((item) => (
            <li key={item} className="capitalize hover:text-dark hover:underline">
              <Link
                href={`/${item === "Accueil" ? "" : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}

         
          <li>
            <Link
              href="/connexion"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-primary text-white px-4 py-2 rounded-xl hover:bg-dark transition"
            >
              Connexion
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
