alert("JS работает");
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {
      window.location.href = "/thanks.html";
    } else {
      alert("Ошибка отправки. Попробуйте еще раз.");
    }
  } catch (error) {
    alert("Ошибка отправки. Проверьте интернет.");
  }
});
