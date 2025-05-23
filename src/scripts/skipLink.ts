function skipLink() {
	const skipLink = document.getElementById("skip-link");
	const main = document.getElementById("main-content");

	if (skipLink) {
		skipLink.addEventListener("click", (e) => {
			if (main) {
				main.focus();
			}
		});
	}
}

export default function () {
	skipLink();
}
