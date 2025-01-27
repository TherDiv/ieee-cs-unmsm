export default function Hero() {
  return (
    <section className="relative bg-blue-50 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Sección de Texto */}
        <div className="pl-8">
          <h2 className="text-orange-600 text-sm font-bold uppercase mb-2">
            ABOUT THE IEEE COMPUTER SOCIETY
          </h2>
          <h1 className="text-blue-900 text-4xl font-bold leading-tight mb-6">
            Fueling Computer Science <br /> and Technology
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Inspiring innovation and collaboration through cutting-edge technology.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Learn More →
          </a>
        </div>

        {/* Imagen */}
        <div className="relative">
          <img
            src="/hero-image.png" // Asegúrate de tener esta imagen en la carpeta `public/`
            alt="IEEE Members"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
