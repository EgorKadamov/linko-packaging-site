(function () {
  const chips = document.querySelectorAll(".chip");
  const items = document.querySelectorAll("#productGrid [data-category]");
  if (!chips.length || !items.length) return;

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");

      const filter = chip.dataset.filter;
      items.forEach(item => {
        const show = filter === "all" || item.dataset.category === filter;
        item.style.display = show ? "" : "none";
      });
    });
  });
})();