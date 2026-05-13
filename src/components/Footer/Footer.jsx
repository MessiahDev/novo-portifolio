import "./Footer.css"

export default function Footer() {
    const ano = new Date().getFullYear()

    return (
        <footer className="footer">
            <p className="footer-texto">
                © {ano} Alex Messias. Todos os direitos reservados.
            </p>
        </footer>
    )
}