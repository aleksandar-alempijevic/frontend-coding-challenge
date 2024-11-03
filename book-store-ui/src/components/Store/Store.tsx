import { IStore } from "../../model/book-shop.model";
import BestSellerList from "../BestSellerList";
import CountryFlag from "../CountryFlag";
import Logo from "../Logo/Logo";
import Rating from "../Rating/Rating";
import StoreInfo from "../StoreInfo";
import "./Store.css";
function Store({ store }: { store: IStore }) {
  return (
    <div className="card p-3 flex justify-between flex-col rounded">
      <div className="flex align-center">
        <Logo storeImage={store.storeImage} name={store.name} />
        <div className="flex-1">
          <div className="flex justify-between align-center">
            <div className="font-large font-bold color-primary">
              {store.name}
            </div>
            <Rating rating={store.rating} />
          </div>
          <BestSellerList books={store.books} />
        </div>
      </div>
      <div className="flex justify-between align-center">
        <StoreInfo
          establishmentDate={store.establishmentDate}
          website={store.website}
        />
        <CountryFlag countries={store.countries} />
      </div>
    </div>
  );
}

export default Store;
