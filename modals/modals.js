$(function () {
	// $("#myModal1").modal("show");
	$(".modal").draggable({
		handle: ".modal-header",
	});

	$(".modal").on("shown.bs.modal", function (e) {
		$(".modal-body iframe").attr("src", "https://www.youtube.com/embed/8zcfIu3tyw4?autoplay=0&amp;modestbranding=1&amp;showinfo=0&amp;start=0");
	});

	$(".modal").on("hide.bs.modal", function (e) {
		$(".modal iframe").attr("src", " ");
	});
});

const wrapper = document.querySelector(".wrapper");
const header = wrapper.querySelector(".header");

function onDrag({ movementX, movementY }) {
	let getStyle = window.getComputedStyle(wrapper);
	let left = parseInt(getStyle.left); //getting left value of wrapper;
	let top = parseInt(getStyle.top); //getting top value of wrapper;
	wrapper.style.left = `${left + movementX}px`;
	wrapper.style.top = `${top + movementY}px`;
}

header.addEventListener("mousedown", () => {
	header.classList.add("active");
	header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
	header.classList.remove("active");
	header.removeEventListener("mousemove", onDrag);
});
