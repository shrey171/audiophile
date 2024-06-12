import { ICartItem } from "store";
import { AddToCart } from "../AddToCart";

interface IProps {
  cart: ICartItem[];
}

export const CartItems = ({ cart }: IProps) => {
  return (
    <div className="grid gap-4">
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              className="hidden w-16 rounded-lg drop-shadow sm:inline-block"
              alt={item.name}
            />
            <div className="text-sm">
              <p>{item.name}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
          <AddToCart product={item} small />
        </div>
      ))}
    </div>
  );
};
