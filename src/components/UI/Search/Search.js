import React from 'react' 
import './Search.css'


const Search = (props) => {
    return (
        <div className="Toolbar_search">
            <header className="Toolbar">
                <h1>Hollywood Classics</h1>
            </header>
            <form className="form1" onSubmit={props.clicked}>
                <input className="searchbar1" type="search" placeholder="Search Movies" onChange={props.Changed}/>
                {/* <button className="button2" type="submit">Search</button> */}
            </form>
        </div>
    )
}

export default Search