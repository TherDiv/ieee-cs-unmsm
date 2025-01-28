"use client";

import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/IEEE_Computer.png" 
            alt="IEEE-CS Logo"
            className="h-14" 
          />
        </a>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                offset={-70} 
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link
                to="collaborators"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Colaboradores
              </Link>
            </li>
            <li>
              <Link
                to="benefits"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Beneficios
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botón de acción */}
        <div>
          <Link
            to="register"
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 cursor-pointer"
          >
            <strong>Quiero ser colaborador</strong>
          </Link>
        </div>
      </div>
    </header>
  );
}
