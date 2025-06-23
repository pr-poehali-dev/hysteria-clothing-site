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
    <div className="bg-white border border-gray-100 hover:border-gray-200 transition-colors duration-200 overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-80 object-cover" />
        {isNew && (
          <span className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-xs font-medium">
            НОВИНКА
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-medium text-black text-sm mb-2 uppercase tracking-wide">
          {name}
        </h3>

        <p className="text-xs text-gray-600 mb-3">
          Отправка в течении 4-8 дней
        </p>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-black">{price} р.</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {originalPrice} р.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
