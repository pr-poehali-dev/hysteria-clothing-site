import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Беспроводные наушники Premium",
      price: 5990,
      originalPrice: 7990,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      rating: 5,
      isNew: true,
    },
    {
      id: 2,
      name: "Смарт-часы с GPS",
      price: 12990,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      rating: 4,
    },
    {
      id: 3,
      name: "Портативное зарядное устройство",
      price: 2490,
      originalPrice: 3490,
      image:
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
      rating: 4,
    },
    {
      id: 4,
      name: "Bluetooth колонка",
      price: 3990,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
      rating: 5,
      isNew: true,
    },
    {
      id: 5,
      name: "Умная лампа RGB",
      price: 1990,
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop",
      rating: 4,
    },
    {
      id: 6,
      name: "Игровая мышь Pro",
      price: 4490,
      originalPrice: 5990,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Популярные товары
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Самые востребованные товары нашего магазина с отличными отзывами
            покупателей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Показать все товары
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
