import React, {useState} from "react";
import QrCode from "./QrCode";

/*
 * Aufgabe:
 *   Der Inhalt der Input-Feldes muss ausgelesen werden, sobald sich der Inhalt ändert.
 *   Daraufhin soll ein QR-Code, mit dem Inhalt, angezeigt werden.
 *
 * Bonus Aufgabe:
 *   Füge zwei Felder hinzu, womit die Hintergrund- und Vordergrundfarbe konfiguriert werden kann.
 *   Diese Werte müssen dann an die QrCode Komponente weiter gegeben werden.
 */
const Control: React.FC = () => {
    return (
        <React.Fragment>
            <input/>
            <QrCode/>
        </React.Fragment>
    );
}

export default Control;