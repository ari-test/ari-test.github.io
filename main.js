function main() {
	addButtonListener("submit-task", submitButtonClicked);
	
	document.getElementById("dicks").innerHTML += `<input type='button' id='task-1-delete' value=${test}>`

	let test = "dicks";
}

function submitButtonClicked() {
	var text_input = document.getElementById("task-input");
	console.log(text_input.value);
}

function addButtonListener(button_id, callbackFunction) {
	var button = document.getElementById(button_id);
	button.addEventListener('click', callbackFunction);
}

document.addEventListener("DOMContentLoaded", main);