import { menu } from "./script/menu.js";

window.onload = function () {
	let header = document.getElementById("header");
	let container = document.createElement("div");
	container.innerHTML = menu();
	header.appendChild(container);
};
