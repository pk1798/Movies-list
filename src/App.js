import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesList from "./component/MoviesList";
import MovieInfo from "./component/MovieInfo";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <MoviesList />,
    },
    {
      path: "/info/:id",
      element: <MovieInfo/>,
    },

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
