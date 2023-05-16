import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieInfo from "./MovieInfo";
import { Link } from "react-router-dom";

export default function MoviesList() {

  const [moviesList, setMoviesList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);


  const [selectedMovie, setSelectedMovie] = useState("");
  const [search, setSearch] = useState("")

  useEffect(() => {
    //API Call

    const options = {
      headers: {
        "X-RapidAPI-Key": "f1a6a0c6b6msh47dfdfd0f3cedb6p1837bfjsn1885ef6aed98",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    axios
      .get(`https://imdb-top-100-movies.p.rapidapi.com/`, options)
      .then((res) => {
        setMoviesList(res.data);
        setFilteredList(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleSearch = (value) => {

  

      const arr = moviesList.filter( (obj) => {
        return obj.title.includes(value);
      } )
  
      console.log(arr)
  
      setFilteredList(arr)
    

   

  }



  return (
    <>
      <>
        <div className="input-group input-group-sm mb-3">
          <span  className="input-group-text" id="inputGroup-sizing-sm">
            Search
          </span>
          <input
            type="text"
            onChange={(e)=>handleSearch(e.target.value)}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        { filteredList.map((movie, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img src={movie.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
                <Link className="btn btn-primary" to={`/info/${movie.id}`}>
                  Detail
                </Link>
                {/* <a href="#"  onClick={()=>handleMovieDetail(movie.id)} className="btn btn-primary">
                
              </a> */}
              </div>
            </div>
          );
        })}
      </>
    </>
  );
}
