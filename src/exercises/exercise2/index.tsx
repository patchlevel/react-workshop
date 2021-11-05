import React from 'react';
import {Link} from "react-router-dom";
import Exercise from "../../components/Exercise";
import ModalButton from "./ModalButton";

const Exercise2: React.FC = () => {
    return (
        <div className="App-container">
            <div className="App-row">
                <Exercise>
                    <p>
                        Beim Klicken soll das Modal geöffnet werden. Beim Klicken des "Close-Buttons" soll das Modal
                        wieder geschlossen werden.
                    </p>
                    <pre>
                        src/exercises/exercise2/ModalButton.tsx<br/>
                        src/exercises/exercise2/Modal.tsx
                    </pre>
                </Exercise>
            </div>
            <div className="App-row">
                <ModalButton/>
            </div>
            <div className="App-row">
                <Link to="/">Zurück</Link>
            </div>
        </div>
    );
}

export default Exercise2;