// evento adicionado para quando o DOM for carregado
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a'); // pega todas as tags <a> dentro de nav
  const content = document.querySelector('.content');

  links.forEach((link) => {
    // evento de clique
    link.addEventListener('click', (e) => {
      e.preventDefault(); // previne que a página sempre recarregue em alguma ação

      // remove a classe selected de todos os botões
      links.forEach((btn) => btn.classList.remove('selected'));

      // adiciona a classe selected no botão clicado
      link.classList.add('selected');

      const page = link.textContent; // pega o nome do botão clicado
      console.log(page);
      // switch case para pegar o texto do botão e colocar o texto correto
      switch (page) {
        case 'Sobre mim':
          content.innerHTML = `
                <p class="text paragraph">
                    Nasci na cidade de Joaçaba - SC, tenho 19 anos e atualmente
                    curso Engenharia de Software na UNINTER, desde 2023, quando
                    conheci a área da programação, estou estudando com objetivo
                    de ser um grande profissional na área e viver disso, minha
                    paixão por tecnologia vem desde criança e cada dia que passa
                    minha paixão cresce ainda mais por essa área incrível!
                </p>
            `;
          break;

        case 'Formações':
          content.innerHTML = `
                <ul class="text paragraph">
                  <li>Informática Básica - CETESC.</li>
                  <li>Curso Técnico em Desenvolvimento de Sistemas - SENAI | 3º fase.</li>
                  <li>Bacharel em Engenharia de Software - UNINTER | 3º fase.</li>
                  <li>Inglês Intermediário</li>
                </ul>
            `;
          break;

        case 'Portfólio':
          content.innerHTML = `
              <a href="https://zambiazzi.github.io/hades-project/" target="_blank" class="text">projeto hades</a>
            `;
          break;

        case 'Contato':
          content.innerHTML = `
              <input class="text paragraph text-input-form" type="text" placeholder="Nome" />
                <input class="text paragraph text-input-form" type="email" placeholder="Email" />
                <textarea class="text paragraph text-input-form"/></textarea>
                <button class="text text-button-form" type="submit">Enviar</button>
            `;
          break;
      }
    });
  });
});
