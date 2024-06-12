import { Link } from "react-router-dom";

export interface IProduct {
  id: number;
  new?: boolean;
  price: number;
  name: string;
  image: string;
  description: string;
  features: string;
  contents: { [key: string]: number | undefined };
  extraImages: string[];
}

interface IProductCardProps extends IProduct {
  type: string;
}

export const ProductCard = (product: IProductCardProps) => {
  return (
    <div
      className="flex-column items-center gap-8 w-full md:flex-row md:items-start md:gap-12 lg:items-center lg:gap-24 lg:even:flex-row-reverse"
      key={product.id}>
      <img
        className="rounded-lg drop-shadow-md w-full max-w-sm"
        src={product.image}
        alt={product.name}
      />
      <div className="flex-column items-center gap-6 text-center md:text-start md:items-start md:basis-full md:gap-8">
        {product.new && (
          <p className="uppercase tracking-[.6rem] text-accent">new product</p>
        )}
        <h2 className="uppercase tracking-wide font-bold text-3xl max-w-64 lg:max-w-80 lg:text-4xl">
          {product.name}
        </h2>
        <p className="text-text">{product.description}</p>
        <Link className="btn w-max" to={`/${product.type}/${product.id}`}>
          see product
        </Link>
      </div>
    </div>
  );
};
