import React from "react";
import "./modal.css";

/*
 * Modal
 *
 * Aufgabe:
 *   Das Modal soll den Parent über den click des Schließenbuttons informieren. Nutze dafür das property "onClose" vom
 *   Modal.
 *
 * Bonus Aufgabe:
 *   Man kann Komponenten als Decorator verwenden. Zeige den inhalt des <Modal> Tag als Content an.
 *   Hints:
 *     `<Modal>Inhalt</Modal>`
 *     `{children}`
 */
const Modal: React.FC<{onClose?: () => void}> = ({onClose}) => {
    return (
        <div className="modal_layer">
            <div className="modal_box">
                <div className="modal_content">
                    Modal!!!
                </div>
                <button>close</button>
            </div>
        </div>
    );
}

export default Modal;