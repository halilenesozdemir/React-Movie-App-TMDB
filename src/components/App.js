import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import axios from "axios";


class App extends React.Component {
  state = {
      movies: [],
      searchQuery: ""
  };



  async componentDidMount(){
    const response = await axios.get(
    `https://api.themoviedb.org/3/list/8195480?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    console.log(response.data.items)
    this.setState({movies: response.data.items})
}


    //AXIOS API

    deleteMovie = async (movie) => {

      axios.post(`https://api.themoviedb.org/3/list/8195480/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_ID}&api_key=${process.env.REACT_APP_API_KEY}`)
      const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
      this.setState(state => ({
        movies: newMovieList,
      }));
    };
  


  searchMovie = (event) => {
    // console.log(event.target.value);
    this.setState({searchQuery: event.target.value})
  };

  render() {

    let filteredMovies = this.state.movies.filter(
        (movie) => {
            return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
        }
    )

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <SearchBar 
            searchMovieProp={this.searchMovie} />
          </div>
        </div>

        <MovieList
          movies={filteredMovies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}

export default App;






































 // movies: [
    //   {
    //     name: "Leyla ile Mecnun",
    //     rating: "9.3",
    //     overview:
    //       "Turkish television comedy series set in Istanbul, Leyla and Mecnun is a surreal and absurd comedy that revolves around the fictional love story between Leyla and Mecnun.",
    //     imageURL:
    //       "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/epQhFbDRSCh3xvivJz4QhRtM8VB.jpg",
    //     id: 1,
    //   },
    //   {
    //     name: "Black Mirror",
    //     rating: "8.8",
    //     overview:
    //       "Technology has transformed almost every aspect of our lives before we've had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone and more...",
    //     imageURL:
    //       "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7PRddO7z7mcPi21nZTCMGShAyy1.jpg",
    //     id: 2,
    //   },
    //   {
    //     name: "Prison Break",
    //     rating: "8.4",
    //     overview:
    //       "An innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
    //     imageURL:
    //       "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5E1BhkCgjLBlqx557Z5yzcN0i88.jpg",
    //     id: 3,
    //   },
    //   {
    //     name: "Yunus Emre",
    //     rating: "8.2",
    //     overview:
    //       "As Mongol invasions are getting more frequent, Yunus travels to Nallihan where he establishes himself as Seldjuk official. After joining Taptuk Emre's dergâh (dervish monastery), he proceeds to follow his journey on becoming a dervish.",
    //     imageURL:
    //       "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l2kTvitWN7tnpZGf4vb5MxK4TGf.jpg",
    //     id: 4,
    //   },
    //   {
    //     name: "Sherlock",
    //     rating: "9.1",
    //     overview:
    //       "Sherlock Holmes lives in 21st century London, a city filled with mystery, crime and deceit. When the police are desperate they call upon Mr Sherlock Holmes and his unconventional methods of deduction to shed light on the matter.",
    //     imageURL:
    //       "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
    //     id: 5,
    //   },
    //   {
    //     name: "Monk",
    //     rating: "8.1",
    //     overview:
    //       "Monk, is an original award winning detective show that the world hasn't seen in a long time. Former Police Detective Adrian Monkhas suffered from intensified obsessive-compulsive disorder and a variety of phobias since the murder of his wife, Trudy, in 1997.",
    //     imageURL:
    //       "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3axGMbUecXXOPSeG47v2i9wK5y5.jpg",
    //     id: 6,
    //   }
    // ],

