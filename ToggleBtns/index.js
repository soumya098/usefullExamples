const btn1 = document.querySelector("#btn1");
const hamMenu1 = document.querySelector("#toggle__ham1");

hamMenu1.addEventListener("click", () => {
	hamMenu1.classList.toggle("active");
	btn1.classList.toggle("active");
});

const btn2 = document.querySelector("#btn2");
const hamMenu2 = document.querySelector("#toggle__ham2");
btn2.addEventListener("click", () => {
	btn2.classList.toggle("active");
	hamMenu2.classList.toggle("active");
});

const btn3 = document.querySelector("#btn3");
const hamMenu3 = document.querySelector("#toggle__ham3");
btn3.addEventListener("click", () => {
	btn3.classList.toggle("active");
	hamMenu3.classList.toggle("active");
});
