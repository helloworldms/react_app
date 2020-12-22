import Movie from "./Movie";

class App extends React.Component {
  state = {
      // 기본 프로퍼티
      // 영화 배열
      isLoading = true,
      movies: []
    
  };
  getMovies = async() =>{

    const {data :{data :{movies}}} = await axios.get(
        "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );
      this.setState({movies , isLoading:false})
  }
  };
  //영화 정보를 가져오고 거기서 내용을 배열 값으로 준다 

  componentDidMount() {
      this.getMovies();
      // 영화
  }

  render() {
    const { isLoading, movies } = this.state;
    <section>{isLoading ? (
        <span>Loading</span>
    ) : (
        movies.map((movie) => (
        <Movie 
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        />
        ))
      )}
    </section>
  );
}
}

export default App;
