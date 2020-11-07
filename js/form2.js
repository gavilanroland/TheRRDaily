const form1 = document.getElementById("form1");
const inputs = document.querySelectorAll("#form1 input");

const sections = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, 
	age: /^\d{2,18}$/ ,
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
        case "name" :
            validcamp(sections.name, e.target, 'name');
        break;
        case "email" :
            validcamp(sections.email, e.target, 'email');
        break;
        case "password" :
            validcamp(sections.password, e.target, 'password');
        break;
        case "age" :
            validcamp(sections.age, e.target, 'age');
        break;
        case "telephone" :
            validcamp(sections.telephone, e.target, 'telephone');
        break;
        case "address" :
            validcamp(sections.address, e.target, 'address');
        break;
        case "city" :
            validcamp(sections.city, e.target, 'city');
        break;
        case "postcode" :
            validcamp(sections.postcode, e.target, 'postcode');
        break;
        case "din" :
            validcamp(sections.din, e.target, 'din');
        break;

    }}
    const validcamp = (val1, input, camp) => {
        if(val1.test(input.value)){
            document.getElementById(`group__${camp}`).classList.remove("form__group-incorrect");
            document.getElementById(`group__${camp}`).classList.add("form__group-correct");
            document.querySelector(`#group__${camp} .form__input-error`).classList.remove("form__input-error-active");
            camps[camp] = true;
        } else {
            document.getElementById(`group__${camp}`).classList.add("form__group-incorrect");
            document.getElementById(`group__${camp}`).classList.remove("form__group-correct");
            document.querySelector(`#group__${camp} .form__input-error`).classList.add("form__input-error-active");
            camps[camp] = false;
        }
    }

inputs.forEach((input) => {
	input.addEventListener("keyup", validForm);
	input.addEventListener("blur", validForm);
})

form1.addEventListener("submit", (e) => {
	e.preventDefault();
    if(camps.name && camps.email && camps.password && camps.age && camps.telephone && camps.address && camps.postcode && camps.city && camps.din ){
    form1.reset();

    document.getElementById("form__message-succes").classList.add("form__message-succes-active");
    setTimeout(() => {
        document.getElementById("form__message-succes").classList.remove("form__message-succes-active");
    }, 5000);

} else {
    document.getElementById("form__message").classList.add("form__message-active");
}
})
