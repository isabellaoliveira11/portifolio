function copyToClipboard() {
  if (navigator.clipboard) {
      const email = document.getElementById("emailToCopy").textContent;
      navigator.clipboard.writeText(email)
          .then(() => {
              document.getElementById("copySuccess").style.display = "block";
              setTimeout(() => {
                  document.getElementById("copySuccess").style.display = "none";
              }, 4000);
          })
          .catch(err => {
              console.error('Falha ao copiar:', err);
              alert('Falha ao copiar e-mail. Por favor, copie manualmente.');
          });
  } else {
      alert('Seu navegador não suporta a cópia para a área de transferência.');
  }
}

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
}