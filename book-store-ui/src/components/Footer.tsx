import { IStore } from "../model/book-shop.model";
import CountryFlag from "./CountryFlag";
import StoreInfo from "./StoreInfo";

function Footer({ store }: { store: IStore }) {
  return (
    <div className="flex justify-between align-center">
      <StoreInfo
        establishmentDate={store.establishmentDate}
        website={store.website}
      />
      <CountryFlag countries={store.countries} />
    </div>
  );
}

export default Footer;
