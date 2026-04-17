const projetosTania = [
    {
        nome: "Atividade 01 - MVP",
        descricao: "Primeira versão do portfólio profissional desenvolvida com HTML5, CSS3 e JavaScript dinâmico.",
        // Coloque aqui o link do repositório da Tânia Carvalho
        link: "https://github.com/taniamaradecarvalho-maker/meu-portfolio" 
    },
    {
        nome: "Atividade 02 - React",
        descricao: "Migração e componentização do portfólio utilizando React e publicação via Vercel.",
        link: "#"
    }
];

const container = document.getElementById('lista-projetos');

projetosTania.forEach(projeto => {
    const cardHTML = `
        <div class="card">
            <div>
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
            </div>
            <a href="${projeto.link}" target="_blank">Ver Repositório ✨</a>
        </div>
    `;
    container.innerHTML += cardHTML;
});
