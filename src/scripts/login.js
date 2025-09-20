const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const valueEmail = email.value;
  const valuePassword = password.value;
  const value = [valueEmail, valuePassword];

  if (valueEmail == "" && valuePassword == "") {
    new Notification("Ошибка!", {
      body: "Заполните пожалуйста поля ввода!",
    });
  } else {
    const dataUser = JSON.parse(localStorage.getItem("user"));
    const emailUser = dataUser.email;
    const passwordUser = dataUser.password;
    const emailPasswordLocalstorage = [emailUser, passwordUser];
    if (JSON.stringify(emailPasswordLocalstorage) === JSON.stringify(value)) {
      location.href = "/src/page/app.html";
    } else {
      new Notification("Ошибка!", {
        body: "Такого пользователя нет в локальном хранилище! Проверьте данные или зарегистрируйтесь.",
      });
    }
    return;
  }
});
