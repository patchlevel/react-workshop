import React, {useState} from "react";

/*
 * Countdown
 *
 * Aufgabe:
 *   Die angezeigte Box soll von 10 auf 0 runterzählen.
 *   Wenn der Countdown bei 0 (oder drunter) Angekommen ist, soll stattdessen "Ring!" angezeigt werden.
 *   Das Interval soll registriert werden, wenn die Komponente angezeigt wird.
 *   Und soll wieder Entfernt werden, wenn die Komponente nicht mehr benutzt wird,
 *
 * Bonus Aufgabe:
 *   Füge ein Reset-Button hinzu, um den State wieder auf 10 zu setzen.
 */
const Countdown: React.FC = () => {
    const [counter, setCounter] = useState(100);
    /*
     * Führt den callback jede Sekunde aus.
     * Mit `clearInterval(this.interval)` kann das interval beendet werden.
     */
    const interval = setInterval(
        () => {
        },
        1000
    );

    return (
        <div>{counter}</div>
    );
}

export default Countdown;