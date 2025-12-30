export function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 pt-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div className="space-y-6">
            <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              🐶 Educación con amor y disciplina
            </div>

            <h2 className="text-gray-900 text-4xl font-bold leading-tight">
              Tu perro merece la mejor educación
            </h2>

            <p className="text-gray-600 text-lg">
              En Dog School entrenamos con amor, paciencia y disciplina para
              que tu perro sea feliz y equilibrado. Ofrecemos adiestramiento
              canino, baño, paseos y más.
            </p>
          </div>

          {/* IMAGEN */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1735597403677-2029485b4547?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Adiestramiento canino profesional"
                className="w-full h-[460px] object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-gray-900 font-medium">
                  "Entrenadores certificados con 4 años de experiencia"
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Especialistas en comportamiento canino
                </p>
              </div>
            </div>

            {/* DECORACIÓN */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-green-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-emerald-400 rounded-full opacity-20 blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
