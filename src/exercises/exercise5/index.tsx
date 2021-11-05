import React from 'react';
import {Link} from "react-router-dom";
import Exercise from "../../components/Exercise";
import Overview from "./Overview";

const Exercise5: React.FC = () => {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Verwende eine beliebige API um Daten anzuzeigen.
                    </p>
                    <pre>
                        src/exercises/exercise6/Overview.tsx
                    </pre>
                </Exercise>
            </div>
            <div className="App-row">
                <Overview/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}

export default Exercise5;