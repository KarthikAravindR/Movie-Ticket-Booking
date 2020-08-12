import React, { Component } from 'react'

import Movielist from '../../components/movielist/movielist'

class Booking extends Component {

    render() {
        return(
            <div>
                <Movielist/>
            </div>
        )
    }
}

export default Booking






    // componentDidMount() {
    //     const data = {
    //         name: "Lady Bird (2017)",
    //         genre1: "Comedy",
    //         genre2: "Drama",
    //         runtime: "1h 34min",
    //         rating: 7.4,
    //         seats: 5,
    //         poster: "https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_SY1000_SX677_AL_.jpg",
    //         pic: "https://m.media-amazon.com/images/M/MV5BMTAwMTI4Nzc4ODJeQTJeQWpwZ15BbWU4MDc0Nzg3ODQz._V1_QL50_.jpg",
    //     }
    //     // axios.post('https://ticket-booking-cc008.firebaseio.com/movies.json',data)
    //     //     .then(response => {
    //     //         console.log(response)
    //     //     })
    //     //     .catch(error => {
    //     //         console.log(error)
    //     //     })
    // }

