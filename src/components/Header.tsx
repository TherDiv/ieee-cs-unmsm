export default function Header() {
    return (
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">IEEE-CS</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600">Membership</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600">Publications</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  