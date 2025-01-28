export default function AboutUs() {
    return (
      <section id="about-us" className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Imagen */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 mr-6">
            <img
              src="/about-us-image.jpg" // Reemplaza con la ruta de tu imagen
              alt="Sobre Nosotros"
              className="rounded-lg shadow-lg"
            />
          </div>
  
          {/* Contenido */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-blue-900 text-3xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-gray-600 mb-4">
              El IEEE Computer Society de San Marcos es una comunidad que
              conecta a estudiantes, investigadores y profesionales interesados
              en las últimas tendencias tecnológicas, creando un espacio de
              aprendizaje continuo y colaboración.
            </p>
            <p className="text-gray-600">
              Nuestra misión es impulsar el desarrollo de habilidades técnicas y
              de liderazgo, fortaleciendo el vínculo entre la academia y la
              industria para enfrentar los desafíos del futuro.
            </p>
          </div>
        </div>
      </section>
    );
  }
  