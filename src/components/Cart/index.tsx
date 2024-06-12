import { useAppStore } from "store";
import { CartItems } from "./CartItems";
import { CartEmpty } from "./CartEmpty";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, isCartOpen, toggleCartOpen, getTotal, removeAll } =
    useAppStore();
  const total = new Intl.NumberFormat().format(getTotal());

  const cartClasses = twMerge(
    "fixed top-0 pt-32 w-full h-screen bg-black bg-opacity-40 z-50 transition-all -translate-y-6 opacity-0 invisible duraiton-500",
    isCartOpen && "visible translate-y-0 opacity-100"
  );

  return (
    <section className={cartClasses} onClick={toggleCartOpen}>
      <div className="flex justify-end w-10/12 mx-auto max-w-screen-global">
        {cart.length > 0 ? (
          <div
            onClick={e => e.stopPropagation()}
            className="grid gap-8 rounded-lg p-6 w-full max-w-md drop-shadow-lg bg-white sm:p-8">
            <div className="flex justify-between">
              <p className="uppercase tracking-wider font-semibold text-xl text-accent">
                Cart {`(${cart.length})`}
              </p>
              <button
                onClick={removeAll}
                className="text-text font-semibold hover:underline">
                Remove all
              </button>
            </div>
            <CartItems cart={cart} />
            <div className="flex justify-between pt-4 border-t border-text sm:text-lg">
              <p className="uppercase font-bold text-text">Total</p>
              <p className="font-bold">$ {total}</p>
            </div>
            <Link
              to="/checkout"
              onClick={toggleCartOpen}
              className="btn btn-primary text-center w-full">
              Checkout
            </Link>
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </section>
  );
};
