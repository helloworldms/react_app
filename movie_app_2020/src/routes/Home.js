// import Food from "./Food";
import React from "react";
import axios from "axios";
import Movie from "./components/Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // const axios = require('axios');

    const config = {
      method: "get",
      url:
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAJSVCuvjbwIhwSkebEIstM14uu_Qy_Hlw",
      headers: {},
    };

    await axios(config)
      .then((movies) =>
        this.setState({ movies: movies.data.items, isLoading: false })
      )

      .catch(function (error) {
        console.log(error);
      });

    //   const {
    //     data: { items },
    //   } = await axios.get(
    //     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAJSVCuvjbwIhwSkebEIstM14uu_Qy_Hlw"
    //   );
    //   this.setState({ movies: items, isLoading: false });
    // };
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading"
          : movies.map((movie) => {
              return <Movie movie={movie}></Movie>;
            })}
      </div>
    );
  }
}

export default App;
