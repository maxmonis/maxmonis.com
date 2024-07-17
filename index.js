hideHero();

function hideHero() {
	var timeout = setTimeout(function () {
		if (window.scrollY === 0)
			document.querySelector(".hero-image").classList.add("hide");
	}, 2000);
	window.onscroll = function () {
		clearTimeout(timeout);
	};
}
