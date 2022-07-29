import Gif from "../models/Gif";

interface Props {
  gifs: Gif[];
}
const ResultsList = ({ gifs }: Props) => {
  return (
    <div className="ResultsList">
      <h2>Results</h2>
      <ul>
        {gifs.map((gif) => {
          <Result key={gif.id} gif={gif} />;
        })}
      </ul>
    </div>
  );
};

export default ResultsList;
