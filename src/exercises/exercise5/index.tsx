import React from 'react';
import {Link} from "react-router-dom";
import Exercise from "../../components/Exercise";
import Control from "./Control";

const Exercise5: React.FC = () => {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Es soll automatisch ein QR-Code erzeugt werden, wenn das Textfeld befüllt wird.
                    </p>
                    <pre>
                        src/exercises/exercise5/Control.tsx<br/>
                        src/exercises/exercise5/QrCode.tsx
                    </pre>
                </Exercise>
            </div>
            <div className="App-row">
                <Control/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}

export default Exercise5;