export const CartEmpty = () => {
  return (
    <div className="flex-column justify-center items-center gap-6 rounded-lg py-10 w-full max-w-sm drop-shadow-lg bg-white">
      <p className="uppercase tracking-wide font-bold text-xl">Cart is empty</p>
      <img
        className="w-28"
        src="/assets/shared/empty-cart.png"
        alt="empty-cart"
      />
    </div>
  );
};
