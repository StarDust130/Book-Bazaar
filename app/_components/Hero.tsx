import SearchForm from "@/components/SearchForm";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center">
        <Image
          alt="Bookshelf"
          src="/bk-2.jpg"
          width={500}
          height={500}
          className="rounded-lg opacity-80 w-full h-[50vh] md:h-full object-cover"
          objectFit="cover"
        />
        <div className="absolute top-1/3 text-center w-full">
          <h1 className="md:text-5xl text-2xl font-bold mb-4">
            Find Your Next Read with Ease
          </h1>
          <p className="md:text-lg text-sm">
            Dive into a world of words. Search, discover, and uncover your next
            favorite book effortlessly.
          </p>
          <SearchForm />
        </div>
        <div className="absolute"></div>
      </div>
    </>
  );
};

export default Hero;
