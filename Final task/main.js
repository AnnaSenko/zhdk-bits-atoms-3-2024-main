document.addEventListener("DOMContentLoaded", () => {
  const arrow1 = document.getElementById("arrow1");
  const secondChart = document.getElementById("secondChart");
  const animalArrow = document.getElementById("animalArrow");
  const plantArrow = document.getElementById("plantArrow");
  const thirdChart = document.getElementById("thirdChart");
  const fourthChart = document.getElementById("fourthChart");

  const foodBar = document.querySelector(".food");
  const otherBar = document.querySelector(".other");
  const animalBar = document.querySelector(".animal");
  const plantBar = document.querySelector(".plant");

  // Функція для додавання/видалення лінії SVG
  const toggleSVGLine = (chart, toggle) => {
    const h1 = chart.querySelector("h1");
    if (toggle) {
      if (!h1.querySelector(".svg-line")) {
        const svgLine = document.createElement("img");
        svgLine.src = "./11.svg"; // Вказуємо шлях до SVG файлу
        svgLine.alt = "Line";
        svgLine.classList.add("svg-line");
        h1.insertAdjacentElement("afterend", svgLine);
      }
    } else {
      const svgLine = chart.querySelector(".svg-line");
      if (svgLine) {
        svgLine.remove();
      }
    }
  };

  // Відображення другого графіка
  arrow1.addEventListener("click", () => {
    secondChart.classList.toggle("hidden");

    // Увімкнення hover-active для Food
    if (secondChart.classList.contains("hidden")) {
      foodBar.classList.remove("hover-active");
      arrow1.classList.remove("line"); // Повертаємо стрілку
      toggleSVGLine(secondChart, false); // Видаляємо лінію
    } else {
      foodBar.classList.add("hover-active");
      arrow1.classList.add("line"); // Замінюємо стрілку на лінію
      toggleSVGLine(secondChart, true); // Додаємо лінію
    }

    // Зміна розмірів Food і Other GHE
    if (!foodBar.classList.contains("expanded")) {
      document.querySelector(".bar-chart").style.width = "calc(100% + 150px)";
      foodBar.style.flex = "10.1"; // Food займає більше місця
      otherBar.style.flex = "0.9"; // Other займає менше місця
      foodBar.classList.add("expanded");
    } else {
      document.querySelector(".bar-chart").style.width = "100%";
      foodBar.style.flex = "3";
      otherBar.style.flex = "7";
      foodBar.classList.remove("expanded");
    }
  });

  // Відображення третього графіка для "Animal products"
  animalArrow.addEventListener("click", () => {
    if (!fourthChart.classList.contains("hidden")) {
      fourthChart.classList.add("hidden");
      plantBar.classList.remove("hover-active");
      plantArrow.classList.remove("line"); // Повертаємо стрілку для Plant
      toggleSVGLine(fourthChart, false); // Видаляємо лінію
    }
    thirdChart.classList.toggle("hidden");

    // Увімкнення hover-active для Animal products
    if (thirdChart.classList.contains("hidden")) {
      animalBar.classList.remove("hover-active");
      animalArrow.classList.remove("line"); // Повертаємо стрілку
      toggleSVGLine(thirdChart, false); // Видаляємо лінію
    } else {
      animalBar.classList.add("hover-active");
      animalArrow.classList.add("line"); // Замінюємо стрілку на лінію
      toggleSVGLine(thirdChart, true); // Додаємо лінію
    }
  });

  // Відображення четвертого графіка для "Plant-based"
  plantArrow.addEventListener("click", () => {
    if (!thirdChart.classList.contains("hidden")) {
      thirdChart.classList.add("hidden");
      animalBar.classList.remove("hover-active");
      animalArrow.classList.remove("line"); // Повертаємо стрілку для Animal
      toggleSVGLine(thirdChart, false); // Видаляємо лінію
    }
    fourthChart.classList.toggle("hidden");

    // Увімкнення hover-active для Plant-based
    if (fourthChart.classList.contains("hidden")) {
      plantBar.classList.remove("hover-active");
      plantArrow.classList.remove("line"); // Повертаємо стрілку
      toggleSVGLine(fourthChart, false); // Видаляємо лінію
    } else {
      plantBar.classList.add("hover-active");
      plantArrow.classList.add("line"); // Замінюємо стрілку на лінію
      toggleSVGLine(fourthChart, true); // Додаємо лінію
    }
  });

  // Додавання hover ефектів для стрілок
  arrow1.addEventListener("mouseover", () =>
    foodBar.classList.add("hover-active")
  );
  arrow1.addEventListener("mouseout", () => {
    if (secondChart.classList.contains("hidden"))
      foodBar.classList.remove("hover-active");
  });

  animalArrow.addEventListener("mouseover", () =>
    animalBar.classList.add("hover-active")
  );
  animalArrow.addEventListener("mouseout", () => {
    if (thirdChart.classList.contains("hidden"))
      animalBar.classList.remove("hover-active");
  });

  plantArrow.addEventListener("mouseover", () =>
    plantBar.classList.add("hover-active")
  );
  plantArrow.addEventListener("mouseout", () => {
    if (fourthChart.classList.contains("hidden"))
      plantBar.classList.remove("hover-active");
  });
});
