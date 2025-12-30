import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm mb-4">
            📞 Contáctanos
          </div>
          <h2 className="text-gray-900 mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Estamos aquí para responder tus preguntas y ayudar a tu perro a ser
            su mejor versión
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/qr/EC6ACBFNFVHQM1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-green-600 transition-colors"
                    >
                      6397-0807 / 6862-7878
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <a
                      href="mailto:dogschool.canina@gmail.com"
                      className="text-gray-900 hover:text-green-600 transition-colors"
                    >
                      dogschool.canina@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Instagram</p>
                    <a
                      href="https://www.instagram.com/dogschool_canina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-green-600 transition-colors"
                    >
                      @dogschool_canina
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Ubicación</p>
                    <p className="text-gray-900">Panamá</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Horario</p>
                    <p className="text-gray-900">Lunes - Sábado</p>
                    <p className="text-gray-600 text-sm">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                  ⭐
                </div>
                <div>
                  <p className="text-gray-900">4 Años de Experiencia</p>
                  <p className="text-gray-600 text-sm">
                    Entrenamiento profesional certificado
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Certificados en manejador canino, búsqueda y rescate en
                entornos urbanos y rurales"
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-gray-900 mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="6397-0807"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="service">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="adiestramiento">Adiestramiento Canino</option>
                  <option value="bano">Baño y Acicalado</option>
                  <option value="paseos">Paseos Diarios</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Cuéntanos sobre tu perro y qué necesitas..."
                ></textarea>
              </div>

              <button
                type="button"
                onClick={() => window.open("mailto:dogschool.canina@gmail.com", "_blank")}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Enviar Mensaje
              </button>

              <p className="text-gray-600 text-sm text-center">
                También puedes contactarnos directamente por{" "}
                <a
                  href="https://wa.me/qr/EC6ACBFNFVHQM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}