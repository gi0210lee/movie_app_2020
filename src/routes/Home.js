import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  const;
  state = {
    isLoading: true,
    movies: [],
  };

  // 구조 분활 할당
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    // console.log(movies);
    // this.setState({ movies: movies });
    // ES6 에서는 객체의 키와 이름이 같다면 축약가능
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
