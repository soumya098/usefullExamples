$(function () {
	$(".modal").draggable({
		handle: ".modal-header",
	});

	$(".modal").on("shown.bs.modal", function (e) {
		$(".modal-body iframe").attr(
			"src",
			"https://www.youtube.com/embed/8zcfIu3tyw4?autoplay=0&amp;modestbranding=1&amp;showinfo=0&amp;start=0"
		);
	});

	$(".modal").on("hide.bs.modal", function (e) {
		$(".modal iframe").attr("src", " ");
	});
});
