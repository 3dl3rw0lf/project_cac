import { links } from "./link.js";

export function menu() {
	let li = links.pages
		.map(
			(link) =>
				`<li class="nav-item">
				<a class="nav-link" href="${link.link} ">${link.page}</a>
                </li>`
		)
		.join("");

	return `
		<header>
		<nav class="navbar">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">MUSIC One</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
		  		</button>
		  		<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="nav navbar-nav me-auto mb-2 mb-lg-0">
            	    	${li}
					</ul>
				</div>
			</div>
		</nav>
		</header>
	`;
}
