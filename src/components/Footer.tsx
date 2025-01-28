import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Sección 1: Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contáctanos
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contacto@ieeecs-unmsm.edu.pe"
                className="text-white hover:underline"
              >
                contacto@ieeecs-unmsm.edu.pe
              </a>
            </p>
            <p className="text-gray-300 text-sm mb-2">
              <strong>Teléfono:</strong> +51 987 654 321
            </p>
            <p className="text-gray-300 text-sm">
              <strong>Ubicación:</strong> Universidad Nacional Mayor de San
              Marcos, Lima, Perú
            </p>
          </div>

          {/* Sección 2: Redes Sociales */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">
              Síguenos
            </h3>
            <div className="flex justify-center md:justify-end space-x-5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ieee.cs.unmsm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition transform hover:scale-110"
              >
                <FaFacebookF size={28} />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ieee.cs.unmsm/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition transform hover:scale-110"
              >
                <FaInstagram size={28} />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/ieee-cs-unmsm/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition transform hover:scale-110"
              >
                <FaLinkedinIn size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright y enlaces */}
        <div className="text-center text-gray-400 text-xs mt-8 border-t border-gray-700 pt-4">
          <p className="mt-2">
            2025 IEEE CS UNMSM
          </p>
        </div>
      </div>
    </footer>
  );
}
