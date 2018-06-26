import React from "react";
import "./GameStatusBar.css";

// const styles = {
//     statusBarStyle: {
//         background: "purple"
//     }
// }

const GameStatusBar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Clickstang</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
                <li className="navbar-text">{props.message}</li>
                <li className="navbar-text">Score: {props.currentScore}</li> 
                <li className="navbar-text">Top Score: {props.topScore}</li>
            </ul>
        </div>
    </nav>
);

export default GameStatusBar;
