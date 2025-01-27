export default function Collaborators() {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto">
          {/* Título */}
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
            Colaboradores
          </h2>
  
          {/* Introducción */}
          <p className="text-gray-600 text-center mb-12">
            Los colaboradores son miembros esenciales de nuestra comunidad, quienes contribuyen activamente al desarrollo de proyectos, eventos y actividades que impulsan el crecimiento tecnológico y profesional de nuestra institución.
          </p>
  
          {/* Qué hacen los colaboradores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Actividad 1 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-blue-800 mb-4">
                Organización de Eventos
              </h3>
              <p className="text-gray-600">
                Planifican y coordinan talleres, conferencias y hackatones para
                fomentar la innovación y el aprendizaje.
              </p>
            </div>
  
            {/* Actividad 2 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-blue-800 mb-4">
                Desarrollo de Proyectos
              </h3>
              <p className="text-gray-600">
                Participan en equipos de trabajo para diseñar soluciones tecnológicas que beneficien a la comunidad.
              </p>
            </div>
  
            {/* Actividad 3 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-blue-800 mb-4">
                Formación Académica
              </h3>
              <p className="text-gray-600">
                Facilitan el acceso a cursos, capacitaciones y recursos educativos para mejorar las habilidades de los miembros.
              </p>
            </div>
  
            {/* Actividad 4 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-blue-800 mb-4">
                Representación
              </h3>
              <p className="text-gray-600">
                Representan a la comunidad de San Marcos en eventos internacionales de IEEE.
              </p>
            </div>
  
            {/* Actividad 5 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-blue-800 mb-4">
                Mentoría
              </h3>
              <p className="text-gray-600">
                Brindan orientación a nuevos miembros para que se integren y
                contribuyan al crecimiento de la comunidad.
              </p>
            </div>
  
            {/* Actividad 6 */}
            <div className="p-6 bg-gray-100 rounded-md shadow-md">
              <h3 className="text-lg font-bold text-blue-800 mb-4">
                Difusión
              </h3>
              <p className="text-gray-600">
                Promueven actividades, proyectos y logros de IEEE San Marcos a
                través de diversos canales de comunicación.
              </p>
            </div>
          </div>
  
          {/* Llamado a la acción */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Conviértete en Colaborador →
            </a>
          </div>
        </div>
      </section>
    );
  }
  