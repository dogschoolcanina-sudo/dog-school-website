import { Award, Heart, User } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Entrenadores Certificados",
      description:
        "Certificados en manejador canino, búsqueda y rescate en entornos urbanos y rurales. Profesional con 4 años de experiencia en comportamiento canino.",
      color: "bg-green-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Métodos Positivos",
      description:
        "Técnicas basadas en refuerzo positivo y respeto animal. Entrenamos con amor, paciencia y disciplina para resultados duraderos.",
      color: "bg-emerald-600",
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Atención Personalizada",
      description:
        "Cada perro recibe un plan de entrenamiento adaptado a sus necesidades y nivel de aprendizaje. Evaluación individual y seguimiento continuo.",
      color: "bg-teal-600",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm mb-4">
            ⭐ ¿Por Qué Elegirnos?
          </div>
          <h2 className="text-gray-900 mb-4">
            Experiencia y compromiso con tu mascota
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Somos profesionales certificados dedicados al bienestar y educación
            de tu perro
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`${reason.color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6`}
              >
                {reason.icon}
              </div>
              <h3 className="text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="mb-4">¿Listo para transformar a tu perro?</h3>
          <p className="text-green-50 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudar a tu mejor amigo a
            ser más feliz y equilibrado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/qr/EC6ACBFNFVHQM1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors inline-block"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="mailto:dogschool.canina@gmail.com"
              className="bg-green-700 text-white border-2 border-white px-8 py-3 rounded-full hover:bg-green-800 transition-colors inline-block"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}