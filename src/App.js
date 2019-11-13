import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import "App.css"
import { HLS, Player, Riple, Shaka, Griffith, Pure, HlsPure, HlsPureProxy, HlsPureMp4, HlsPureJW} from 'components/pages'

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
        <Link to="/pure" className="menu">Pure</Link>
        <Link to="/hlspure" className="menu">HlsPure</Link>
        <Link to="/hlspureproxy" className="menu">HlsPureProxy</Link>
        <Link to="/hlspuremp4" className="menu">HlsPureMp4</Link>
        <Link to="/hlspurejw" className="menu">HlsPureJW</Link>

        
      </div>
    {/* 컨테이너 */}
      <div className="container"> 
        <Route exact path="/reactplayer" component={Player}  /> 
        <Route exact path="/reacthlsplayer" component={HLS} /> 
        <Route exact path="/shaka" component={Shaka}  /> 
        <Route exact path="/replay" component={Riple} /> 
        <Route exact path="/griffith" component={Griffith} /> 
        <Route exact path="/pure" component={Pure} /> 
        <Route exact path="/hlspure" component={HlsPure} /> 
        <Route exact path="/hlspureproxy" component={HlsPureProxy} /> 
        <Route exact path="/hlspuremp4" component={HlsPureMp4} /> 
        <Route exact path="/hlspurejw" component={HlsPureJW} /> 


      </div>

    </Router>
  );
}

export default App;
