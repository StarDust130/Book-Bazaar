import Carousels from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header />
      <section
        id="top"
        className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center"
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-4xl font-bold  md:text-5xl">
              Unlock the Universe of Imagination
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mt-4 md:mt-6">
              Immerse yourself in the enchanting realm of books, where each page
              holds the power to transport you to unexplored worlds, ignite your
              curiosity, and connect you with the profound wisdom of literary
              minds. Unleash the magic of reading and embark on an extraordinary
              journey of endless possibilities.
            </p>

            <div className="mt-6 md:mt-10">
              <Link href="/home">
                <Button variant={"default"}>Get Started Now</Button>
              </Link>
            </div>
          </div>
        </div>

        <Image
          alt="Violin"
          src="/bk-1.jpeg"
          width={700}
          height={500}
          className="rounded-lg "
        />
      </section>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold  sm:text-4xl">
              Dive into the World of Books
            </h2>

            <p className="mt-4 ">
              Discover a curated collection of literary treasures on our book
              platform. Immerse yourself in captivating stories, expand your
              knowledge, and find your next great read. Join a community of book
              enthusiasts who trust our platform to explore, share, and indulge
              in the magic of literature.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium ">Total Sales</dt>

                <dd className="text-4xl font-extrabold  md:text-5xl">$4.8m</dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Official Addons
                </dt>

                <dd className="text-4xl font-extrabold  md:text-5xl">24</dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium ">
                  Total Addons
                </dt>

                <dd className="text-4xl font-extrabold  md:text-5xl">86</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <Carousels />
      {/* <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-300 sm:text-3xl">
              New Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li>
              <a href="#" className="group relative block">
                <Image
                  src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="books"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  width={500}
                  height={500}
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Casual Trainers
                  </h3>

                  <Link href="/home">
                    <Button variant={"default"}>Shop Now</Button>
                  </Link>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group relative block">
                <Image
                  src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="books"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  width={500}
                  height={500}
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Winter Jumpers
                  </h3>

                  <Link href="/home">
                    <Button variant={"default"}>Shop Now</Button>
                  </Link>
                </div>
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" className="group relative block">
                <Image
                  src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                  alt="books"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  width={500}
                  height={500}
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Skinny Jeans gray
                  </h3>

                  <Link href="/home">
                    <Button variant={"default"}>Shop Now</Button>
                  </Link>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section> */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Watches
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="group block">
                    <Image
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                      width={500}
                      height={500}
                    />

                    <div className="mt-3">
                      <h3 className="font-medium  group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p className="mt-1 text-sm ">$150</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="group block">
                    <Image
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                      width={500}
                      height={500}
                    />

                    <div className="mt-3">
                      <h3 className="font-medium  group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p className="mt-1 text-sm ">$150</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default page;
