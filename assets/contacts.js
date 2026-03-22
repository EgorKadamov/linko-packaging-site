(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const contact = form.querySelector('[name="contact"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !contact || !message) {
      alert("Заполни все поля формы.");
      return;
    }

    alert("Заявка отправлена.");
    form.reset();
  });
})();