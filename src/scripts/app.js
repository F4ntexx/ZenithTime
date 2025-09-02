const settingButton = document.getElementById("settingButton");
const createTaskButton = document.getElementById("createTaskButton");
const taskListButton = document.getElementById("taskListButton");
const completedButton = document.getElementById("completedButton");
const profileButton = document.getElementById("profileButton");
const contentSection = document.getElementById("contentSection");

profileButton.addEventListener(
  "click",
  () => {
    const titleProfile = document.createElement("p");
    titleProfile.textContent = "Добро пожаловать в Ваш профиль!";
    titleProfile.classList.add("text-3xl", "text-white");

    const titleInputNickname = document.createElement("p");
    titleInputNickname.textContent = "Nickname";
    titleInputNickname.classList.add("text-white", "mt-4");

    const inputNickname = document.createElement("input");
    inputNickname.classList.add(
      "bg-slate-800",
      "w-100",
      "h-10",
      "mt-1",
      "rounded-md",
      "shadow-lg",
      "text-white"
    );

    const titleInputEmail = document.createElement("p");
    titleInputEmail.textContent = "Email";
    titleInputEmail.classList.add("text-white", "mt-4");

    const inputEmail = document.createElement("input");
    inputEmail.classList.add(
      "bg-slate-800",
      "w-100",
      "h-10",
      "mt-1",
      "rounded-md",
      "shadow-lg",
      "text-white"
    );

    const titleInputPassword = document.createElement("p");
    titleInputPassword.textContent = "Password";
    titleInputPassword.classList.add("text-white", "mt-4");

    const inputPassword = document.createElement("input");
    inputPassword.classList.add(
      "bg-slate-800",
      "w-100",
      "h-10",
      "mt-1",
      "rounded-md",
      "shadow-lg",
      "text-white"
    );

    const buttonEditing = document.createElement('button');
    buttonEditing.type = 'button';
    buttonEditing.textContent = "Редактировать";
    buttonEditing.classList.add(
      "bg-slate-800",
      "w-100",
      "h-10",
      "mt-10",
      "rounded-md",
      "shadow-lg",
      "text-white",
      'cursor-pointer'

    )

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



  },
  { once: true }
);
