import styled, { css } from "styled-components";

// Filtro dos Projetos
const filterButtons = document.querySelectorAll(".filter-button");
const portfolioCards = document.querySelectorAll("#portfolio .card"); // Mudança aqui

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    // Remove a classe "active" de todos os botões
    filterButtons.forEach(btn => btn.classList.remove("active"));

    // Adiciona a classe "active" ao botão clicado
    button.classList.add("active");

    // Filtra os cards
    portfolioCards.forEach(card => { // Mudança aqui
      if (card.dataset.category === category || category === "all") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

function copiarEmail() {
  const email = document.getElementById("email-para-copiar").textContent;
  navigator.clipboard.writeText(email);
  alert("Email copiado para a área de transferência!"); // Ou use uma notificação mais amigável
}
