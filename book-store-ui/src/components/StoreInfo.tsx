import { formatDate } from "../lib/date-helpers";
import { IStore } from "../model/book-shop.model";

function StoreInfo({
  establishmentDate,
  website,
}: Pick<IStore, "establishmentDate" | "website">) {
  const formattedDate = formatDate(establishmentDate);

  return (
    <div className="sm-flex-col sm-flex">
      <span>{formattedDate}</span>
      <span className="sm-hidden"> - </span>
      <a href={website} target="_blank">
        {website}
      </a>
    </div>
  );
}

export default StoreInfo;
