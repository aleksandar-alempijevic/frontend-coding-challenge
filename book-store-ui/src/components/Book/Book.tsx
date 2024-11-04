import { IBook } from "../../model/book-shop.model";
import "./Book.css";

function Book({ book }: { book: IBook }) {
  return (
    <div key={book.name} className="flex justify-between align-center">
      <div className="mr-2">{book.name}</div>
      <div className="ellipsis author">{book.authors?.fullName}</div>
    </div>
  );
}

export default Book;
