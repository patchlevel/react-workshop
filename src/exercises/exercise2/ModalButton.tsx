import React, {useState} from "react";
import Modal from "./Modal";

/*
 * ModalButton
 *
 * Aufgabe:
 *   Wenn auf den Button geklickt wurde, soll das Modal geöffnet werden.
 *   Sobald im Modal auf close gedrückt wurde, soll es wieder geschlossen werden.
 */
const ModalButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        alert('oh noes, it does not open!')
    }
    const close = () => {

    }

    return (
        <>
            <button onClick={open}>Open!</button>
            {isOpen && <Modal />}
        </>
    );
}

export default ModalButton;