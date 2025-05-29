
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="flex flex-col gap-4 items-center py-4">
        <p>RentHouse © 2025</p>
        <a href="mailto:contact@renthouse.com" className="hover:underline">
          Contactez-nous
        </a>
        <div className="flex gap-4 text-2xl text-primary">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-light"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-light"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-light"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
