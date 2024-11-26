import React, { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjg3NjJlY2ExOWFkNmVjZDI1OTJmYzEyMGM4YjliYiIsIm5iZiI6MTczMjU0MzU2MS4xNjUxOTM2LCJzdWIiOiI2NzQ0ODI2NzRkNTBjY2Q3ZGE0OGQ1M2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2zk1-358-xIjVicPunlM5-BDdUN9cMSrAU2vTAz3SgU",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img
        className="absolute top-3 left-3 cursor-pointer w-12"
        onClick={() => {
          navigate(-2);
        }}
        src={back_arrow_icon}
        alt=""
      />
      <iframe
        className="rounded-xl"
        src={`https://youtube.com/embed/${apiData.key}`}
        width="90%"
        height="90%"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="flex items-center justify-between w-[90%]">
        <p className="text-xs sm:text-sm">
          {apiData.published_at.slice(0, 10)}
        </p>
        <p className="text-xs sm:text-sm">{apiData.name}</p>
        <p className="text-xs sm:text-sm">{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
