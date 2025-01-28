export default function Events() {
    return (
      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-blue-900 text-3xl font-bold text-center mb-6">Eventos</h2>
          <p className="text-center text-gray-600 mb-8">
            Participa en nuestros eventos y actividades destacadas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Hackatón San Marcos</h3>
              <p className="text-gray-600">
                Un espacio para innovar y desarrollar soluciones tecnológicas.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Taller de IA</h3>
              <p className="text-gray-600">
                Aprende sobre inteligencia artificial con expertos.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-lg font-bold text-blue-800 mb-4">
                Conferencia de Tecnología
              </h3>
              <p className="text-gray-600">
                Descubre las últimas tendencias en tecnología.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  