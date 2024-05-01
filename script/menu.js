import { links } from "./link.js";

export function menu() {
	let li = links.pages
		.map(
			(link) =>
				`<li class="nav-item">
					<a class="nav-link ${
						link.page.includes("MUSIC") ? "navbar-brand" : ""
					}" href="${link.link} ">${link.page}</a>
                </li>`
		)
		.join("");

	return `
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
		  		</button>
		  		<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="nav navbar-nav me-auto mb-2 mb-lg-0 justify-content-between w-100">
            	    	${li}
					</ul>
				</div>
			</div>
		</nav>
	`;
}
