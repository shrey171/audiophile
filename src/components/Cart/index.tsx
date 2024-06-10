import { useAppStore } from "store";
import { CartItems } from "./CartItems";
import { CartEmpty } from "./CartEmpty";
import { twMerge } from "tailwind-merge";

export const Cart = () => {
  const { cart, isCartOpen, removeAll } = useAppStore();

  const cartClasses = twMerge('fixed top-32 w-full z-50 transition-all -translate-y-6 opacity-0 invisible duraiton-500', isCartOpen && 'visible translate-y-0 opacity-100');

  return (
    <section className={cartClasses}>
      <div className="flex justify-end w-10/12 mx-auto max-w-screen-global">
        {cart.length > 0 ? (
          <div className="grid gap-8 rounded-lg p-4 w-full max-w-md drop-shadow-lg bg-white md:p-8">
            <div className="flex justify-between">
              <p className="uppercase tracking-wider font-semibold text-xl text-accent">
                Cart {`(${cart.length})`}
              </p>
              <button onClick={removeAll} className="hover:underline">
                Remove all
              </button>
            </div>
            <CartItems cart={cart} />
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </section>
  );
};
