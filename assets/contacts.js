alert("JS работает");

const form = document.getElementById("contactForm");
alert(form ? "Форма найдена" : "Форма НЕ найдена");

if (form) {
  form.addEventListener("submit", async function (e) {
    alert("Нажат submit");
    e.preventDefault();
    alert("submit остановлен");

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          "Accept": "application/json"
        }
      });

      alert(response.ok ? "Отправка успешна" : "Ошибка ответа");

      if (response.ok) {
        window.location.href = "/thanks.html";
      } else {
        alert("Ошибка отправки. Попробуйте еще раз.");
      }
    } catch (error) {
      alert("Ошибка отправки. Проверьте интернет.");
    }
  });
}
