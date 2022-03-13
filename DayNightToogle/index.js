const inp = document.querySelector("#switch");
const body = document.querySelector("#overview");
console.log(inp);
inp.addEventListener("change", () => {
	body.classList.toggle("dark");
});
