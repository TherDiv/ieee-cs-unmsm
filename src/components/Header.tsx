export default function Header() {
  return (
    <>
      {/* Barra superior */}
      <div className="bg-black text-white text-sm">
        <div className="container mx-auto flex justify-between items-center p-2">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              IEEE.org
            </a>
            <a href="#" className="hover:underline">
              IEEE CS Standards
            </a>
            <a href="#" className="hover:underline">
              Career Center
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </div>

      {/* Barra principal */}
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
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Conferences
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Education & Career
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  More
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
              Join Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
