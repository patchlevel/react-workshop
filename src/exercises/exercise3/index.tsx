import React from 'react';
import {Link} from "react-router-dom";
import Exercise from "../../components/Exercise";
import Countdown from "./Countdown";

const Exercise3: React.FC = () => {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Baue einen Countdown, der von 10 nach 0 runterzählt. Bei 0 angekommen soll "Ring!" angezeigt werden.
                    </p>
                    <pre>
                        src/exercises/exercise3/Countdown.tsx<br/>
                    </pre>
                </Exercise>
            </div>
            <div className="App-row">
                <Countdown/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}

export default Exercise3;