import React from 'react'
import { withRouter } from 'react-router-dom'

import './movie.css'


const movie = props => {
    const redirecttoMovieHandler = (id) => {
        console.log(id)
        props.history.push('/movie/' + id);
    }
    return(
        <div className="card" >
            <div className="card1">
                {/* <i className="b" */}
                <div className="con-img">
                    <img src={props.poster} alt=""></img>
                    {/* <img className="blur" src={props.poster} alt=""></img> */}
                </div>
                <div className="con-text">
                    <h2>{props.name}</h2>
                    <p>{props.genre1} {props.genre2}</p>
                    <p>Movie Runtime: {props.runtime}</p>
                    <p>IMDB Rating: {props.rating}</p>
                    
                </div>
            </div>
                <div className="card_seats_button">
                    <p>
                        Available Seats: {props.seats}
                    </p>
                    <button disabled={props.seats === 0} onClick={() => redirecttoMovieHandler(props.id)}>{props.seats === 0?"Sold Out":"Book Now"}</button>
                </div>
        </div>
    )
}

export default withRouter(movie)