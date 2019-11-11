import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import "App.css"
import { HLS, Player, Riple, Shaka, Griffith}from 'components/pages'

// const HLS = ({url}) => {
//   console.log(url)
//   return (
//     <div>
//       {url}
//     </div>
//   )
// }

function App() {

  return (
    <Router>
      {/* 헤더 */}
      <div className="header">
        <Link to="/reactplayer" className="menu">React Player</Link>
        <Link to="/reacthlsplayer" className="menu">React HLS Player</Link>
        <Link to="/shaka" className="menu">Shaka Player</Link>
        <Link to="/replay" className="menu">Replay</Link>
        <Link to="/griffith" className="menu">Griffith</Link>


      </div>
    {/* 컨테이너 */}
      <div className="container"> 
        <Route exact path="/reactplayer" component={Player}  /> 
        <Route exact path="/reacthlsplayer" component={HLS} /> 
        <Route exact path="/shaka" component={Shaka}  /> 
        <Route exact path="/replay" component={Riple} /> 
        <Route exact path="/griffith" component={Griffith} /> 

      </div>

    </Router>
  );
}

export default App;
