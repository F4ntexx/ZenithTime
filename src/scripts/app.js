const logotypeApp = document.getElementById("logotypeApp");
const settingButton = document.getElementById("settingButton");
const createTaskButton = document.getElementById("createTaskButton");
const taskListButton = document.getElementById("taskListButton");
const completedButton = document.getElementById("completedButton");
const profileButton = document.getElementById("profileButton");
const contentSection = document.getElementById("contentSection");

const userDataString = localStorage.getItem("user");
const userData = JSON.parse(userDataString);

logotypeApp.addEventListener("click", () => {
  location.href = "";
});

createTaskButton.addEventListener(
  "click",
  () => {
    const titleTaskSection = document.createElement("p");
    titleTaskSection.textContent =
      userData.nickname + " Начните свою цель с маленького напоминания!";
    titleTaskSection.classList.add(
      "text-white",
      "text-3xl",
      "font-medium",
      "text-center",
      "mt-20"
    );

    const buttonCreate = document.createElement("button");
    buttonCreate.textContent = "Создать";
    buttonCreate.type = "button";
    buttonCreate.classList.add(
      "border-2",
      "border-slate-900",
      "bg-slate-900",
      "hover:bg-slate-800",
      "hover:border-slate-800",
      "rounded-sm",
      "h-10",
      "w-80",
      "text-2xl",
      "cursor-pointer",
      "text-white",
      "font-semibold",
      "m-auto"
    );

    contentSection.append(titleTaskSection, buttonCreate);
    createTask(buttonCreate, titleTaskSection);
  },
  { once: true }
);

function createTask(buttonCreate) {
  buttonCreate.addEventListener("click", () => {
    contentSection.textContent = "";
    const backgoundCreateTask = document.createElement("div");
    backgoundCreateTask.classList.add(
      "h-120",
      "w-120",
      "bg-slate-900",
      "flex",
      "rounded-sm",
      "m-auto",
      "flex",
      "flex-col",
      "gap-2",
      "shadow-lg",
      "shadow-slate-950/90"
    );

    contentSection.append(backgoundCreateTask);

    const titleCreateTask = document.createElement("p");
    titleCreateTask.textContent = "Создать задачу:";
    titleCreateTask.classList.add(
      "text-white",
      "text-medium",
      "text-xl",
      "my-3",
      "mx-2"
    );

    const fieldСategory = document.createElement("p");
    fieldСategory.textContent = "Добавить категорию:";
    fieldСategory.classList.add("text-white", "text-medium", "text-md", "mx-2");

    const containerButton = document.createElement("div");
    containerButton.classList.add("flex", "gap-3", "flex-wrap");

    const buttonSportsCategory = document.createElement("button");
    buttonSportsCategory.type = "button";
    buttonSportsCategory.textContent = "Спорт";
    buttonSportsCategory.classList.add(
      "h-7",
      "w-25",
      "rounded-sm",
      "border-slate-800",
      "border-2",
      "text-white",
      "cursor-pointer",
      "ml-2"
    );

    const buttonWorkCategory = document.createElement("button");
    buttonWorkCategory.type = "button";
    buttonWorkCategory.textContent = "Работа";
    buttonWorkCategory.classList.add(
      "h-7",
      "w-25",
      "rounded-sm",
      "border-slate-800",
      "border-2",
      "text-white",
      "cursor-pointer"
    );

    const buttonEarningsCategory = document.createElement("button");
    buttonEarningsCategory.type = "button";
    buttonEarningsCategory.textContent = "Заработок";
    buttonEarningsCategory.classList.add(
      "h-7",
      "w-25",
      "rounded-sm",
      "border-slate-800",
      "border-2",
      "text-white",
      "cursor-pointer"
    );

    const buttonRelationshipCategory = document.createElement("button");
    buttonRelationshipCategory.type = "button";
    buttonRelationshipCategory.textContent = "Отношения";
    buttonRelationshipCategory.classList.add(
      "h-7",
      "w-25",
      "rounded-sm",
      "border-slate-800",
      "border-2",
      "text-white",
      "cursor-pointer"
    );

    const buttonAccumulationCategory = document.createElement("button");
    buttonAccumulationCategory.type = "button";
    buttonAccumulationCategory.textContent = "Накопления";
    buttonAccumulationCategory.classList.add(
      "h-7",
      "w-25",
      "rounded-sm",
      "border-slate-800",
      "border-2",
      "text-white",
      "cursor-pointer",
      "ml-2"
    );

    const buttonHobbyCategory = document.createElement("button");
    buttonHobbyCategory.type = "button";
    buttonHobbyCategory.textContent = "Хобби";
    buttonHobbyCategory.classList.add(
      "h-7",
      "w-25",
      "rounded-sm",
      "border-slate-800",
      "border-2",
      "text-white",
      "cursor-pointer"
    );

    const buttonGroup = [
      buttonSportsCategory,
      buttonWorkCategory,
      buttonEarningsCategory,
      buttonRelationshipCategory,
      buttonAccumulationCategory,
      buttonHobbyCategory,
    ];

    const titleTodo = document.createElement("p");
    titleTodo.textContent = "Название цели:";
    titleTodo.classList.add("text-white", "text-medium", "text-md", "mx-2");

    const fieldtitle = document.createElement("input");
    fieldtitle.maxLength = 25;
    fieldtitle.classList.add(
      "wrap-break-word",
      "max-w-50",
      "border-slate-800",
      "border-b-2",
      "text-white",
      "outline-none",
      "ml-2"
    );

    const descriptionTodo = document.createElement("p");
    descriptionTodo.textContent = "Описание:";
    descriptionTodo.classList.add(
      "text-white",
      "text-medium",
      "text-md",
      "mx-2"
    );

    const fieldDescription = document.createElement("input");
    fieldDescription.maxLength = 50;
    fieldDescription.classList.add(
      "wrap-break-word",
      "max-w-110",
      "border-slate-800",
      "border-b-2",
      "text-white",
      "outline-none",
      "ml-2"
    );

    const titleData = document.createElement("p");
    titleData.textContent = "Дата выполнения:";
    titleData.classList.add("text-white", "text-medium", "text-md", "mx-2");

    const dataInput = document.createElement("input");
    dataInput.type = "date";
    dataInput.classList.add(
      "max-w-30",
      "border-slate-800",
      "border-b-2",
      "text-white",
      "outline-none",
      "ml-2"
    );

    const titleTime = document.createElement("p");
    titleTime.textContent = "Время выполнения:";
    titleTime.classList.add("text-white", "text-medium", "text-md", "mx-2");

    const timeInput = document.createElement("input");
    timeInput.type = "time";
    timeInput.classList.add(
      "max-w-13",
      "border-slate-800",
      "border-b-2",
      "text-white",
      "outline-none",
      "ml-2"
    );

    const containerButtons = document.createElement("div");
    containerButtons.classList.add("flex", "flex-row", "gap-2");

    const buttonCreate = document.createElement("button");
    buttonCreate.type = "button";
    buttonCreate.textContent = "Cоздать";
    buttonCreate.classList.add(
      "h-7",
      "w-25",
      "bg-slate-500",
      "cursor-pointer",
      "text-slate-800",
      "text-l",
      "font-bold",
      "ml-2",
      "rounded-sm",
      "shadow-lg",
      "shadow-white/7"
    );
    const buttonCancel = document.createElement("button");
    buttonCancel.type = "button";
    buttonCancel.textContent = "Отмена";
    buttonCancel.classList.add(
      "h-7",
      "w-25",
      "cursor-pointer",
      "text-slate-300",
      "border-slate-300",
      "border-2",
      "text-l",
      "font-bold",
      "ml-2",
      "rounded-sm"
    );

    buttonGroup.forEach((element, index) => {
      element.addEventListener("click", () => {
        element.classList.add("border-white");
      });
    });
    buttonCreate.addEventListener("click", () => {
      const valueTask = {
        fieldDescription: fieldDescription.value,
        fieldtitle: fieldtitle.value,
        dataInput: dataInput.value,
        timeInput: timeInput.value,
      };
      let a = JSON.stringify(valueTask);
      let b = JSON.parse(a);
      console.log(b);
    });

    backgoundCreateTask.append(
      titleCreateTask,
      fieldСategory,
      containerButton,
      titleTodo,
      fieldtitle,
      descriptionTodo,
      fieldDescription,
      titleData,
      dataInput,
      titleTime,
      timeInput,
      containerButtons
    );
    containerButton.append(
      buttonSportsCategory,
      buttonWorkCategory,
      buttonEarningsCategory,
      buttonRelationshipCategory,
      buttonAccumulationCategory,
      buttonHobbyCategory
    );
    containerButtons.append(buttonCreate, buttonCancel);
  });
}

