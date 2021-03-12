const darkThemeSwitch = document.getElementById("dark-theme-switch");
switch (localStorage.theme) {
  case "dark":
    darkThemeSwitch.checked = true;
    break;
  case "light":
    darkThemeSwitch.checked = false;
    break;
  // it is by default on from the HTML
}

function toggleDarkTheme() {
  const theme = darkThemeSwitch.checked ? "dark" : "light";
  document.documentElement.setAttribute("theme", theme);
  localStorage.theme = theme;
}

toggleDarkTheme();
darkThemeSwitch.addEventListener("change", toggleDarkTheme);

const values = {
  settings: {
    "Critical Mode": 7,
    Leveling: 23,
  },

  worlds: {
    "Simulated Twilight Town": 25,
    "Twilight Town": 50,
    "Hollow Bastion": 39,
    "Cavern of Remembrance": 21,
    "Beast's Castle": 28,
    "Olympus Coliseum": 31,
    Agrabah: 32,
    "Land of Dragons": 28,
    "100 Acre Wood": 24,
    Atlantica: 4,
    "Pride Lands": 28,
    "Disney Castle": 10,
    "Timeless River": 12,
    "Halloween Town": 19,
    "Port Royal": 30,
    "Space Paranoids": 18,
    "The World That Never Was": 30,
  },

  include: {
    "Absent Silhouettes": 5,
    "Data Organization XIII": 13,
    "Olympus Cups": 8,
    "Hades Cup": 1,
    "Lingering Will (Terra)": 2,
    Sephiroth: 1,
  },
};

// 6 * 5 checks on drive form levels + 3 in GoA
let checks = 33;

["settings", "worlds", "include"].forEach(category => {
  document.querySelectorAll(`#${category} li`).forEach(e => {
    const name = e.querySelector("h1").innerText;
    const input = e.querySelector("input");

    if (input.checked) {
      checks += values[category][name];
    }
  });
});

const checksElem = document.getElementById("checks");
checksElem.innerText = checks;

document.querySelectorAll("section input").forEach(e => {
  e.addEventListener("change", e => {
    const category = e.target.closest("section").id;
    const name = e.target.closest("li").querySelector("h1").innerText;
    const value = values[category][name];

    if (e.target.checked) {
      checks += value;
    } else {
      checks -= value;
    }

    checksElem.innerText = checks;
  });
});
