import React from "react";
import {connect} from 'react-redux';
import {movieSelected} from '../actions/index.js'


const Movies = (props) =>{
    const movies = props.movies;
    console.log(movies);
        return(
            <>
            <h1>Movies.js</h1>
            {
               
               props.movies.map((obj, index)=> {
                    return(<div key={index}>
                        <p>{obj.title}</p>
                        <button onClick={() => props.display_details(obj)}>Details</button>
                    </div>)    
                })
            }
            <div>
                <h2>Movie Details</h2>
                <p>Movie Title: {props.title}</p>
                <p>Release Date: {props.releaseDate}</p>
                <p>Rating: {props.rating}</p>
            </div>
            </>
        )
    }


const mapStateToProps = (state) => {
    console.log(state);
    return {
        movies:state.movieReducer,
        title:state.selectedMovieReducer.title,
        releaseDate:state.selectedMovieReducer.releaseDate,
        rating:state.selectedMovieReducer.rating
    }
}

const mapDispatchToProps = (dispach) => {
    return{
        display_details: (movies) => dispach(movieSelected(movies))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
