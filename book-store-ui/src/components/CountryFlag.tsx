import { IStore } from "../model/book-shop.model";
import { getFlagImageUrl } from "../services/stores.service";

function CountryFlag({ countries: country }: Pick<IStore, "countries">) {
  const flagUrl = getFlagImageUrl(country.code.toLowerCase());

  return (
    <img src={flagUrl} alt={country.code.toLowerCase()} className="block" />
  );
}

export default CountryFlag;
