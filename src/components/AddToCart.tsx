import { IProduct } from "components/ProductCard";
import { findItem, useAppStore } from "store";
import { twMerge } from "tailwind-merge";

interface IProps {
  className?: string;
  product: IProduct;
  small?: boolean;
}

export const AddToCart = ({ product, className, small }: IProps) => {
  const { cart, addProductToCart, removeProductFromCart } = useAppStore();
  const inCart = findItem(cart, product.id);
  const qtyButtonClass =
    "w-14 py-3 text-xl text-text bg-gray hover:bg-zinc-200";
  const smallerQtyButtonClass = small && "w-10 py-2 text-sm";

  return (
    <div className={className}>
      {inCart?.quantity ? (
        <div className="flex rounded overflow-clip drop-shadow-lg">
          <button
            className={twMerge(qtyButtonClass, smallerQtyButtonClass)}
            onClick={() => removeProductFromCart(product)}>
            -
          </button>
          <p
            className={twMerge(
              "w-14 flex items-center justify-center pointer-events-none bg-gray",
              small && "w-6 text-sm"
            )}>
            {inCart.quantity}
          </p>
          <button
            className={twMerge(qtyButtonClass, smallerQtyButtonClass)}
            onClick={() => addProductToCart(product)}>
            +
          </button>
        </div>
      ) : (
        <button
          className="btn w-full md:w-max"
          onClick={() => addProductToCart(product)}>
          Add to cart
        </button>
      )}
    </div>
  );
};
