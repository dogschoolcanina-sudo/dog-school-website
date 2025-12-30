import { Instagram, Mail, Phone } from "lucide-react";
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src={logo} 
            alt="Dog School Logo" 
            className="w-24 h-auto mb-4" 
          />
          <p className="text-gray-600">
            Entrenamiento canino profesional y amoroso.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3 text-lg">Contacto</h3>
          <p className="flex items-center justify-center md:justify-start space-x-2 text-gray-700">
            <Phone className="w-5 h-5 text-green-600" />
            <span>+507 6007-3327</span>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-2 text-gray-700 mt-2">
            <Mail className="w-5 h-5 text-green-600" />
            <span>dogschoolcanina@gmail.com</span>
          </p>
        </div>

        {/* Redes */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3 text-lg">Síguenos</h3>
          <a
            href="https://www.instagram.com/dogschool_canina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start space-x-2 text-gray-700 hover:text-green-600 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span>@dogschool_canina</span>
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        © 2025 Dog School Canina. Todos los derechos reservados.
      </p>
    </footer>
  );
}
