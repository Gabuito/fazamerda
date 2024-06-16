let malcara = [
    {Título: "Podpah", Categoria: ["Podcast", "Influenciador"], Descrição: `Igão e Mítico são apresentadores de um podcast chamado "Podpah", que se posiciona como defensor do socialismo. No entanto, apesar de defenderem a luta da classe operária e o fim dos milionários, eles próprios pertencem a essa classe, com contas bancárias robustas e bens de luxo.
Embora condenem a propriedade privada e o "desperdício" dos ricos, seus próprios estilos de vida refletem exatamente o que criticam. Seus discursos inflamados contra a desigualdade social soam vazios quando confrontados com suas próprias ações e posses.
O sucesso do podcast, alimentado pela crença ingênua de seus seguidores, se baseia na hipocrisia de seus apresentadores. A imagem de revolucionários que Luis e Arthur projetam serve como fachada para seus interesses próprios, que incluem o enriquecimento pessoal através do sucesso do podcast`, Imagem: "./img/f1.png", Rating: 5},

{Título: "Felipe Neto", Categoria: ["Influenciador", "Youtuber"], Descrição: "Hipocrita é seu sobrenome, em um passado defendia a redução de imposto e fim de um governo corrupto, totalmente o oposto de hoje, onde provalvelmente ganha dinheiro lavando a imagem do governo para seus seguidores cegos. O dinheiro ganho em cima de vídeos para crianças fez dele um bilhonario, que descobriu que dinheiro é melhor que coisa da vida. E o jeito mais facil é vender utopias e sonhos. Em sua arvore genealogica, é provado que pertence a familia mal-caracter", Imagem: "./img/f2.png", Rating: 5},

{Título: "Luiza Trajano (Magalu)", Categoria: ["Lobista", "Empresária","Magalu"], Descrição: "Descrição do card 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", Imagem: "./img/f3.png", Rating: 4},

{Título: "Cellbit", Categoria: ["Streamer", "Influencer", "Youtuber"], Descrição: "Descrição do card 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", Imagem: "./img/f4.png", Rating: 3},

{Título: "Boca Rosa (Boca Rosa Company)", Categoria: ["Influencer", "Empresária", "BBB"], Descrição: "Descrição do card 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur", Imagem: "./img/f5.png", Rating: 4},

{Título: "Nath Finança", Categoria: ["Youtuber", "'Guru' da economia", "influencer"], Descrição: "Descrição do card 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur", Imagem: "./img/f6.png", Rating: 2},


];





function createStars(rating) {
    const starsContainer = document.createElement('div');
    for (let i = 0; i < rating; i++) {
      const star = document.createElement('i');
      star.classList.add('material-icons', 'card-star');
      star.textContent = '☭';
      star.style.fontSize = '34px';
      starsContainer.appendChild(star);
    }
    for (let i = rating; i < 6; i++) {
      const star = document.createElement('i');
      star.classList.add('material-icons', 'card-star');
      star.textContent = '';
      starsContainer.appendChild(star);
    }
    return starsContainer;
  }
  
  // Função para criar os cards
  function createCard(image, title, rating, category, description) {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'card');
    card.setAttribute('data-title', title);
    card.setAttribute('data-category', category); // Adiciona atributo data-category
    card.style.display = 'none'; // Inicializa o card como oculto
  
    const imageElement = document.createElement('img');
    imageElement.classList.add('card-image');
    imageElement.src = image;
    imageElement.alt = title;
    card.appendChild(imageElement);
  
    const titleElement = document.createElement('h2');
    const titleIcon = document.createElement('span');
    titleElement.classList.add('card-title');
    titleIcon.classList.add('material-symbols-outlined');
    titleIcon.textContent = 'id_card';
    titleElement.textContent = ' ' + title; // Define o texto do título com o ícone
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('card-title-container');
    titleContainer.style.display = 'flex';
    titleContainer.style.marginLeft = '20px';
    titleContainer.style.marginTop = '10px';
    titleContainer.appendChild(titleIcon); // Adiciona o ícone ao título
    titleContainer.appendChild(titleElement); // Adiciona o texto ao título
    card.appendChild(titleContainer); // Adiciona o título ao card
  
    const starsContainer = createStars(rating);
    card.appendChild(starsContainer);
  
    const categoryElement = document.createElement('p');
    categoryElement.classList.add('card-category');
    const categoryIcon = document.createElement('span');
    categoryIcon.classList.add('material-symbols-outlined');
    categoryIcon.textContent = 'checklist';
    categoryElement.textContent = category;
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('card-category-container');
    categoryContainer.style.display = 'flex';
    categoryContainer.style.marginLeft = '20px';
    categoryContainer.style.marginTop = '10px';
    categoryContainer.appendChild(categoryIcon); // Adiciona o ícone da categoria
    categoryContainer.appendChild(categoryElement); // Adiciona o texto da categoria
    
    card.appendChild(categoryContainer);
  
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('card-button');
    buttonElement.textContent = 'Detalhes';
  
   // ... (código JavaScript anterior) ...

