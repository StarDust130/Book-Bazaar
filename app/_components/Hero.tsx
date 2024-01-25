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
          className="rounded-lg opacity-80 dark:opacity-20 w-full min-h-[75vh] md:h-full object-cover"
        />
        <div className="absolute top-1/3 text-center w-full">
          <h1 className="md:text-5xl text-2xl font-bold mb-4">
            Find Your Next Read with Ease
          </h1>
          <p className="md:text-lg md:mx-60 text-sm font-semibold">
            Dive into a world of words. Search, discover, and uncover your next
            favorite book effortlessly. Immerse yourself in the enchanting world
            of literature. Effortlessly explore and discover your next
            captivating read. From timeless classics to contemporary gems, let
            our platform guide you through a universe of words, ensuring your
            reading journey is as delightful as the stories you uncover
          </p>
          <SearchForm />
        </div>
        <div className="absolute"></div>
      </div>
    </>
  );
};

export default Hero;
