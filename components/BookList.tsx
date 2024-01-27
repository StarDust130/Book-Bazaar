"use client";

import { useGlobalContext } from "../app/context";
import Loading from "../app/loading";
import Book from "../components/Book";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  const bookWithCover = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : "/no-image.png",
    };
  });
  console.log(bookWithCover);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold mb-4">{resultTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:mx-20 md:my-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {bookWithCover.slice(0, 30).map((item, index) => (
            <Book key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default BookList;
