const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const xpressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, 
	age: /^\d{18,99}$/ ,
    telephone: /^\d{7,14}$/,
    address: /^[a-zA-Z0-9-.]+$/,
    city: /^[a-zA-Z0-9-.]+$/,
    postcode: /^\d{000,999}$/ ,
    din: /^\d{00,99}$/ 
}
const camps = {
	name: false,
	email: false,
	password: false,
	age: false,
    telephone: false,
    address: false,
    city: false,
    postcode: false,
    din: false
}
const validForm = (e) => {
	switch (e.target.name) {
		case "name":
			validcamp(xpressions.name, e.target, "name");
		break;
		case "email":
			validcamp(xpressions.email, e.target, "email");
		break;
		case "password":
			validcamp(xpressions.password, e.target, "password");
		break;
		case "age":
			validcamp(xpressions.age, e.target, "age");
		break;
		case "telephone":
			validcamp(xpressions.telephone, e.target, "telephone");
        break;
        case "address":
			validcamp(xpressions.address, e.target, "address");
		break;
		case "city":
			validcamp(xpressions.city, e.target, "city");
		break;
		case "postcode":
			validcamp(xpressions.postcode, e.target, "postcode");
        break;
        case "din":
			validcamp(xpressions.din, e.target, "din");
        break;
	}
}
const validcamp = (xpresion, input, camp) => {
	if(xpresion.test(input.value)){
		document.getElementById(`group__${camp}`).classList.remove("form__group-incorrect");
		document.getElementById(`group__${camp}`).classList.add("form__group-correct");
		document.querySelector(`#group__${camp} i`).classList.add("fa-check-circle");
		document.querySelector(`#group__${camp} .form__input-error`).classList.remove("form__input-error-active");
		camps[camp] = true;
	} else {
		document.getElementById(`group__${camp}`).classList.add("form__group-incorrect");
		document.getElementById(`group__${camp}`).classList.remove("form__group-correct");
		document.querySelector(`#group__${camp} i`).classList.add("fa-times-circle");
		document.querySelector(`#group__${camp} .form__input-error`).classList.add("form__input-error-active");
		camps[camp] = false;
	}
}
inputs.forEach((input) => {
	input.addEventListener("keyup", validFormulary);
	input.addEventListener("blur", validFormulary);
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	
	if(camps.name && camps.email && camps.password && camps.age && camps.telephone && camps.address && camps.postcode && camps.city && camps.din &&){
		form.reset();

		document.getElementById("form__message-succes").classList.add("form__menssage-succes-active");
		setTimeout(() => {
			document.getElementById("form__message-succes").classList.remove("form__message-succes-active");
		}, 5000);

		document.querySelectorAll(".form__group-correct").forEach((icon) => {
			icon.classList.remove("form__group-correct");
		});
	} else {
		document.getElementById("form__message").classList.add("form__message-active");
	}
});
