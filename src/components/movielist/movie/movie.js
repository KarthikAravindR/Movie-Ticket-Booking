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
                    <p>{props.runtime} {props.rating}</p>
                    
                </div>
            </div>
                <div className="card_seats_button">
                    <p>
                        Available Seats: {props.seats}
                    </p>
                    <button onClick={() => redirecttoMovieHandler(props.id)}>Book Now</button>
                </div>
        </div>
    )
}

export default withRouter(movie)