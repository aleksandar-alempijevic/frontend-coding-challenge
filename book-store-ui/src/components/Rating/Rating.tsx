import { IStore } from "../../model/book-shop.model";
import "./Rating.css";

function Rating({ rating }: Pick<IStore, "rating">) {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default Rating;
