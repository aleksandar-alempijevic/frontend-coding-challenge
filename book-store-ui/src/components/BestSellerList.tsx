import { IStore } from "../model/book-shop.model";

function BestSellerList({ books }: Pick<IStore, "books">) {
  const bestSellingBooks = books
    ?.sort((first, second) => second.copiesSold - first.copiesSold)
    ?.slice(0, 2);

  return (
    <div className="py-2 leading-loose">
      <div className="font-bold">Best-selling books</div>
      {bestSellingBooks?.map((book) => (
        <div key={book.name} className="flex justify-between align-center">
          <div className="mr-2">{book.name}</div>
          <div>{book.authors?.fullName}</div>
        </div>
      ))}
      {!books?.length && <div>No data available</div>}
    </div>
  );
}

export default BestSellerList;
