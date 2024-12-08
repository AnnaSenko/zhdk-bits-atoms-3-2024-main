import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

function updateGraph(type) {
  if (type === "food") {
    document.getElementById("food-bar").style.width = "60%";

    document.querySelector(".bar-label-right").innerText = "60%";

    document.getElementById("animal-bar").style.width = "40%";

    document.querySelectorAll(".bar-label-right")[1].innerText = "40%";
  } else if (type === "animal") {
    document.getElementById("animal-bar").style.width = "70%";

    document.querySelectorAll(".bar-label-right")[1].innerText = "70%";
  }
}
