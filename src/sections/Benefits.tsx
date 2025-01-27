export default function Benefits() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        {/* Título Principal */}
        <h2 className="text-blue-900 text-3xl font-bold mb-6">
          ¿Por qué ser colaborador?
        </h2>
        <p className="text-gray-700 mb-8">
          Unirte como colaborador te brinda acceso a beneficios exclusivos que impulsarán tu carrera y tu crecimiento profesional.
        </p>

        {/* Lista de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Beneficio 1 */}
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">Networking</h3>
            <p className="text-gray-600">
              Conecta con profesionales e investigadores en tu área de especialización para colaborar en proyectos de alto impacto.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">Bolsa de Trabajo</h3>
            <p className="text-gray-600">
              Accede a una lista curada de oportunidades laborales en tu campo de especialización.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">
              Carta de Recomendación
            </h3>
            <p className="text-gray-600">
              Obtén una carta de recomendación oficial de IEEE para respaldar tu desarrollo profesional.
            </p>
          </div>

          {/* Beneficio 4 */}
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">
              Certificados
            </h3>
            <p className="text-gray-600">
              Recibe certificados que validen tus contribuciones y logros como colaborador.
            </p>
          </div>

          {/* Beneficio 5 */}
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">
              Cursos Gratuitos
            </h3>
            <p className="text-gray-600">
              Accede a una amplia gama de cursos gratuitos para mejorar tus habilidades y conocimientos.
            </p>
          </div>

          {/* Beneficio 6 */}
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-800 mb-4">
              Colaboración en Proyectos
            </h3>
            <p className="text-gray-600">
              Participa en proyectos colaborativos que se alineen con tu área de especialización e intereses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
