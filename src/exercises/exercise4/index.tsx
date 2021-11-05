import React from 'react';
import {Link} from "react-router-dom";
import Exercise from "../../components/Exercise";
import List from "./List";

const Exercise4: React.FC = () => {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Zeige die Fixtures Daten in der Tabelle an und füge eine Such- und Sortierfunktion ein.
                    </p>
                    <pre>
                        src/exercises/exercise4/List.tsx
                    </pre>
                </Exercise>
            </div>
            <div className="App-row">
                <List/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}

export default Exercise4;