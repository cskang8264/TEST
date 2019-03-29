import React, { Component } from 'react';

import './App.css';
import Movie from './Movie';







class App extends Component {
  //Render : componentWllMount() -> render() -> componentDidMount()
  //Update componentWillReceiveProps() - > shouldComponentUpdate() - >componentWillUpdate() -> render() > component

  state = {}

  componentDidMount() {
    this._getMovies();

  }

  _renderMovies = () => {   //렌더 ,로딩기능 밑에도 있음.
    const movies = this.state.movies.map(movie => {
      console.log(movie)

      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres} 
        synopsis={movie.synopsis}

        /> 
         
    })
    return movies

  }

  _getMovies = async () => {
    const movies = await this._callApi() //_callApi가 끝나기를 기다리는것, 성공적으로 수행이아니라. 그래서 _callApi가 실행되고 밑에 setState 수행됨.

    this.setState({
      movies
    })
  }
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
      .then(potato => potato.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>

        {movies ? this._renderMovies() : 'Loading'}

      </div>
    );
  }
}

export default App;