// Adicionando um evento de clique ao botão para abrir o modal
buttonElement.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalStars = document.getElementById('modalStars');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
  
    modalImage.src = image;
    modalTitle.textContent = title;
    modalStars.innerHTML = ''; // Limpa as estrelas do modal
    modalStars.appendChild(createStars(rating));
    modalCategory.textContent = category;
    modalDescription.textContent = description;
  
    // Abre o modal usando Bootstrap
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  
    // Ajusta a posição do modal para que ele fique próximo ao card
    modal.style.top = (card.offsetTop - 100) + 'px'; // Ajusta a posição vertical
    // Ajusta a posição horizontal para centralizar o modal
  });
  
  // ... (código JavaScript restante) ...
    card.appendChild(buttonElement);
    return card;
  }
  
  // Carrega os cards na subpágina "Circulo"
  document.addEventListener('DOMContentLoaded', () => {

      const cardContainer = document.getElementById('card-container');
    const searchInput = document.getElementById('searchInput');
  
    // Crie 30 cards com dados de exemplo
    const cards = []; // Array para armazenar os cards
    for (let i = 1; i <= malcara.length; i++) {
      const card = createCard(
        `${malcara[i-1].Imagem}`, // Imagem aleatória
        `${malcara[i-1].Título}`, // Título aleatório
        `${malcara[i-1].Rating}`, // Rating aleatório de 1 a 6 estrelas
        `${malcara[i-1].Categoria.join(', ')}`, // Categoria aleatória
        `${malcara[i-1].Descrição}. `
      );
      cardContainer.appendChild(card);
      cards.push(card); // Adiciona o card ao array
    }
  
    // Inicializa o Bootstrap
    const modal = document.getElementById('modal');
    const modalInstance = new bootstrap.Modal(modal);
  
    // Adiciona eventos de clique para navegação no menu
    const menuLinks = document.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.dataset.target;
  
        // Oculta todas as páginas
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
          page.style.display = 'none';
        });
  
        // Exibe a página selecionada
        document.getElementById(target).style.display = 'block';
      });
    });
  
    // Adiciona evento de clique para o botão de toggle do menu lateral
    const sidebarToggle = document.getElementById('sidebarToggle');
    sidebarToggle.addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('show');
    });
  
    searchInput.addEventListener('focus', () => {
        // Exibe todos os cards ao focar na barra de pesquisa
        cards.forEach(card => {
          card.style.display = 'block'; // Exibe todos os cards, independentemente do filtro
        });
      
        // Muda para a subpágina "Circulo"
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
          page.style.display = 'none'; // Oculta todas as páginas
        });
        document.getElementById('circulo').style.display = 'block'; // Exibe a página "Circulo"
      });
      
    // Adiciona evento de entrada de texto para a barra de pesquisa
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
  
      // Filtra os cards
      cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();
        if (title.includes(searchTerm) || category.includes(searchTerm)) {
          card.style.display = 'block'; // Exibe o card se o título ou a categoria corresponderem
        } else {
          card.style.display = 'none'; // Oculta o card caso contrário
        }
      });
    });
  });