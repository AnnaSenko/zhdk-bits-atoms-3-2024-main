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

  // Функція для зміни стрілки на лінію
  const toggleArrow = (activeArrow, chart) => {
    if (chart.classList.contains("hidden")) {
      // Якщо графік прихований, показуємо стрілку
      activeArrow.innerHTML = "&#8595;"; // Стрілка вниз
      activeArrow.classList.remove("line");
    } else {
      // Якщо графік показаний, змінюємо стрілку на лінію
      activeArrow.innerHTML = ""; // Очищаємо текст стрілки
      activeArrow.classList.add("line");
    }
  };

  // Відображення другого графіка для Food
  arrow1.addEventListener("click", () => {
    secondChart.classList.toggle("hidden");

    // Увімкнення hover-active для Food
    if (secondChart.classList.contains("hidden")) {
      foodBar.classList.remove("hover-active");
    } else {
      foodBar.classList.add("hover-active");
    }

    // Виклик функції toggleArrow для стрілки Food
    toggleArrow(arrow1, secondChart);
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

    // Виклик функції toggleArrow для стрілки Animal products
    toggleArrow(animalArrow, thirdChart);
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

    // Виклик функції toggleArrow для стрілки Plant-based
    toggleArrow(plantArrow, fourthChart);
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
