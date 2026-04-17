// Array de objetos com os projetos
const projetosDaAmiga = [
    {
        nome: "Meu Primeiro MVP",
        descricao: "Desenvolvimento de um portfólio funcional usando tecnologias web fundamentais.",
        link: "#"
    },
    {
        nome: "Design de Interface",
        descricao: "Estudo de cores e tipografia focado na experiência da usuária moderna.",
        link: "#"
    },
    {
        nome: "Lógica com JS",
        descricao: "Manipulação de dados dinâmicos para exibição de conteúdo em tempo real.",
        link: "#"
    }
];

// Função para renderizar no HTML
const container = document.getElementById('lista-projetos');

projetosDaAmiga.forEach(projeto => {
    const cardHTML = `
        <div class="card">
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver Projeto ✨</a>
        </div>
    `;
    container.innerHTML += cardHTML;
});