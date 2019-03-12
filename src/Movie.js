import React, { Component } from 'react';
import './Movie.css';


class Movie extends Component {
    render(){
        return(
            <div>
                <Movieposter />
                 <h1>hello react</h1>

            </div>
           
         )
    } 
}
class Movieposter extends Component{
    render(){
        return(
            <img src="https://t1.daumcdn.net/cfile/tistory/99D7C7335C51249D30"/>
        )
    }
}
 
export default Movie;