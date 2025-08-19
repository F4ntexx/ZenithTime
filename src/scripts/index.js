function buttonInfoApp() {
  buttonGroupsSection = document.getElementById("sectionInfoApp");
  const backgroundInfoSection = document.createElement("div");
  backgroundInfoSection.className = "backgroundInfoSection";
  backgroundInfoSection.classList.add(
    "flex",
    "md:flex-row",
    "flex-col",
    "m-auto",
    "md:h-[400px]",
    "md:w-[750px]",
    "h-[700px]",
    "w-[m-w]",
    "bg-slate-800"
  );
  
  buttonGroupsSection.appendChild(backgroundInfoSection);

  let image;
  let subtitle;

  image = document.createElement("img");
  subtitle = document.createElement("p");
  image.className = "image";

  backgroundInfoSection.appendChild(image);
  backgroundInfoSection.appendChild(subtitle);

    function buttonPlanningFunction() {
    image.src = "/src/assets/images/imagePlan.png";
    image.classList.add(
      "md:h-95",
      "h-110",
      "w-105",
      "m-auto",
      "mt-1",
      "w-100%"
    );
    subtitle.className = "subtitle";
    subtitle.textContent =
      "Получай вовремя напоминания о задачах, встречах, уроках. Настрой уведомления под себя и не пропусти ничего важного!";
    subtitle.classList.add(
      "w-[300px]",
      "md:mt-30",
      "-mt-30",
      "text-white",
      "text-center",
      "m-auto",
      "w-100%",
    );

  }
  buttonPlanningFunction();
  buttonPlanning = document.getElementById("buttonPlanning");
  buttonPlanning.addEventListener("click", function () {
    buttonPlanningFunction();
  });
  buttonReminders = document
    .getElementById("buttonReminders")
    .addEventListener("click", function () {
      subtitle.textContent =
        "Управляйте своим временем, а не наоборот! Получайте вовремя напоминания о важных событиях.";
      subtitle.classList.add(
        "w-[300px]",
        "mt-30",
        "text-white",
        "text-center",
        "m-auto",
        "w-100%",
      );
      image.src = "/src/assets/images/phone.png";
    }
  );

  buttonProductivity = document
    .getElementById("buttonProductivity")
    .addEventListener("click", function () {
      image.src = "/src/assets/images/laptop.jpg";
      image.classList.add("h-95");
      subtitle.textContent =
        "Достигай большего! Zenith Time поможет тебе отслеживать прогресс,  награждать себя за успехи и не терять мотивацию. Успех ближе, чем  кажется!";
      subtitle.classList.add(
        "w-[300px]",
        "mt-30",
        "text-white",
        "text-center",
        "m-auto"
      );
    });

}

buttonInfoApp();

