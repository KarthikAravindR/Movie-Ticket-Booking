import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Booking from './containers/Booking/Booking'
import FullMovie from './components/fullmovie/fullmovie'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Booking} />
        <Route path="/movie/:id" exact component={FullMovie} />
      </BrowserRouter>
    </div>
  );
}

export default App;
