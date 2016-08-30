var link = document.querySelector(".show_hotel_form");
var popup = document.querySelector(".find_hotel_service");
var form = document.querySelector("form");
var arrive = form.querySelector("#arrive");
var departure = form.querySelector("#departure");
var adults = form.querySelector("#adults_number");
var children = form.querySelector("#children_number");
var storage_adults = localStorage.getItem("adults");
var storage_children = localStorage.getItem("children");
link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("find_hotel_service_show");
	if (storage_adults) {
		adults.value = storage_adults;
	}
	if (storage_children) {
		children.value = storage_children;
	}
});	
form.addEventListener("submit", function(event){
	if (!arrive.value || !departure.value || !adults.value || !children.value) {
		event.preventDefault();
		popup.classList.remove("find_hotel_service_error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("find_hotel_service_error");
	}
	else {
		localStorage.setItem("adults", adults.value);
		localStorage.setItem("children", children.value);		
	}
});