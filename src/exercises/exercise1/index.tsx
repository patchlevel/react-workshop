import React from 'react';
import Button from "./Button";
import {Link} from "react-router-dom";
import Exercise from "../../components/Exercise";

const Exercise1: React.FC = () => {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Zum Begin soll der Button die Zahl 0 anzeigen. Bei jedem Klick soll diese Zahl um eins erhöht
                        werden.
                    </p>
                    <pre>src/exercises/exercise1/Button.tsx</pre>
                </Exercise>
            </div>
            <div className="App-row">
                <Button/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}

export default Exercise1;