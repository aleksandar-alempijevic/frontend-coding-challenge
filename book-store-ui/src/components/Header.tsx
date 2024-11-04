import { IStore } from "../model/book-shop.model";
import Rating from "./Rating/Rating";
import Title from "./Title";

function Header({ store }: { store: IStore }) {
  return (
    <div className="flex justify-between align-center">
      <Title name={store.name} />
      <Rating rating={store.rating} />
    </div>
  );
}

export default Header;
