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
      arrow1.classList.remove("line"); // Повертаємо стрілку
    } else {
      foodBar.classList.add("hover-active");
      arrow1.classList.add("line"); // Замінюємо стрілку на лінію
    }
  });

  // Відображення третього графіка для "Animal products"
  animalArrow.addEventListener("click", () => {
    if (!fourthChart.classList.contains("hidden")) {
      fourthChart.classList.add("hidden");
      plantBar.classList.remove("hover-active");
      plantArrow.classList.remove("line"); // Повертаємо стрілку для Plant
    }
    thirdChart.classList.toggle("hidden");

    // Увімкнення hover-active для Animal products
    if (thirdChart.classList.contains("hidden")) {
      animalBar.classList.remove("hover-active");
      animalArrow.classList.remove("line"); // Повертаємо стрілку
    } else {
      animalBar.classList.add("hover-active");
      animalArrow.classList.add("line"); // Замінюємо стрілку на лінію
    }
  });

  // Відображення четвертого графіка для "Plant-based"
  plantArrow.addEventListener("click", () => {
    if (!thirdChart.classList.contains("hidden")) {
      thirdChart.classList.add("hidden");
      animalBar.classList.remove("hover-active");
      animalArrow.classList.remove("line"); // Повертаємо стрілку для Animal
    }
    fourthChart.classList.toggle("hidden");

    // Увімкнення hover-active для Plant-based
    if (fourthChart.classList.contains("hidden")) {
      plantBar.classList.remove("hover-active");
      plantArrow.classList.remove("line"); // Повертаємо стрілку
    } else {
      plantBar.classList.add("hover-active");
      plantArrow.classList.add("line"); // Замінюємо стрілку на лінію
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
