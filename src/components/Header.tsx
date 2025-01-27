export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/IEEE_Computer.png" // Ruta del logo
            alt="IEEE-CS Logo"
            className="h-14" // Ajusta la altura del logo
          />
        </a>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Quiénes somos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Colaboradores
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Beneficios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Eventos
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón de acción */}
        <div>
          <a
            href="#"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            <strong>Quiero ser colaborador</strong>
          </a>
        </div>
      </div>
    </header>
  );
}
