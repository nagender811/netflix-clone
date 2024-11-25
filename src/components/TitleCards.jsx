import React, { useEffect, useRef, useState } from "react";
import cards_data from "../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjg3NjJlY2ExOWFkNmVjZDI1OTJmYzEyMGM4YjliYiIsIm5iZiI6MTczMjU0MzU2MS4xNjUxOTM2LCJzdWIiOiI2NzQ0ODI2NzRkNTBjY2Q3ZGE0OGQ1M2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2zk1-358-xIjVicPunlM5-BDdUN9cMSrAU2vTAz3SgU",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) =>setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="mt-12 mb-7 ">
      <h2 className="mb-2">{title ? title : "Popular on Netflix"}</h2>
      <div
        className="flex flex-row overflow-x-auto space-x-4 scrollbar-hide"
        ref={cardsRef}
      >
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="flex-shrink-0 w-[200px] relative" key={index}>
              <img
                className="w-full rounded cursor-pointer"
                src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
                alt=""
              />
              <p className="text-center absolute bottom-3 z-10 right-2">
                {card.original_title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
