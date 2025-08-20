document.addEventListener("DOMContentLoaded", () => {
  const profileMenu = document.querySelector(".profile-menu");
  const dropdown = profileMenu.querySelector("#dropdown");

  // Ouvrir/fermer au clic sur l'image
  profileMenu.addEventListener("click", (e) => {
    dropdown.classList.toggle("open");
  });

  // Fermer si on clique en dehors
  document.addEventListener("click", (e) => {
    if (!profileMenu.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
});
