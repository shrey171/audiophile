import * as raw from "data";
import { AddToCart, IProduct, NotFound } from "components";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { type = "", id } = useParams();
  const data: { [key: string]: any } = raw;
  const keys = Object.keys(data);
  const key = keys.find(key => key.startsWith(type)) || "";
  const product: IProduct = data[key].find(
    (item: IProduct) => item.id === Number(id)
  );
  if (!product) return <NotFound />;
  const price = new Intl.NumberFormat().format(product.price);
  const contents = Object.keys(product.contents);

  return (
    <div className="flex-column gap-14 w-10/12 max-w-screen-global mx-auto py-20 lg:gap-24 lg:py-24">
      <section className="flex-column items-center gap-8 md:flex-row md:items-start lg:gap-24">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md rounded-lg"
        />
        <div className="md:w-full md:max-w-sm lg:max-w-lg">
          <p className="uppercase text-accent tracking-[.6rem] mb-3">
            new product
          </p>
          <h1 className="font-bold text-3xl uppercase mb-6">{product.name}</h1>
          <p className="text-text leading-6 mb-8">{product.description}</p>
          <p className="font-bold text-lg mb-3 md:text-xl">$ {price}</p>
          <AddToCart product={product} />
        </div>
      </section>

      <section className="flex-column gap-14 lg:pe-12 lg:gap-24 lg:flex-row">
        <div>
          <p className="font-bold text-2xl uppercase mb-5">features</p>
          <p className="text-text whitespace-pre-line">{product.features}</p>
        </div>
        <div>
          <p className="font-bold text-2xl uppercase mb-5">in the box</p>
          {contents.map(key => (
            <div key={key} className="flex gap-4 mb-2 w-max">
              <p className="text-accent font-bold">{product.contents[key]}x</p>
              <p className="text-text">{key}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:image-gallery">
        {product.extraImages.map(image => (
          <img
            key={image}
            src={image}
            alt={product.name}
            className="w-full rounded-lg"
          />
        ))}
      </section>
    </div>
  );
};
