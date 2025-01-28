export default function Register() {
    return (
      <section id="register" className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            ¡Únete como Colaborador!
          </h2>
          <p className="text-gray-700 mb-8">
            Completa el formulario para ser parte de nuestra comunidad y acceder a
            beneficios exclusivos.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfrtW3cPd6W9wwRXB9FDowAOaPkiW5S0Zk28wAiev6J1lMQiw/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
          >
            Inscríbete aquí
          </a>
        </div>
      </section>
    );
  }
  