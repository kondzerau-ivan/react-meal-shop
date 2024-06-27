import { useState, useEffect } from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import YouTube from "react-youtube";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";

export default function Details() {
  const { id } = useParams();
  const { goBack } = useHistory();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getMealById(id).then((data) => setDetails(data.meals[0]));
  }, [id]);

  return (
    <>
      {!details.idMeal ? (
        <Preloader />
      ) : (
        <div className="details">
          <img
            className="details-image"
            src={details.strMealThumb}
            alt={details.strMeal}
          />
          <h1 className="details-heading">{details.strMeal}</h1>
          <p className="details-text">{details.strInstructions}</p>
          <YouTube className="details-video" videoId={details.strYoutube.slice(-11)} />
        </div>
      )}
      <button className="btn btn-goback grey darken-4" onClick={goBack}>
        Go Back
      </button>
    </>
  );
}