// profile
profileButton.addEventListener(
  "click",
  () => {
    contentSection.classList.add("flex", "justify-center", "items-center");

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
      "bg-slate-900",
      "w-100",
      "h-10",
      "rounded-md",
      "shadow-lg",
      "text-white"
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
      "bg-slate-900",
      "w-100",
      "h-10",
      "rounded-md",
      "shadow-lg",
      "text-white"
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
      "bg-slate-900",
      "w-100",
      "h-10",
      "rounded-md",
      "shadow-lg",
      "text-white"
    );

    const passwordUser = userData.password;
    inputPassword.textContent = passwordUser;

    const buttonEditing = document.createElement("button");
    buttonEditing.type = "button";
    buttonEditing.textContent = "Редактировать";
    buttonEditing.id = "buttonEditing";
    buttonEditing.classList.add(
      "bg-slate-900",
      "w-100",
      "h-10",
      "mt-10",
      "rounded-md",
      "shadow-lg",
      "text-white",
      "cursor-pointer",
      "hover:bg-slate-800"
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
    e.preventDefault();
    const dataInputEdits = {
      nickname: inputNickname.innerHTML,
      email: inputEmail.innerHTML,
      password: inputPassword.innerHTML,
    };

    let dataLocalstorage = Object.values(userData);
    const dataInputs = Object.values(dataInputEdits);

    if (JSON.stringify(dataLocalstorage) === JSON.stringify(dataInputs)) {
      new Notification("Ошибка!", {
        body: "Вы не изменили данные.",
        icon: "/src/assets/images/logoApp.png",
      });
    } else {
      const UserEdits = localStorage.setItem(
        "user",
        JSON.stringify(dataInputEdits)
      );
      Notification.requestPermission();
      new Notification("УСПЕШНО!", {
        body: "Вы изменили данные профиля.",
        icon: "/src/assets/images/logoApp.png",
      });
      userData.nickname = dataInputEdits.nickname;
      userData.email = dataInputEdits.email;
      userData.password = dataInputEdits.password;
    }
  });
}
