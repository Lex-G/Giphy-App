import Gif from "../models/Gif";
import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
  return (
    <li className="Result">
      <h3>{gif.title}</h3>
      <img src={gif.images.original.url} alt={gif.title} />
      <a href={gif.url}>link to Giphy</a>
    </li>
  );
};

export default Result;
