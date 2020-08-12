import React, { Component } from 'react'
import axios from 'axios'
import Search from '../UI/Search/Search'
import searchfilter from '../UI/Search/Searchfilter'
import './movielist.css'
import Movie from './movie/movie'

class Movielist extends Component {
    state={
        movielist: []
    }
    componentDidMount() {
        axios.get('https://ticket-booking-cc008.firebaseio.com/movies.json')
            .then(response => {
                const fetcheddata = []
                for (let key in response.data) {
                    fetcheddata.push({
                        ...response.data[key],
                        id: key
                    })
                }
                
                this.setState({movielist: fetcheddata})
            })
            .catch(error => {
                console.log(error)
            })
    }
    searchtaskHandler = (event) => {
        event.preventDefault()
        const searchtext = event.target.value
        axios.get('https://ticket-booking-cc008.firebaseio.com/movies.json')
        .then(response => {
            const fetcheddata = []
            for (let key in response.data) {
                fetcheddata.push({
                    ...response.data[key],
                    id: key
                })
            }
            console.log('fetcheddata: ', fetcheddata)
            this.setState({movielist:searchfilter(searchtext,fetcheddata)})
        }).catch(error => {
            console.log(error)
        })
    }
    render() {
        return(
            <div className="searchbar_movielist">
                <Search Changed={this.searchtaskHandler} />
                <div className="movielist">
                    {this.state.movielist.map(movie => (
                        <Movie 
                            id={movie.id}
                            key={movie.id}
                            name={movie.name}
                            genre1={movie.genre1}
                            genre2={movie.genre2}
                            runtime={movie.runtime}
                            rating={movie.rating}
                            seats={movie.seats}
                            poster={movie.poster}
                            pic={movie.pic}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Movielist