import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Menu.css";

export default function Menu({ goToSection }) {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const openMenu = () => {
        setOpen(true);
    };

    const closeMenu = () => {
        setClosing(true);

        setTimeout(() => {
            setOpen(false);
            setClosing(false);
        }, 300);
    };

    const handleClick = (section) => {
        goToSection(section);
        closeMenu();
    };

    useEffect(() => {
        const media = window.matchMedia("(min-width: 901px)");

        const handleChange = () => {
            if (media.matches) {
                setOpen(false);
                setClosing(false);
            }
        };

        media.addEventListener("change", handleChange);

        return () => media.removeEventListener("change", handleChange);
    }, []);

    return (
        <>
            <button
                className="menu-btn"
                onClick={open ? closeMenu : openMenu}
            >
                {open ? <FaTimes /> : <FaBars />}
            </button>

            {open && (
                <div className="overlay" onClick={closeMenu} />
            )}

            <nav className={`menu ${open ? "active" : ""} ${closing ? "closing" : ""}`}>
                <ul>
                    <li><a onClick={() => handleClick("inicio")}>Início</a></li>
                    <li><a onClick={() => handleClick("sobre")}>Sobre mim</a></li>
                    <li><a onClick={() => handleClick("servicos")}>O que eu faço</a></li>
                    <li><a onClick={() => handleClick("resumo")}>Resumo</a></li>
                    <li><a onClick={() => handleClick("depoimentos")}>Depoimentos</a></li>
                    <li><a onClick={() => handleClick("contato")}>Contato</a></li>
                </ul>

                <button
                    className="contact-btn"
                    type="button"
                    onClick={() => handleClick("contato")}
                >
                    Entrar em contato
                </button>
            </nav>
        </>
    );
}