import { useState, useEffect } from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
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
          <h1 className="details-heading">{details.strMeal}</h1>
          <img
            className="details-image"
            src={details.strMealThumb}
            alt={details.strMeal}
          />
          <iframe
            className="details-video"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${details.strYoutube.slice(
              -11
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <table className="details-table striped">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(details).map((key) => {
                if (key.includes("Ingredient") && details[key]) {
                  return (
                    <tr key={key}>
                      <td>{details[key]}</td>
                      <td>{details[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          <p className="details-text">{details.strInstructions}</p>
        </div>
      )}
      <button className="btn btn-goback grey darken-4" onClick={goBack}>
        Go Back
      </button>
    </>
  );
}
