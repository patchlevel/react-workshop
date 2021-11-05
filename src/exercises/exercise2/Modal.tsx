import React from "react";
import "./modal.css";

/*
 * Modal
 *
 * Aufgabe:
 *   Wenn jemand auf close drückt, dann mithilfe eines Properties (`this.props.onClose`) den Parent informiert werden.
 *
 * Bonus Aufgabe:
 *   Man kann Komponenten als Decorator verwenden. Zeige den inhalt des <Modal> Tag als Content an.
 *   Hints:
 *     `<Modal>Inhalt</Modal>`
 *     `this.props.children`
 */
const Modal: React.FC = () => {
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