import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./menu.css";

export default function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="menu-btn" onClick={() => setOpen(!open)}>
                {open ? <FaTimes /> : <FaBars />}
            </button>

            {open && (
                <div className="overlay" onClick={() => setOpen(false)} />
            )}

            <nav className={`menu ${open ? "active" : ""}`}>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre mim</a></li>
                    <li><a href="#">O que eu faço</a></li>
                    <li><a href="#">Resumo</a></li>
                    <li><a href="#">Depoimentos</a></li>
                    <li><a href="#">Contato</a></li>
                    <li>
                        <button className="contact-btn" type="button">
                            Entrar em contato
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}