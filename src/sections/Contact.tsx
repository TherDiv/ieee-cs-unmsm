import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* Título */}
        <h2 className="text-blue-900 text-3xl font-bold mb-6">Contáctanos</h2>

        {/* Descripción */}
        <p className="text-gray-600 mb-8">
          Estamos aquí para ayudarte. Contáctanos si tienes preguntas,
          sugerencias o si quieres ser parte de nuestra comunidad.
        </p>

        {/* Información de contacto */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <p className="text-gray-700">
            <strong>Email:</strong> contacto@ieeecs-unmsm.edu.pe
          </p>
          <p className="text-gray-700">
            <strong>Teléfono:</strong> +51 123 456 789
          </p>
          <p className="text-gray-700">
            <strong>Dirección:</strong> Universidad Nacional Mayor de San
            Marcos, Lima, Perú
          </p>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-700 text-lg font-bold">
            ¡Síguenos en nuestras redes sociales para mantenerte actualizado!
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center space-x-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/ieee.cs.unmsm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
            aria-label="Facebook"
          >
            <FaFacebook size={32} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ieee.cs.unmsm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600"
            aria-label="Instagram"
          >
            <FaInstagram size={32} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/ieee-cs-unmsm/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
