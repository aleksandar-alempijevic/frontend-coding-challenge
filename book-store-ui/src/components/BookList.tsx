import { IStore } from "../model/book-shop.model";
import Book from "./Book/Book";

function BookList({
  books,
  displayCount,
}: Pick<IStore, "books"> & { displayCount?: number }) {
  const displayedBooks = displayCount
    ? books
        ?.slice()
        .sort((first, second) => second.copiesSold - first.copiesSold)
        .slice(0, displayCount)
    : books;

  return (
    <div className="py-2 leading-loose">
      <div className="font-bold">Best-selling books</div>
      {displayedBooks?.map((book) => <Book book={book} />)}
      {!books?.length && <div>No data available</div>}
    </div>
  );
}

export default BookList;
