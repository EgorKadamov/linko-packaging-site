document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form.querySelector('[name="name"]')?.value || "",
    phone: form.querySelector('[name="phone"]')?.value || "",
    message: form.querySelector('[name="message"]')?.value || ""
  };

  try {
    const response = await fetch("https://functions.yandexcloud.net/d4e0t50koc88v8mhe49e", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      window.location.href = "/thanks.html";
    } else {
      console.log("Ошибка отправки:", await response.text());
    }
  } catch (error) {
    console.log("Ошибка сети:", error);
  }
});
