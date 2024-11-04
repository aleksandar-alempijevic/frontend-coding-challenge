import { IStore } from "../../model/book-shop.model";
import BookList from "../BookList";
import Footer from "../Footer";
import Header from "../Header";
import Logo from "../Logo/Logo";
import "./Store.css";

function Store({ store }: { store: IStore }) {
  return (
    <div className="card p-3 flex justify-between flex-col rounded">
      <div className="flex align-center">
        <Logo storeImage={store.storeImage} name={store.name} />
        <div className="flex-1">
          <Header store={store} />
          <BookList books={store.books} displayCount={2} />
        </div>
      </div>
      <Footer store={store} />
    </div>
  );
}

export default Store;
