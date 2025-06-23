import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-900">Hysteria</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="text-slate-700 hover:text-purple-600 transition-colors">
              <Icon name="ShoppingCart" size={24} />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-700 hover:text-purple-600 transition-colors"
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-slate-700 hover:text-purple-600 py-2">
                Главная
              </a>
              <a href="#" className="text-slate-700 hover:text-purple-600 py-2">
                Каталог
              </a>
              <a href="#" className="text-slate-700 hover:text-purple-600 py-2">
                О нас
              </a>
              <a href="#" className="text-slate-700 hover:text-purple-600 py-2">
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
