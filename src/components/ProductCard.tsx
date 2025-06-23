import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  isNew,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {isNew && (
          <span className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Новинка
          </span>
        )}
        <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
          <Icon name="Heart" size={16} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm text-slate-500 ml-1">({rating})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-slate-900">{price} ₽</span>
            {originalPrice && (
              <span className="text-sm text-slate-500 line-through">
                {originalPrice} ₽
              </span>
            )}
          </div>

          <button className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Icon name="ShoppingCart" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
