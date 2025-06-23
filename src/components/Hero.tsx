const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Онлайн магазин
            <span className="text-purple-600 block">нового поколения</span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Откройте для себя уникальные товары с доставкой по всей стране.
            Качество, стиль и доступные цены в одном месте.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Смотреть каталог
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
