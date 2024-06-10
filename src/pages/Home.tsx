import { CategoryCard } from "components";
import { Link } from "react-router-dom";
import * as data from "data";

export const Home = () => {
  const heroId = data.headphonesData[0].id;
  const firstProductId = data.speakersData[0].id
  const secondProductId = data.speakersData[1].id
  const thirdProductId = data.earphonesData[0].id
  
  return (
    <main className="grid gap-24 lg:gap-36 pb-20 lg:pb-32">
      {/* Hero section */}
      <section
        className="flex items-center min-h-[30rem] h-[100vw] text-white bg-black bg-no-repeat bg-contain bg-top
      bg-[url('/src/assets/home/image-hero-mobile.jpg')] sm:h-hero md:bg-[url('/src/assets/home/image-hero-tablet.jpg')] lg:bg-[url('/src/assets/home/image-hero-desktop.jpg')] lg:bg-right">
        <div className="grid gap-4 w-10/12 mx-auto place-items-center max-w-screen-global sm:gap-6 md:gap-8 lg:place-items-start">
          <p className="uppercase tracking-[.6rem] text-textLight w-max">
            new product
          </p>
          <h1 className="uppercase text-center font-bold text-3xl leading-snug w-fit max-w-md sm:text-5xl lg:text-6xl lg:text-start">
            XX99 Mark II Headphones
          </h1>
          <p className="text-textLight text-center sm:w-96 lg:text-start">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link className="btn w-max" to={`/headphones/${heroId}`}>
            see product
          </Link>
        </div>
      </section>

      {/* Category section */}
      <section className="flex-column gap-4 w-10/12 max-w-screen-global mx-auto lg:gap-8 -translate-y-6 md:flex-row">
        <CategoryCard
          title="headphones"
          iconPath="/src/assets/home/image-headphones.png"
        />
        <CategoryCard
          title="speakers"
          iconPath="/src/assets/home/image-speakers.png"
        />
        <CategoryCard
          title="earphones"
          iconPath="src/assets/home/image-earphones.png"
        />
      </section>

      {/* Product Section */}
      <section className="flex-column gap-10 w-10/12 max-w-screen-global mx-auto">
        <div
          className="flex-column items-center gap-6 py-24 px-10 rounded-lg overflow-clip text-white 
        bg-accent bg-[url('svgs/pattern-circles.svg')] bg-top bg-[size:30rem] bg-no-repeat lg:flex-row lg:bg-pos-pattern-circles lg:bg-[size:70%] lg:gap-36 lg:px-24">
          <img
            className="w-48 md:w-72 xl:w-96 lg:translate-y-2"
            src="src/assets/home/image-speaker-zx9.png"
            alt="speaker-zx9"
          />
          <div className="flex-column items-center text-center gap-4 pt-8 md:gap-6 lg:items-start lg:text-start">
            <h2 className="uppercase font-semibold text-3xl leading-snug w-min sm:text-5xl lg:text-6xl">
              zx9 speaker
            </h2>
            <p className="text-textLight max-w-[22rem]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link className="btn btn-black w-max" to={`/speakers/${firstProductId}`}>
              see product
            </Link>
          </div>
        </div>
        <div className="ps-10 py-28 rounded-lg bg-[url('src/assets/home/image-speaker-zx7.jpg')] bg-cover bg-no-repeat bg-bottom md:px-24">
          <div className="flex-column gap-4 md:gap-6">
            <p className="uppercase font-semibold text-2xl md:text-3xl">
              zx7 speaker
            </p>
            <Link className="btn btn-outline w-max" to={`/speakers/${secondProductId}`}>
              see product
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 rounded-lg overflow-clip md:gap-10">
          <img
            className="w-full md:rounded-lg"
            src="src/assets/home/image-earphones-yx1.jpg"
            alt="earphones-yx1"
          />
          <div className="flex-column justify-center items-center gap-4 py-8 bg-gray md:gap-6 md:rounded-lg">
            <p className="uppercase font-semibold text-2xl md:text-3xl">
              yx1 earphones
            </p>
            <Link className="btn btn-outline w-max" to={`/earphones/${thirdProductId}`}>
              see product
            </Link>
          </div>
        </div>
      </section>

      <section className="flex-column gap-6 text-center w-10/12 max-w-screen-global mx-auto md:flex-row-reverse md:text-start lg:gap-24">
        <img
          className="w-full rounded-lg"
          src="src/assets/home/image-best-gear.jpg"
          alt="best-gear"
        />
        <div className="flex-column justify-center gap-6 basis-full">
          <p className="uppercase tracking-wider font-semibold text-[1.7rem] lg:text-[2.5rem]">
            Bringing you the <span className="text-accent">best</span> audio
            gear
          </p>
          <p className="text-text">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>
    </main>
  );
};
