import React, {useState} from "react";

/*
 * Click Counter
 *
 * Aufgabe:
 *   Im Button soll der Inhalt von counter angezeigt werden.
 *   Bei jedem Klick soll diese Zahl erhöht werden. Starten soll der counter bei 0.
 */
const Button: React.FC = () => {
    /*
     * useState ist ein react hook um den state auszulesen und zu verändern. Dieser gibt als ersten Rückgabewert den
     * aktuellen Zustand des States zurück um lesende operationen darauf auszuführen. Der zweiter Rückgabewert ist ein
     * callback um den state zu setzen und somit zu manipulieren bzw. aktualisieren. Der parameter für useState ist der
     * initiale State der verwendet werden soll.
     */
    const [counter, setCounter] = useState(1);
    const notCounter = 'Click me!';

    /*
     * Mit "{}" wechselt man in den Javascript Kontext. Man kann innerhalb wieder mit "<>" in JSX wechseln.
     *
     * Hints:
     *   onClick
     *   onUpdate
     *   onKeyUp
     *   usw.
     */
    return (
        <button>{notCounter}</button>
    );
}

export default Button;