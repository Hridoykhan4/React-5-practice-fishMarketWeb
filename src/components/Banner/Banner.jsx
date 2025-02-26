const Banner = () => {
  return (
    <div className="w-11/12 px-4  mx-auto my-8  bg-[linear-gradient(135deg,rgba(0,0,0,0.2)_20%,rgba(0,0,0,0.4)_50%,transparent_80%),url('/banner-fish.jpg')] bg-blend-overlay  bg-cover bg-right rounded-lg shadow-lg">
      <div className="md:h-[100vh] h-[100vh] justify-center  md:py-0 flex-col space-y-5 text-white flex text-center">
        <h3 className="font-bold text-3xl">Buy Fresh Fishes From FishPalace</h3>
        <p className="font-semibold">
          We take pride in offering a wide variety of sustainably sourced fish
          and seafood, <br /> carefully selected to ensure premium quality and
          exceptional taste
        </p>
        <a
          href="#id"
          className="btn self-center px-10 bg-gradient-to-b from-red-500 via-yellow-900 to-green-200 text-white font-bold"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
