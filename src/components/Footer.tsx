import { Link } from "react-router-dom";
import FacebookSvg from "svgs/icon-facebook.svg?react";
import InstagramSvg from "svgs/icon-instagram.svg?react";
import TwitterSvg from "svgs/icon-twitter.svg?react";
import LogoSvg from "svgs/logo.svg?react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black">
      <div className="footer-accent-bar flex-column text-center items-center gap-12 mx-auto py-14 w-10/12 max-w-screen-global md:items-start md:text-start">
        <div className="flex-column items-center gap-12 w-full md:flex-row md:justify-between">
          <LogoSvg className="text-gray" />
          <ul className="flex-column gap-5 uppercase font-bold text-navlinks text-gray sm:flex-row">
            <Link
              to="/"
              className="cursor-pointer hover:text-accent transition-colors duration-300">
              home
            </Link>
            <Link
              to="/headphones"
              className="cursor-pointer hover:text-accent transition-colors duration-300">
              headphones
            </Link>
            <Link
              to="/speakers"
              className="cursor-pointer hover:text-accent transition-colors duration-300">
              speakers
            </Link>
            <Link
              to="/earphones"
              className="cursor-pointer hover:text-accent transition-colors duration-300">
              earphones
            </Link>
          </ul>
        </div>
        <p className="text-textLight text-sm max-w-lg md:text-md">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <div className="flex-column items-center gap-8 w-full md:flex-row md:justify-between">
          <p className="text-textLight text-sm">
            Copyright {year}. All Rights Reserved
          </p>
          <div className="flex gap-6 text-white">
            <FacebookSvg className="cursor-pointer hover:text-accent transition-colors duration-300" />
            <TwitterSvg className="cursor-pointer hover:text-accent transition-colors duration-300" />
            <InstagramSvg className="cursor-pointer hover:text-accent transition-colors duration-300" />
          </div>
        </div>
      </div>
    </footer>
  );
};
