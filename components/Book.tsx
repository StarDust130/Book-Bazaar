import Image from "next/image";
import BookList from "./BookList";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        className="group border rounded-xl overflow-hidden transform transition-transform md:hover:scale-105 cursor-pointer hover:shadow-xl shadow-lg md:mx-20 "
      >
        <Link href={`/book/${item.id}`}>
          <Image
            width={100}
            height={100}
            alt="Book Cover"
            src={cover_img}
            className="h-56 w-full rounded-xl object-contain transition-transform"
          />
        </Link>

        <div className="p-4">
          <a href="#" className="hover:text-blue-500">
            <h3 className="mt-2 line-clamp-3 text-xl font-bold">{title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed font-bold">
            {author}
          </p>
          <p className="mt-2 line-clamp-3 text-sm/relaxed">
            <span className="font-bold">Total Edition:</span> {edition_count}
          </p>
          <p className="mt-2 line-clamp-3 text-sm/relaxed">
            <span className="font-bold">First Publish Year:</span>{" "}
            {first_publish_year}
          </p>
        </div>
      </article>
    </>
  );
};
export default Book;
