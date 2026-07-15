export const PROJETOS = [
    {
        nome: "Kyros — Sistema Financeiro Contábil Corporativo",
        periodo: "2025 — 2026",
        imagem: "/financeiro-dashboard.webp",
        descricao: "Plataforma financeira corporativa desenvolvida em arquitetura full stack, com motor contábil baseado em partidas dobradas, processamento orientado a eventos, conciliação bancária, folha de pagamento e controle de acesso corporativo (RBAC).",
        destaques: [
            "Motor contábil baseado em Domain Events com geração automática de lançamentos em partidas dobradas",
            "Conciliação bancária com vinculação e validação de extratos",
            "Folha de pagamento com cálculo de INSS, IRPF e fluxo de aprovação",
            "RBAC com auditoria e rastreabilidade de operações",
            "Arquitetura em camadas (Domain, Application, Infrastructure e API)",
            "543 testes automatizados entre unitários, integração e E2E",
        ],
        stack: ["C#", ".NET 9", "PostgreSQL", "Redis", "RabbitMQ", "React", "TypeScript", "Docker"],
        links: {
            demo: "https://kyros-financeiro-web.vercel.app",
            backRepo: "https://github.com/MessiahDev/FinanceiroApi",
            frontRepo: "https://github.com/MessiahDev/financeiro-web",
        },
    aviso: "A API está hospedada no plano gratuito do Render e pode levar até 50 segundos para acordar na primeira visita do dia. Caso apareça 404 NOT FOUND, feche a aba e tente novamente.",
    },
]