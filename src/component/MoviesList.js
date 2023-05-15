import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieInfo from "./MovieInfo";

export default function MoviesList() {

  const [moviesList, setMoviesList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("")

  useEffect(() => {
    //API Call

    const options = {
      headers: {
        "X-RapidAPI-Key": "ffae177801msh128d6ac64af00bfp1e9b49jsn04d2a8f29c8d",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    axios
      .get(`https://imdb-top-100-movies.p.rapidapi.com/`, options)
      .then((res) => {
        setMoviesList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleMovieDetail = (id) => {
    setSelectedMovie(id)
  }

  return (
    <>
    {selectedMovie ? <MovieInfo setSelectedMovie={setSelectedMovie}/>  :  <> 
    <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Search
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      {moviesList.map((movie, index) => {
        return (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img src={movie.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.description}</p>
              <a href="#"  onClick={()=>handleMovieDetail(movie.id)} className="btn btn-primary">
                Detail
              </a>
            </div>
          </div>
        );
      })}</> }
      
    </>
  );
}
