import { useState, useEffect } from "react";
import { Instagram, Phone, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* LOGO (INDEPENDIENTE) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <img
  src={logo}
  alt="Dog School Logo"
  className="h-16 w-auto object-contain"
/>

        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="flex items-center justify-center py-3 pl-32 pr-32">

          {/* MENÚ CENTRADO */}
          <nav className="hidden md:flex space-x-8">
            {["inicio", "servicios", "nosotros", "galeria", "contacto"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-green-600 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
          </nav>
        </div>

        {/* ICONOS DERECHA */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center space-x-4">
          <a
            href="https://www.instagram.com/dogschool_canina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-600"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="https://wa.me/qr/EC6ACBFNFVHQM1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* BOTÓN MÓVIL */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MENÚ MÓVIL */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {["inicio", "servicios", "nosotros", "galeria", "contacto"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left text-gray-700 hover:text-green-600"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
