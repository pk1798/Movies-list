import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";

export default function MovieInfo() {


  const [movieDetail, setMovieDetail] = useState({});


   const {id} = useParams()


  useEffect(() => {

    console.log(id , 'params')
    //API Call

    const options = {
      headers: {
        "X-RapidAPI-Key": "f1a6a0c6b6msh47dfdfd0f3cedb6p1837bfjsn1885ef6aed98",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    axios
      .get(
        `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
        options
      )
      .then((res) => {
        setMovieDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>{movieDetail.title}</div>
      <Link className="btn btn-primary" to={`/`}>Back</Link>

     
    </>
  );
}
