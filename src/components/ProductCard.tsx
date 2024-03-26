import { Product } from "@/context/CartProvider";
import Image from "next/image";
import { FC } from "react";
import BuyingOptions from "./BuyingOptions";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="w-full bg-white shadow-md rounded overflow-hidden relative">
      <div className="w-full aspect-square relative">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="w-full aspect-square object-cover"
          fill
        />
      </div>

      <div className="p-4 space-y-2">
        <h1 className="font-semibold text-2xl">{product.title}</h1>
        <div className="flex items-center space-x-3">
          <p className="line-through italic text-gray-500">
            MRP: ${product.mrp}
          </p>
          <p className="font-semibold">Sale Price: ${product.salePrice}</p>
        </div>
      </div>

      <span className="absolute top-2 right-2 font-semibold bg-orange-600 p-2 rounded-md inline-block text-sm text-white shadow-md">
        {product.percentOff}% Off
      </span>

      <BuyingOptions product={product} />
    </div>
  );
};

export default ProductCard;
