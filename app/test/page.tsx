import Image from "next/image";
import Link from "next/link";
const products = [
  {
    id: 1,
    name: "iPhone 13",
    price: "$799",
    image: "/iphone-13.jpg",
    viewed: true, // indicate if the product has been viewed by the user
  },
  {
    id: 2,
    name: "MacBook Pro",
    price: "$1299",
    image: "/macbook-pro.jpg",
    viewed: false,
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: "$249",
    image: "/airpods-pro.jpg",
    viewed: true,
  },
];

// create a component to display a single product
const ProductCard = ({ product }: any) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg p-4">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
        />
        {product.viewed && ( // show a badge if the product has been viewed
          <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-bl-lg">
            Đã xem
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">{product.price}</p>
        </div>
        <div className="mt-4">
          <Link
            href={`/products/${product.id}`}
            passHref
            className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

// create a component to display a list of products
const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Danh sách sản phẩm
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// export the product list component as the default component
export default ProductList;
