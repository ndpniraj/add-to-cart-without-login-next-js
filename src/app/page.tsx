import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const dummyProducts = [
  {
    id: "1",
    title: "Men's Casual T-Shirt",
    mrp: 29.99,
    salePrice: 19.99,
    percentOff: 33,
    thumbnail:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Women's Running Shoes",
    mrp: 79.99,
    salePrice: 59.99,
    percentOff: 25,
    thumbnail:
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Smartphone Case",
    mrp: 14.99,
    salePrice: 9.99,
    percentOff: 33,
    thumbnail:
      "https://images.unsplash.com/photo-1604671748253-e683240e7efa?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Laptop Backpack",
    mrp: 49.99,
    salePrice: 39.99,
    percentOff: 20,
    thumbnail:
      "https://images.unsplash.com/photo-1667411424598-96b5e5f3139b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "Wireless Earbuds",
    mrp: 59.99,
    salePrice: 49.99,
    percentOff: 17,
    thumbnail:
      "https://images.unsplash.com/photo-1655804439989-24758d6e96b8?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dummyProducts.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
}
