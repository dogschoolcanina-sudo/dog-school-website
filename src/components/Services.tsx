import { GraduationCap, Sparkles, Footprints } from "lucide-react";
import paseos from "../assets/paseos.jpg";


export function Services() {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Adiestramiento Canino",
      subtitle: "Obediencia básica • Corrección de conducta • Socialización",
      description:
        "Programas personalizados para cachorros y adultos. Enseñamos comandos esenciales, corregimos comportamientos no deseados y fomentamos la socialización saludable.",
      features: [
        "Obediencia básica",
        "Corrección de conducta",
        "Socialización",
        "Cachorros y adultos",
        "Entrenamiento personalizado",
      ],
      image:
        "https://images.unsplash.com/photo-1735597403677-2029485b4547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjcwNTkyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-green-600",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Baño y Acicalado",
      subtitle: "Limpieza profunda • Secado • Recorte de uñas sin estrés",
      description:
        "Servicio completo de higiene con productos especializados. Incluye baño, secado profesional, limpieza de orejas y recorte de uñas seguro y sin estrés para tu mascota.",
      features: [
        "Higiene completa",
        "Secado profesional",
        "Limpieza de orejas",
        "Recorte de uñas seguro",
        "Productos especializados",
      ],
      image:
        "https://images.unsplash.com/photo-1597603413826-cd1c06b05222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBncm9vbWluZyUyMGJhdGh8ZW58MXx8fHwxNzY3MDU5MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-emerald-600",
    },
 {
  icon: <Footprints className="w-8 h-8" />,
  title: "Paseos Diarios",
  subtitle: "Ejercicio controlado para propietarios ocupados",
  description:
    "Ideal para dueños con agendas ocupadas. Ofrecemos paseos diarios con ejercicio controlado, socialización y supervisión profesional para mantener a tu perro activo y feliz.",
  features: [
    "Paseos diarios",
    "Ejercicio controlado",
    "Supervisión profesional",
    "Socialización",
    "Ideal para propietarios ocupados",
  ],
  image: paseos, // 👈 NUEVA IMAGEN LOCAL
  color: "bg-teal-600",
},
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm mb-4">
            🎓 Nuestros Servicios
          </div>
          <h2 className="text-gray-900 mb-4">
            Todo lo que tu perro necesita
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ofrecemos servicios completos de adiestramiento, higiene y cuidado
            para tu mejor amigo
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
{/* Image */}
<div
  className={`relative flex justify-center ${
    service.title === "Paseos Diarios"
      ? "p-4 flex items-center justify-center"
      : "rounded-2xl overflow-hidden shadow-xl"
  }`}
  style={{
    width: service.title === "Paseos Diarios" ? "380px" : "100%",
    margin: service.title === "Paseos Diarios" ? "0 auto" : "",
  }}
>
  <img
    src={service.image}
    alt={service.title}
    className={
      service.title === "Paseos Diarios"
        ? "w-[300px] h-auto rounded-[999px] object-contain shadow-xl bg-white p-2"
        : "w-full h-[400px] object-cover rounded-2xl"
    }
  />

  {/* Icono */}
  <div
    className={`absolute top-6 left-6 ${service.color} text-white p-4 rounded-xl shadow-lg`}
  >
    {service.icon}
  </div>

  <div
    className={`absolute top-6 left-6 ${service.color} text-white p-4 rounded-xl shadow-lg`}
  >
    {service.icon}
  </div>
</div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div>
                  <h3 className="text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-green-600">{service.subtitle}</p>
                </div>
                <p className="text-gray-600 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div
                        className={`${service.color} w-2 h-2 rounded-full`}
                      ></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/qr/EC6ACBFNFVHQM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block ${service.color} text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity`}
                >
                  Solicitar Servicio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}