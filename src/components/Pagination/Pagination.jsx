import { useState } from "react";
import "./Pagination.scss";



export default function Pagination({ getData }) {
  const [actualPage, setActualPage] = useState(1);

  const changePage = (newPage) => {
    getData(newPage);
    setActualPage(newPage);
  };
  return (
    <div className="c-pagination">
      <button className="p-button" onClick={() => changePage(actualPage - 1)}>⬅</button>
      <span> {actualPage} </span>
      <button className="p-button" onClick={() => changePage(actualPage + 1)}>➡</button>
    </div>
  );
}
