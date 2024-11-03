import { IStore } from "../model/book-shop.model";

function StoreInfo({
  establishmentDate,
  website,
}: Pick<IStore, "establishmentDate" | "website">) {
  const formattedDate = new Date(establishmentDate)
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");

  return (
    <div className="sm-flex-col sm-flex">
      <span>{formattedDate}</span>
      <span className="sm-display-none"> - </span>
      <a href={website} target="_blank">
        {website}
      </a>
    </div>
  );
}

export default StoreInfo;
