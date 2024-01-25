import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <Link
              href="#top"
              className="inline-block rounded-full bg-black dark:bg-white dark:text-black p-2 text-white shadow transition hover:bg-gray-800 sm:p-3 lg:p-4"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <Logo />

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed  lg:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a className=" transition " href="/">
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a className=" transition " href="/">
                  {" "}
                  Services{" "}
                </a>
              </li>

              <li>
                <a className=" transition " href="/">
                  {" "}
                  Projects{" "}
                </a>
              </li>

              <li>
                <a className=" transition " href="/">
                  {" "}
                  Blog{" "}
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm  lg:text-right">
            Copyright{" "}
            <span className="dark:hover:text-yellow-400 font-semibold text-blue-500 hover:text-blue-700 dark:text-yellow-300 ">
              <Link href="https://github.com/StarDust130/Book-Bazaar">
                StarDust🌟
              </Link>
            </span>{" "}
            &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
