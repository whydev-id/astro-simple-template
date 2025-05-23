const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const themeToggleBtn = document.getElementById("theme-toggler");
const colorTheme = localStorage.getItem("color-theme");

function setDarkMode(): void {
	document.documentElement.classList.add("dark");
	sunIcon?.classList.remove("hidden");
	moonIcon?.classList.add("hidden");
	localStorage.setItem("color-theme", "dark");
}

function setLightMode(): void {
	document.documentElement.classList.remove("dark");
	moonIcon?.classList.remove("hidden");
	sunIcon?.classList.add("hidden");
	localStorage.setItem("color-theme", "");
}

function toggleTheme() {
	// init theme
	if (colorTheme === "dark") {
		setDarkMode();
	}

	// toggle theme on click
	themeToggleBtn?.addEventListener("click", () => {
		if (document.documentElement.classList.contains("dark")) {
			setLightMode();
		} else {
			setDarkMode();
		}
	});
}

export default function () {
	toggleTheme();
}
