document.addEventListener("DOMContentLoaded", () => {
  const arrow1 = document.getElementById("arrow1");
  const secondChart = document.getElementById("secondChart");
  const animalArrow = document.getElementById("animalArrow");
  const plantArrow = document.getElementById("plantArrow");
  const thirdChart = document.getElementById("thirdChart");
  const fourthChart = document.getElementById("fourthChart");

  const foodBar = document.querySelector(".food");
  const animalBar = document.querySelector(".animal");
  const plantBar = document.querySelector(".plant");

  // Відображення другого графіка
  arrow1.addEventListener("click", () => {
    secondChart.classList.toggle("hidden");

    // Увімкнення hover-active для Food
    if (secondChart.classList.contains("hidden")) {
      foodBar.classList.remove("hover-active");
    } else {
      foodBar.classList.add("hover-active");
    }
  });

  // Відображення третього графіка для "Animal products"
  animalArrow.addEventListener("click", () => {
    if (!fourthChart.classList.contains("hidden")) {
      fourthChart.classList.add("hidden");
      plantBar.classList.remove("hover-active");
    }
    thirdChart.classList.toggle("hidden");

    // Увімкнення hover-active для Animal products
    if (thirdChart.classList.contains("hidden")) {
      animalBar.classList.remove("hover-active");
    } else {
      animalBar.classList.add("hover-active");
    }
  });

  // Відображення третього графіка для "Plant-based"
  plantArrow.addEventListener("click", () => {
    if (!thirdChart.classList.contains("hidden")) {
      thirdChart.classList.add("hidden");
      animalBar.classList.remove("hover-active");
    }
    fourthChart.classList.toggle("hidden");

    // Увімкнення hover-active для Plant-based
    if (fourthChart.classList.contains("hidden")) {
      plantBar.classList.remove("hover-active");
    } else {
      plantBar.classList.add("hover-active");
    }
  });

  // Наведення на стрілку для Food
  arrow1.addEventListener("mouseover", () => {
    foodBar.classList.add("hover-active");
  });

  arrow1.addEventListener("mouseout", () => {
    // Зберігаємо hover-ефект, якщо графік відкритий
    if (secondChart.classList.contains("hidden")) {
      foodBar.classList.remove("hover-active");
    }
  });

  // Наведення на стрілку для Animal products
  animalArrow.addEventListener("mouseover", () => {
    animalBar.classList.add("hover-active");
  });

  animalArrow.addEventListener("mouseout", () => {
    // Зберігаємо hover-ефект, якщо графік відкритий
    if (thirdChart.classList.contains("hidden")) {
      animalBar.classList.remove("hover-active");
    }
  });

  // Наведення на стрілку для Plant-based
  plantArrow.addEventListener("mouseover", () => {
    plantBar.classList.add("hover-active");
  });

  plantArrow.addEventListener("mouseout", () => {
    // Зберігаємо hover-ефект, якщо графік відкритий
    if (fourthChart.classList.contains("hidden")) {
      plantBar.classList.remove("hover-active");
    }
  });
});
