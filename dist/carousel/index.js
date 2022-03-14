$(function () {
	$("#alert").on("click", function () {
		alert("hi there");
	});

	$("#alert").on("mouseover", function () {
		$("#alert").removeClass("btn-primary");
		$("#alert").addClass("btn-danger");
	});

	$("#alert").on("mouseout", function () {
		$("#alert").addClass("btn-primary");
		$("#alert").removeClass("btn-danger");
	});
});
