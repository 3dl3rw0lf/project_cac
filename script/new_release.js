import { themes } from "./music.js";

export function release() {
	let theme = themes.tracks
		.map(
			(tracks) =>
				`<div class="card" style="width: 21rem;">
                <img src="${tracks.photo_album}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${tracks.title}</h5>
                    <h4 "card-title">${tracks.band}</h4>
                    <p class="card-text">${tracks.album}</p>
                    <audio src="${tracks.mp3}" type=”audio/mp3″ controls></audio>
                </div>
            </div>`
		)
		.join("");

	return `${theme}`;
}

document.addEventListener("DOMContentLoaded", function () {
	let musicDiv = document.querySelector("#music");
	musicDiv.innerHTML = release();
});
