export default function Collaborators() {
  return (
    <section id="collaborators" className="bg-gray-50 py-16">
      <div className="container mx-auto">
        {/* Título */}
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
          Colaboradores
        </h2>

        {/* Introducción */}
        <p className="text-gray-700 text-center mb-8">
          Los colaboradores son miembros fundamentales de nuestra comunidad, quienes, con su esfuerzo y dedicación, contribuyen al desarrollo de proyectos, eventos y actividades que fortalecen el impacto de IEEE Computer Society San Marcos.
        </p>
        <p className="text-gray-700 text-center mb-12">
          A continuación, te presentamos las principales áreas de colaboración y las funciones que desempeñan dentro de nuestra organización:
        </p>

        {/* Grid de Áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Talento Humano */}
          <div className="p-6 bg-white border-l-4 border-blue-500 shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">
              Talento Humano
            </h3>
            <p className="text-gray-700 mb-2">
              Responsable del bienestar y gestión del equipo, promoviendo una cultura organizacional fuerte.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Planificación y mejora del clima organizacional.</li>
              <li>Gestión del talento humano.</li>
              <li>Velar por el cumplimiento de normas internas.</li>
            </ul>
          </div>

          {/* Eventos y Relaciones Públicas */}
          <div className="p-6 bg-white border-l-4 border-blue-500 shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">
              Eventos y Relaciones Públicas
            </h3>
            <p className="text-gray-700 mb-2">
              Coordina y organiza eventos estratégicos para fortalecer la comunidad y sus conexiones.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Gestión y organización de eventos.</li>
              <li>Investigación de temas y ponentes.</li>
              <li>Alianzas estratégicas con empresas y universidades.</li>
            </ul>
          </div>

          {/* Logística y Finanzas */}
          <div className="p-6 bg-white border-l-4 border-blue-500 shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">
              Logística y Finanzas
            </h3>
            <p className="text-gray-700 mb-2">
              Maneja los recursos y la planificación presupuestaria de la organización.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Desarrollo y evaluación de presupuestos.</li>
              <li>Gestión de Google Forms y encuestas.</li>
              <li>Envío de correos masivos y logística de eventos.</li>
            </ul>
          </div>

          {/* Marketing y Publicidad */}
          <div className="p-6 bg-white border-l-4 border-blue-500 shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">
              Marketing y Publicidad
            </h3>
            <p className="text-gray-700 mb-2">
              Desarrolla estrategias de comunicación y difusión para fortalecer la imagen del IEEE-CS UNMSM.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Creación de contenido digital.</li>
              <li>Gestión de redes sociales.</li>
              <li>Edición de videos y materiales de marketing.</li>
            </ul>
          </div>

          {/* Proyectos e Innovación */}
          <div className="p-6 bg-white border-l-4 border-blue-500 shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">
              Proyectos e Innovación
            </h3>
            <p className="text-gray-700 mb-2">
              Encargado del desarrollo de proyectos tecnológicos y de investigación en IEEE-CS.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Gestión de proyectos tecnológicos.</li>
              <li>Uso de metodologías ágiles.</li>
              <li>Innovación en soluciones técnicas y estratégicas.</li>
            </ul>
          </div>

          {/* Desarrollo y Tecnología */}
          <div className="p-6 bg-white border-l-4 border-blue-500 shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">
              Desarrollo y Tecnología
            </h3>
            <p className="text-gray-700 mb-2">
              Área enfocada en el desarrollo de software y soluciones tecnológicas innovadoras.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Desarrollo de plataformas y herramientas digitales.</li>
              <li>Colaboración en proyectos de código abierto.</li>
              <li>Capacitación en nuevas tecnologías.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
