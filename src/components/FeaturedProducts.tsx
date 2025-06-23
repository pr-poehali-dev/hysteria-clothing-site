import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'DYED T-SHIRT "ANTAGONIST"',
      price: 2490,
      originalPrice: 2890,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      rating: 5,
      isNew: false,
    },
    {
      id: 2,
      name: 'DYED UNDERSHIRT "FALSCHER FILM"',
      price: 1790,
      originalPrice: 2190,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f37f4fc8?w=400&h=500&fit=crop",
      rating: 4,
      isNew: false,
    },
    {
      id: 3,
      name: 'UNDERSHIRT "FALSCHER FILM"',
      price: 1790,
      originalPrice: 2190,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
      rating: 4,
      isNew: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
