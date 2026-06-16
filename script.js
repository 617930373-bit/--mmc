const statusSelect = document.getElementById("statusSelect");
const pickedStatusLabel = document.getElementById("pickedStatusLabel");

const routeCards = Array.from(document.querySelectorAll(".route-card"));

const routeMap = {
  "待分配": 1,
  "公海中": 2
};

function syncPickRoute() {
  const status = statusSelect.value;
  pickedStatusLabel.textContent = status;

  routeCards.forEach((card, index) => {
    card.classList.remove("active");

    if (routeMap[status] === index) {
      card.classList.add("active");
      return;
    }

    if (!(status in routeMap) && index === 0) {
      card.classList.add("active");
    }
  });
}

statusSelect.addEventListener("change", syncPickRoute);

syncPickRoute();
