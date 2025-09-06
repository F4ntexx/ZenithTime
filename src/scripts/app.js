const settingButton = document.getElementById("settingButton");
const createTaskButton = document.getElementById("createTaskButton");
const taskListButton = document.getElementById("taskListButton");
const completedButton = document.getElementById("completedButton");
const profileButton = document.getElementById("profileButton");
const contentSection = document.getElementById("contentSection");

const userDataString = localStorage.getItem("user");
const userData = JSON.parse(userDataString);

profileButton.addEventListener(
  "click",
  () => {
    const titleProfile = document.createElement("p");
    titleProfile.textContent = "Добро пожаловать в Ваш профиль!";
    titleProfile.classList.add("text-3xl", "text-white");

    const titleInputNickname = document.createElement("p");
    titleInputNickname.textContent = "Nickname";
    titleInputNickname.classList.add("text-white", "mt-4");

    const inputNickname = document.createElement("p");
    inputNickname.contentEditable = true;
    inputNickname.classList.add(
      "items-center",
      "flex",
      "bg-slate-800",
      "w-100",
      "h-10",
      "rounded-md",
      "shadow-lg",
      "text-white",
      "pl-1"
    );

    const nicknameUser = userData.nickname;
    inputNickname.textContent = nicknameUser;

    const titleInputEmail = document.createElement("p");
    titleInputEmail.textContent = "Email";
    titleInputEmail.classList.add("text-white", "mt-4");

    const inputEmail = document.createElement("p");
    inputEmail.contentEditable = true;
    inputEmail.classList.add(
      "items-center",
      "flex",
      "bg-slate-800",
      "w-100",
      "h-10",
      "rounded-md",
      "shadow-lg",
      "text-white",
      "pl-1"
    );

    const emailUser = userData.email;
    inputEmail.textContent = emailUser;

    const titleInputPassword = document.createElement("p");
    titleInputPassword.textContent = "Password";
    titleInputPassword.classList.add("text-white", "mt-4");

    const inputPassword = document.createElement("p");
    inputPassword.contentEditable = true;
    inputPassword.classList.add(
      "items-center",
      "flex",
      "bg-slate-800",
      "w-100",
      "h-10",
      "rounded-md",
      "shadow-lg",
      "text-white",
      "pl-1"
    );

    const passwordUser = userData.password;
    inputPassword.textContent = passwordUser;

    const buttonEditing = document.createElement("button");
    buttonEditing.type = "button";
    buttonEditing.textContent = "Редактировать";
    buttonEditing.id = "buttonEditing";
    buttonEditing.classList.add(
      "bg-slate-800",
      "w-100",
      "h-10",
      "mt-10",
      "rounded-md",
      "shadow-lg",
      "text-white",
      "cursor-pointer",
      "hover:bg-slate-700"
    );
    contentSection.append(
      titleProfile,
      titleInputNickname,
      inputNickname,
      titleInputEmail,
      inputEmail,
      titleInputPassword,
      inputPassword,
      buttonEditing
    );
    editForm(buttonEditing, inputNickname, inputEmail, inputPassword);
  },
  { once: true }
);

function editForm(buttonEditing, inputNickname, inputEmail, inputPassword) {
  buttonEditing.addEventListener("click", (e) => {
    e.preventDefault()    
  const dataInputEdits = {
    nickname: inputNickname.innerHTML,
    email: inputEmail.innerHTML,
    password: inputPassword.innerHTML,
  }

  const dataLocalstorage = Object.values(userData);
  const dataInputs = Object.values(dataInputEdits);

  if (JSON.stringify(dataLocalstorage) === JSON.stringify(dataInputs)){
    alert('Вы ничего не изменили!')
  } else{
    const UserEdits = localStorage.setItem('user', JSON.stringify(dataInputEdits))
  }

  });
}
