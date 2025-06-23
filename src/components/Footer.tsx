import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ShopHub</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Современный интернет-магазин с широким ассортimentом качественных
              товаров и быстрой доставкой по всей России.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" size={24} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Скидки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Новинки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Бренды
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Возврат
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 ShopHub. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
