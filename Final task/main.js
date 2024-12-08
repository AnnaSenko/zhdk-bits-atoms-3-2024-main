document.addEventListener("DOMContentLoaded", () => {
  const arrow1 = document.getElementById("arrow1"); // Стрілка для першого графіка
  const secondChart = document.getElementById("secondChart"); // Другий графік
  const animalArrow = document.getElementById("animalArrow"); // Стрілка під Animal products
  const plantArrow = document.getElementById("plantArrow"); // Стрілка під Plant-based

  // Відображення другого графіка
  arrow1.addEventListener("click", () => {
    secondChart.classList.toggle("hidden");
  });

  // Обробники для кожної стрілки (додатковий функціонал можна дописати тут)
  animalArrow.addEventListener("click", () => {
    alert("Clicked on Animal products arrow!");
  });

  plantArrow.addEventListener("click", () => {
    alert("Clicked on Plant-based arrow!");
  });
});
