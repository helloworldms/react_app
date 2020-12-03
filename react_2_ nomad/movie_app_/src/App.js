import React from "react";
import axios from "axios";
import Movie from "Movie";

class App extends React.Component {
  state = { isLoading: true, movies: [] };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating/");
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading,movies } = this.state;
    return <div>
      {isLoading ? "Loading" : movies.map(movies => {
      return < Movie id = {movie.id } year = {movie.year} title = {movie.title} summary = {movies.summary}/>
        
        )
      })}
        
      </div>
      )
    }
  }
    


export default App;