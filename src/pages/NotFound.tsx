import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const NotFound = () => {
  const metadata = {
    title: "Audiophile - Not Found Page",
    description: "The page you were requesting either does not exist or was not found.",
  };
  
  return (
    <main className="flex-column justify-center text-center gap-8 h-hero bg-gray w-full">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      <h1 className="text-accent capitalize font-extrabold text-4xl sm:text-6xl">
        error 404
      </h1>
      <div className="grid gap-2">
        <p className="font-bold text-2xl sm:text-3xl">Page not found</p>
        <Link className="text-accent font-bold sm:text-lg underline underline-offset-2 hover:underline-offset-4 transition-all duration-200" to={"/"}>
          Go back to home
        </Link>
      </div>
    </main>
  );
};
