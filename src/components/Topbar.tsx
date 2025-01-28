export default function TopBar() {
  return (
    <div className="bg-gray-800 text-white text-sm">
      <div className="container mx-auto flex justify-between items-center p-2 pl-4">
        {/* Enlaces de la izquierda */}
        <div className="flex space-x-4">
          <a
            href="https://www.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            IEEE.org
          </a>
          <a
            href="https://ieeexplore.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            IEEE Xplore Digital Library
          </a>
          <a
            href="https://standards.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            IEEE Standards
          </a>
          <a
            href="https://spectrum.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            IEEE Spectrum
          </a>
          <a
            href="https://www.ieee.org/sitemap.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            More Sites
          </a>
        </div>

        {/* Logo de IEEE en la derecha */}
        <div>
          <a
            href="https://www.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ieee-logo.webp" // Ruta del logo
              alt="IEEE Logo"
              className="h-6" // Tamaño del logo
            />
          </a>
        </div>
      </div>
    </div>
  );
}
