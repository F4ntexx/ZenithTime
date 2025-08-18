buttonGroupsSection = document.getElementById("infoApp");
const backgroundInfoSection = document.createElement("div");
backgroundInfoSection.className = "backgroundInfoSection";
backgroundInfoSection.classList.add(
  "flex",
  "md:flex-row",
  "flex-col",
  "m-auto",
  "md:h-[400px]",
  "md:w-[800px]",
  "h-[700px]",
  "w-[m-w]",
  "bg-slate-800"
);
buttonGroupsSection.appendChild(backgroundInfoSection);

let image;
let subtitle;

image = document.createElement("img");
subtitle = document.createElement("p");

backgroundInfoSection.appendChild(image);
backgroundInfoSection.appendChild(subtitle);

buttonPlanning = document.getElementById("buttonPlanning");
buttonPlanning.addEventListener("click", function () {
  image.className = "image";
  image.src = "/src/imagePlan.png";
  image.classList.add("md:h-95", "h-120", "w-105", "m-auto", "mt-1");

  subtitle.className = "subtitle";
  subtitle.textContent =
    "Получай вовремя напоминания о задачах, встречах, уроках. Настрой уведомления под себя и не пропусти ничего важного!";
  subtitle.classList.add(
    "w-[300px]",
    "mt-30",
    "mr-15",
    "text-white",
    "text-center"
  );
});
buttonReminders = document
  .getElementById("buttonReminders")
  .addEventListener("click", function () {
    subtitle.textContent =
      "Управляйте своим временем, а не наоборот! Получайте вовремя напоминания о важных событиях.";
    subtitle.classList.add(
      "w-[300px]",
      "mt-30",
      "mr-15",
      "text-white",
      "text-center"
    );
    image.src = "/src/phone.png";
  });

buttonProductivity = document
  .getElementById("buttonProductivity")
  .addEventListener("click", function () {
    image.src = "/src/laptop.jpg";
    image.classList.add("h-95");
    subtitle.textContent =
      "Достигай большего! Zenith Time поможет тебе отслеживать прогресс,  награждать себя за успехи и не терять мотивацию. Успех ближе, чем  кажется!";
    subtitle.classList.add(
      "w-[300px]",
      "mt-30",
      "mr-15",
      "text-white",
      "text-center"
    );
  });
