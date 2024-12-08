document.addEventListener("DOMContentLoaded", () => {
  const arrow1 = document.getElementById("arrow1");
  const secondChart = document.getElementById("secondChart");
  const animalArrow = document.getElementById("animalArrow");
  const plantArrow = document.getElementById("plantArrow");
  const thirdChart = document.getElementById("thirdChart");
  const fourthChart = document.getElementById("fourthChart");

  // Відображення другого графіка
  arrow1.addEventListener("click", () => {
    secondChart.classList.toggle("hidden");
  });

  // Відображення третього графіка для "Animal products"
  animalArrow.addEventListener("click", () => {
    if (!fourthChart.classList.contains("hidden")) {
      fourthChart.classList.add("hidden");
    }
    thirdChart.classList.toggle("hidden");
  });

  // Відображення третього графіка для "Plant-based"
  plantArrow.addEventListener("click", () => {
    if (!thirdChart.classList.contains("hidden")) {
      thirdChart.classList.add("hidden");
    }
    fourthChart.classList.toggle("hidden");
  });
});
