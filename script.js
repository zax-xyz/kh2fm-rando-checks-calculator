let total = 0;

["settings", "worlds", "include"].forEach(category => {
  document.querySelectorAll(`#${category} li`).forEach(e => {
    const checks = Number(e.querySelector("h1 span").innerText);
    const input = e.querySelector("input");

    if (input.checked) {
      total += Number(checks);
    }
  });
});

const checksElem = document.getElementById("checks");
checksElem.innerText = total;

document.querySelectorAll("section input").forEach(e => {
  e.addEventListener("change", e => {
    const category = e.target.closest("section").id;
    const checks = Number(e.target.closest("li").querySelector("h1 span").innerText);

    if (e.target.checked) {
      total += checks;
    } else {
      total -= checks;
    }

    checksElem.innerText = total;
  });
});

document.getElementById("all-off-btn").addEventListener("click", () => {
  document.querySelectorAll("section input:checked").forEach(e => e.click());
});

document.getElementById("all-on-btn").addEventListener("click", () => {
  document.querySelectorAll("section input:not(:checked)").forEach(e => e.click());
});
