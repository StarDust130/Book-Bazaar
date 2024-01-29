import Image from "next/image";

import Link from "next/link";

interface BookProps {
  key: number;
  item: any;
}


const Book = ({ key, item }: BookProps) => {
  const { id, title, cover_img, author, edition_count, first_publish_year } =
    item;
  return (
    <>
      <article
        key={id}
        className="group border border-gray-500 rounded-xl overflow-hidden transform transition-transform md:hover:scale-105 cursor-pointer hover:shadow-xl shadow-xl md:my-5 dark:shadow-xl dark:hover:shadow-xl"
      >
        <Link href={`/book/${item.id}`}>
          <Image
            width={100}
            height={100}
            alt="Book Cover"
            src={cover_img}
            className="h-56 w-full rounded-xl object-fill transition-transform"
          />
        </Link>

        <div className="p-4 text-center">
          <Link
            href={`/book/${item.id}`}
            passHref
            className="hover:text-blue-500"
          >
            <h3 className="mt-2 line-clamp-3 text-xl font-bold">{title}</h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm text-gray-700 font-semibold">
            {Array.isArray(author) ? author.join(", ") : ""}
          </p>
          <p className="mt-2 line-clamp-3 text-sm text-gray-700">
            <span className="font-semibold">Total Edition:</span>{" "}
            {edition_count}
          </p>
          <p className="mt-2 line-clamp-3 text-sm text-gray-700">
            <span className="font-semibold">First Publish Year:</span>{" "}
            {first_publish_year}
          </p>
        </div>
      </article>
    </>
  );
};
export default Book;
