// Filtro dos Projetos
const filterButtons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    // Remove a classe "active" de todos os botões
    filterButtons.forEach(btn => btn.classList.remove("active"));

    // Adiciona a classe "active" ao botão clicado
    button.classList.add("active");

    // Filtra os cards
    cards.forEach(card => {
      if (card.dataset.category === category || category === "all") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Efeito Hover nos Cards de Carreira
const carreiraCards = document.querySelectorAll("#carreira .card");

carreiraCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.border = "2px solid #4ae290";
  });

  card.addEventListener("mouseout", () => {
    card.style.border = "1px solid rgba(123, 74, 226, 0.5)";
  });
});