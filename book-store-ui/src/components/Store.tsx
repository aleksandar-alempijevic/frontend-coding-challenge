import { IStore } from "../model/book-shop.model";

function Store({ store }: { store: IStore }) {
  return (
    <div className="card">
      <div className="top">
        <div className="logo">
          <img src={store.storeImage} alt={store.name} />
        </div>
        <div className="details">
          <div className="header">
            <div className="name">{store.name}</div>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < store.rating ? "filled" : ""}`}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          <div className="books">
            <div className="title">Best-selling books</div>
            {store.books?.length &&
              store.books?.slice(0, 2)?.map((book) => (
                <div key={book.name} className="book">
                  <div className="book-title">{book.name}</div>
                  <div className="author">{book.authors?.fullName}</div>
                </div>
              ))}
            {!store.books?.length && <div>No data available</div>}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="info">
          {new Date(store.establishmentDate)
            .toISOString()
            .split("T")[0]
            .split("-")
            .reverse()
            .join(".")}{" "}
          -{" "}
          <a href={store.website} target="_blank">
            {store.website}
          </a>
        </div>
        <div className="flag">
          <img
            src={`https://flagcdn.com/h24/${store.countries?.code.toLowerCase()}.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Store;
