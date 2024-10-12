document.querySelector(".img__btn").addEventListener("click", function () {
	document.querySelector(".cont").classList.toggle("s--signup");
});

function goToAppointment() {
	window.location.href = "bookappointment.html";
}

function toggleEasyView() {
	document.body.classList.toggle("easyview");
}
