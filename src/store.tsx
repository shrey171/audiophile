import { IProduct } from "components";
import { produce } from "immer";
import { create } from "zustand";

export interface ICartItem extends IProduct {
  quantity: number;
  price: number;
  image: string;
}

interface IStoreState {
  isCartOpen: boolean;
  cart: ICartItem[];
  getTotal: () => number;
  toggleCartOpen: () => void;
  addProductToCart: (product: IProduct) => void;
  removeProductFromCart: (product: IProduct) => void;
  removeAll: () => void;
}

export const findItem = (array: ICartItem[], id: number) =>
  array.find((item: ICartItem) => item.id === id);

export const useAppStore = create<IStoreState>()((set, get) => ({
  isCartOpen: false,
  cart: [],
  getTotal: () =>
    get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
  addProductToCart: (product: IProduct) =>
    set(
      produce(state => {
        const item = findItem(state.cart, product.id);
        item ? item.quantity++ : state.cart.push({ ...product, quantity: 1 });
      })
    ),
  removeProductFromCart: (product: IProduct) =>
    set(
      produce(state => {
        const cart = state.cart;
        const item = findItem(cart, product.id);
        if (!item) return;
        item.quantity > 1
          ? item.quantity--
          : (state.cart = cart.filter((i: ICartItem) => i.id !== product.id));
      })
    ),
  removeAll: () => set({ cart: [] }),
  toggleCartOpen: () => set(state => ({ isCartOpen: !state.isCartOpen })),
}));
