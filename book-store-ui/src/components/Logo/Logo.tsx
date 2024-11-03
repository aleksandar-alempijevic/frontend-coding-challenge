import { IStore } from "../../model/book-shop.model";
import "./Logo.css";

function Logo({ storeImage, name }: Pick<IStore, "storeImage" | "name">) {
  return <img className="logo sm-display-none" src={storeImage} alt={name} />;
}

export default Logo;
