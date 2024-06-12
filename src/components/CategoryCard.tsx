import { Link } from "react-router-dom";
import ArrowRight from "svgs/icon-arrow-right.svg?react";

interface IProps {
  title: string;
  iconPath: string;
}

export const CategoryCard = ({ title, iconPath }: IProps) => {
  return (
    <Link to={`/${title}`} className="category-card group drop-shadow-md">
      <img className="w-48" src={iconPath} alt={title} />
      <p className="uppercase font-semibold mb-3">{title}</p>
      <p className="uppercase text-sm font-bold text-text relative">
        shop
        <ArrowRight className="absolute left-full top-1 ml-2 transition-all duration-300 group-hover:ml-3" />
      </p>
    </Link>
  );
};
