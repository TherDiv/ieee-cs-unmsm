export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 IEEE Computer Society. All rights reserved.</p>
          <nav className="mt-2">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Terms of Use</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
  