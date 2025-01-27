export default function TopBar() {
    return (
      <div className="bg-black text-white text-sm">
        <div className="container mx-auto flex justify-between items-center p-2">
          {/* Enlaces de la izquierda */}
          <div className="flex space-x-4 ml-2">
              IEEE.org
          </div>
          {/* Logo de IEEE en la derecha */}
          <div>
            <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">
              <img
                src="/ieee-logo.webp" 
                alt="IEEE Logo"
                className="h-6" 
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
  