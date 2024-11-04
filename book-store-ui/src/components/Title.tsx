import { IStore } from "../model/book-shop.model";

function Title({ name }: Pick<IStore, "name">) {
  return <div className="font-large font-bold color-primary">{name}</div>;
}

export default Title;
