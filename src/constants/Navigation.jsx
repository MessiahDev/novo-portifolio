import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

export const NAV_LINKS = [
    { id: "inicio",      label: "Início" },
    { id: "sobre",       label: "Sobre mim" },
    { id: "servicos",    label: "O que eu faço" },
    { id: "resumo",      label: "Resumo" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "contato",     label: "Contato" },
]

export const SOCIAL_LINKS = [
    { href: "https://www.facebook.com/alex.messias.859182", icon: <FaFacebookF />, title: "Facebook" },
    { href: "https://x.com/AlexMes60607703",                icon: <FaTwitter />,   title: "Twitter" },
    { href: "https://www.linkedin.com/in/alex-alle/",       icon: <FaLinkedinIn />,title: "LinkedIn" },
    { href: "https://github.com/MessiahDev",                icon: <FaGithub />,    title: "GitHub" },
    { href: "https://www.instagram.com/alexmessias18/",     icon: <FaInstagram />, title: "Instagram" },
]