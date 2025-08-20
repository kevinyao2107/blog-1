document.addEventListener("DOMContentLoaded", () => {
  const customSelect = document.querySelector(".custom-select");
  const trigger = customSelect.querySelector(".custom-select__trigger");
  const options = customSelect.querySelectorAll(".custom-option");
  const triggerText = trigger.querySelector("span");
  const hiddenInput = document.getElementById("topic-input");

  // Initialiser Lucide icons
  lucide.createIcons();

  // Ouvre/ferme le dropdown
  trigger.addEventListener("click", () => {
    customSelect.classList.toggle("open");
  });

  // Sélection d'une option
  options.forEach((option) => {
    option.addEventListener("click", () => {
      // Retirer l'ancienne sélection
      customSelect
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      // Marquer la nouvelle
      option.classList.add("selected");
      const val = option.getAttribute("data-value");
      triggerText.textContent = option.textContent.trim();
      triggerText.dataset.value = val;
      hiddenInput.value = val;

      // Refermer
      customSelect.classList.remove("open");

      // Re-créer les icônes Lucide
      lucide.createIcons();

      // Ici tu peux émettre un événement ou appeler une callback
      // par exemple : onTopicChange(option.dataset.value)
    });
  });

  // Fermer si clic à l'extérieur
  document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove("open");
    }
  });
});
