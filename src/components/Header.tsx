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
                Home
              </a>
            </li>
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
                Publications
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
