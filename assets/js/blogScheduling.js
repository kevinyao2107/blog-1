document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".action-btn.edit").forEach((btn) => {
    btn.addEventListener("click", () => {
      // lit l'id depuis l'attribut data-id
      const id = btn.dataset.id;
      // redirige en passant l'id en paramètre GET
      window.location.href = `blog_planning.html?id=${id}`;
    });
  });
});
