import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/utils/ProductType";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type ProductItemProps = {
  product: Product;
};

function ProductItem({ product }: ProductItemProps) {
  const router = useRouter();

  const redirect = (id: number) => {
    router.push(`/productList/itemDetails/${id}`);
  };
  return (
    <div
      className="flex justify-center hover:scale-[1.1] transition duration-300 hover:shadow-md"
      onClick={() => redirect(product.id)}
    >
      <Card className="border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer">
        <div className="p-6 flex justify-center items-center">
          <div className="relative h-30 w-30">
            <Image
              src={product?.image}
              width={150}
              height={150}
              alt="Product Image"
              className="object-cover"
            />
          </div>
        </div>
        <div className="p-6">
          <CardHeader className="font-semibold text-xl mb-2">
            {product?.title}
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="text-gray-700 font-bold">${product?.price}</p>
            <Button variant="outline">
              <ShoppingCart />
              Add to Cart
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default ProductItem;
