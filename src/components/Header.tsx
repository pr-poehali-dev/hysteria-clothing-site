import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black tracking-wide">
              PHRARI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
            >
              ВСЕ
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
            >
              ЕСТЬ В НАЛИЧИИ
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
            >
              КАСТОМЫ
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors text-sm font-medium"
            >
              НЕТ В НАЛИЧИИ
            </a>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
              Bag 0
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-black transition-colors"
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-gray-700 hover:text-black py-2 text-sm font-medium"
              >
                ВСЕ
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black py-2 text-sm font-medium"
              >
                ЕСТЬ В НАЛИЧИИ
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black py-2 text-sm font-medium"
              >
                КАСТОМЫ
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black py-2 text-sm font-medium"
              >
                НЕТ В НАЛИЧИИ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
