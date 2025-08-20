document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const navbarBg = document.getElementById("navbar-mobile_bg");

  // Ouvrir/fermer menu
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // éviter que le clic se propage et ne ferme tout de suite
    navLinks.classList.toggle("open");
    navbarBg.classList.toggle("open");
  });

  // Ne pas fermer si on clique à l’intérieur du menu
  navLinks.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Fermer si on clique en dehors
  document.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navbarBg.classList.remove("open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".search-icon");
  const modal = document.getElementById("search-modal");
  const overlay = document.getElementById("search-overlay");
  const closeBtn = document.getElementById("search-close");
  const searchInput = document.getElementById("search-input");
  const submitBtn = document.getElementById("search-submit");

  const openModal = () => {
    modal.classList.add("open");
    searchInput.focus();
  };

  const closeModal = () => {
    modal.classList.remove("open");
    searchInput.value = "";
  };

  // Ouvrir modal
  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  // Fermer via overlay, bouton X ou Échap
  overlay.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Soumettre la recherche
  submitBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      // ici ta logique, par ex. redirection :
      window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
    }
  });
});
