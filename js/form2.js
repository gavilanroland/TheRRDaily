const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const xpressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telephone: /^\d{7,14}$/ // 7 a 14 numeros.
}
const valideform = (e) => {
switch(e.target.name) {
    case "name" :
        if(xpressions.name.test(e.target.value)){

        }
        else {
            document.getElementById("form__name").classList.add("")
        }
    break;
    case "email" :
    
    break;
    case "password" :
    
    break;
    case "age" :
    
    break;
    case "tel" :
    
    break;
    case "adress" :
    
    break;
    case "city" :
    
    break;
    case "pc" :
    
    break;
    case "nid" :
    
    break;

}
}

inputs.forEach((input)=> {
input.addEventListener("keyup" , valideform);
input.addEventListener("blur" , valideform);
})

form.addEventListener("submit" , (e)=> {
    e.preventDefault();
})