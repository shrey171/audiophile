import { IProduct, ProductCard } from "components";
import { Helmet } from "react-helmet";

interface IProps {
  heading: string;
  products: IProduct[];
}

export const ProductList = ({ heading, products }: IProps) => {
  return (
    <main className="animate-fadeIn">
      <Helmet>
        <title>{`Audiophile - ${heading}`}</title>
      </Helmet>
      <h1 className="uppercase text-center tracking-wider font-bold text-3xl py-6 bg-black text-gray md:text-4xl md:py-12">
        {heading}
      </h1>
      <section className="flex-column gap-24 w-10/12 max-w-screen-global py-12 mx-auto lg:py-32">
        {products.map(product => (
          <ProductCard {...product} type={heading} key={product.id} />
        ))}
      </section>
    </main>
  );
};
