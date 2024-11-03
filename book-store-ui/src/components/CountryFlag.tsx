import { IStore } from "../model/book-shop.model";
import { flagCDN } from "../services/stores.service";

function CountryFlag({ countries: country }: Pick<IStore, "countries">) {
  return (
    <img
      src={`${flagCDN}/h24/${country?.code.toLowerCase()}.png`}
      alt={country?.code.toLowerCase()}
      className="block"
    />
  );
}

export default CountryFlag;
