import React from "react";
import style from "./movie.module.css";

const Movie = (props) => {
  return (
    <div className={style.movie}>
      <h2 className={style.title}>{props.title}</h2>
      <img src={props.image} alt={props.title} className={style.image} />
      <p className={style.paragraph}>{props.overview}</p>
      <br></br>
      <p>Popularity: {props.popularity}</p>

      <p>Release Date: {props.release_date}</p>
    </div>
  );
};

export default Movie;
