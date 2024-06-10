import { Cart, Footer, Navbar } from "components";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const path = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <Navbar />
      <Cart />
      <Outlet />
      <Footer />
    </>
  );
};
