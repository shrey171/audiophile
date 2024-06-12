import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { useAppStore } from "store";
import { Close, Hamburger, Logo, Cart } from "svgs";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleCartOpen = useAppStore(state => state.toggleCartOpen);
  const isCartOpen = useAppStore(state => state.isCartOpen);

  const cartIconClasses = twMerge(
    "cursor-pointer hover:text-accent transition-colors duration-200",
    isCartOpen && "text-accent"
  );

  const expandedNavClasses = twMerge(
    "flex items-center absolute h-0 w-full border-divider bg-black overflow-clip transition-all duration-500 md:hidden",
    open && "border-b h-48"
  );
  
  const ToggleIcon = open ? (
    <Close className="hover:text-accent transition-colors duration-200" />
  ) : (
    <Hamburger className="hover:text-accent transition-colors duration-200" />
  );


  return (
    <nav className="w-full bg-black text-white sticky top-0 z-50">
      <div className="flex justify-between py-9 w-10/12 max-w-screen-global mx-auto border-b border-divider">
        <button className="md:hidden" onClick={() => setOpen(prev => !prev)}>
          {ToggleIcon}
        </button>
        <Logo />
        <ul className="hidden gap-6 uppercase font-bold text-navlinks md:flex">
          <li className="cursor-pointer hover:text-accent transition-colors duration-200">
            <Link to="/">home</Link>
          </li>
          <li className="cursor-pointer hover:text-accent transition-colors duration-200">
            <Link to="/headphones">headphones</Link>
          </li>
          <li className="cursor-pointer hover:text-accent transition-colors duration-200">
            <Link to="/speakers">speakers</Link>
          </li>
          <li className="cursor-pointer hover:text-accent transition-colors duration-200">
            <Link to="/earphones">earphones</Link>
          </li>
        </ul>
        <Cart onClick={toggleCartOpen} className={cartIconClasses} />
      </div>
      <div className={expandedNavClasses}>
        <ul className="flex-column gap-6 w-10/12 mx-auto uppercase font-bold text-navlinks transition-all duration-0 md:flex">
          <li
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-accent transition-colors duration-200">
            <Link to="/">home</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-accent transition-colors duration-200">
            <Link to="/headphones">headphones</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-accent transition-colors duration-200">
            <Link to="/speakers">speakers</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="cursor-pointer hover:text-accent transition-colors duration-200">
            <Link to="/earphones">earphones</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
