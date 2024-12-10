import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// Дані
let data = [
  { name: "Land", CO2: 10 },
  { name: "Farm", CO2: 8 },
  { name: "Food", CO2: 8 },
  { name: "Processing", CO2: 4 },
  { name: "Transport", CO2: 4 },
  { name: "Retail", CO2: 6 },
  { name: "Loses", CO2: 6 },
  { name: "Packaging", CO2: 4 },
];

// Назви категорій
let features = [
  "Land",
  "Farm",
  "Food",
  "Processing",
  "Transport",
  "Retail",
  "Loses",
  "Packaging",
];

// Розміри графіка
let width = 800;
let height = 600;

// Додавання SVG
let svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Масштаб для радіальних значень
let radialScale = d3.scaleLinear().domain([0, 10]).range([0, 250]);
let ticks = [2, 4, 6, 8, 10];

// Малювання концентричних кіл
svg
  .selectAll("circle")
  .data(ticks)
  .join("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("fill", "none")
  .attr("stroke", "gray")
  .attr("r", (d) => radialScale(d));

// Додавання підписів до концентричних кіл
svg
  .selectAll(".ticklabel")
  .data(ticks)
  .join("text")
  .attr("class", "ticklabel")
  .attr("x", width / 2 + 5)
  .attr("y", (d) => height / 2 - radialScale(d))
  .text((d) => d.toString());

// Функція для обчислення координат
function angleToCoordinate(angle, value, offset = 0) {
  let x = Math.cos(angle) * (radialScale(value) + offset);
  let y = Math.sin(angle) * (radialScale(value) + offset);
  return { x: width / 2 + x, y: height / 2 - y };
}

// Функція для створення шляхів
function getPathCoordinates(data) {
  let coordinates = [];
  for (let i = 0; i < features.length; i++) {
    let ft_name = features[i];
    let angle = Math.PI / 2 + (2 * Math.PI * i) / features.length;
    let featureValue = data.find((d) => d.name === ft_name)?.CO2 || 0;
    coordinates.push(angleToCoordinate(angle, featureValue));
  }
  return coordinates;
}

// Дані для осей
let axisData = features.map((f, i) => {
  let angle = Math.PI / 2 + (2 * Math.PI * i) / features.length;
  return {
    name: f,
    angle: angle,
    line_coord: angleToCoordinate(angle, 10),
    label_coord: angleToCoordinate(angle, 10, 30), // Відступ 30px
  };
});

// Малювання осей
svg
  .selectAll("line")
  .data(axisData)
  .join("line")
  .attr("x1", width / 2)
  .attr("y1", height / 2)
  .attr("x2", (d) => d.line_coord.x)
  .attr("y2", (d) => d.line_coord.y)
  .attr("stroke", "black");

// Додавання підписів осей
svg
  .selectAll(".axislabel")
  .data(axisData)
  .join("text")
  .attr("x", (d) => d.label_coord.x)
  .attr("y", (d) => d.label_coord.y)
  .text((d) => d.name)
  .style("font-size", "20px")
  .style("text-anchor", "middle");

// Додавання назви "Beef"
svg
  .append("text")
  .attr("x", width / 2 - 250)
  .attr("y", height / 2 - radialScale(10) - 20)
  .text("Beef")
  .style("font-size", "25px")
  .style("font-weight", "bold")
  .style("text-anchor", "middle");

// Лінія для з'єднання точок
let line = d3
  .line()
  .x((d) => d.x)
  .y((d) => d.y);

// Додавання шляху для даних
svg
  .append("path")
  .datum(getPathCoordinates(data))
  .attr("d", line)
  .attr("stroke-width", 3)
  .attr("stroke", "purple")
  .attr("fill", "purple")
  .attr("stroke-opacity", 1)
  .attr("opacity", 0.5);
