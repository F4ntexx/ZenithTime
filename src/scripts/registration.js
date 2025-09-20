const form = document.querySelector("form");
const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorNickname = document.getElementById("errorNickname");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  function ValidateForm() {
    const reNickname = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;
    const reEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const rePassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    const nicknameValue = nickname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const verifiedNickname = reNickname.test(nicknameValue);
    const verifiedEmail = reEmail.test(emailValue);
    const verifiedPassword = rePassword.test(passwordValue);

    const dataJSONform = {};
    if (verifiedNickname) {
      dataJSONform.nickname = nicknameValue;
    } else {
      errorNickname.textContent =
        "Имя пользователя должно начинаться с буквы и содержать от 4 до 16 символов (буквы, цифры и знаки подчеркивания).";
      errorNickname.style.color = "red";
    }
    if (verifiedEmail) {
      dataJSONform.email = emailValue;
    } else {
      errorEmail.textContent =
        "Пожалуйста, введите корректный адрес электронной почты в формате name@example.com";
      errorEmail.style.color = "red";
    }
    if (verifiedPassword) {
      dataJSONform.password = passwordValue;
    } else {
      errorPassword.textContent =
        "Пароль должен содержать не менее 8 символов, включать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ (например, #?!@$%^&*-)";
      errorPassword.style.color = "red";
    }

    const keysArray = Object.keys(dataJSONform);

    if (keysArray.length < 3) {
      console.log("The user has filled in the data incorrectly");
    } else {
      sendingData();
      function sendingData() {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataJSONform),
        }).then((Response) => {
          if (Response.ok) {
            window.location.href = "/src/page/app.html";
          } else {
            console.log("Error runtime sendling ", Response.status);
          }
        });
        (Response) =>
          Response.json()
            .catch((error) => {
              console.log("Ошибка ввода", error);
            })
            .then((Response) => console.log(Response));
        const lst = localStorage.setItem("user", JSON.stringify(dataJSONform));
      }
    }
  }
  ValidateForm();
});
