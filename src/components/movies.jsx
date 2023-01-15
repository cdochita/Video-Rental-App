import React, { Component } from "react";
import {
  getMovie,
  getMovies,
  deleteMovie,
} from "../services/fakeMovieService.js";
import "font-awesome/css/font-awesome.css";
import Like from "./common/like";
import Pagination from "./common/pagination.jsx";
import { paginate } from "../utils/paginate.js";
import List from "./common/list.jsx";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./movieTable.jsx";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: "All Generes" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleClick = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;

    const {
      movies: allMovies,
      currentPage,
      pageSize,
      selectedGenre,
    } = this.state;

    if (count === 0) return <p>There are no movies in the data base</p>;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3 m-2">
            <List
              selectedItem={this.state.selectedGenre}
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <p>There are {filtered.length} movies in the database.</p>
            <MoviesTable
              movies={movies}
              onClick={this.handleClick}
              onDelete={this.handleDelete}
            />
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
  renderMovie = () => {
    let movie = this.state.movies.map();
    console.log(movie);
  };
}

export default Movies;
