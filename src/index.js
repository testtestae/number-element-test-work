import './style.sass'

let xhr = new XMLHttpRequest();
let theUrl = "./";

const formSubmit = ()=>{
    if (
        document.querySelector(".modal #name").value &&
        document.querySelector(".modal #email").value &&
        document.querySelector(".modal #message").value
    ) {
        xhr.open("POST", theUrl);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({ 
            "name": document.querySelector(".modal #name").value
            ,"email": document.querySelector(".modal #email").value
            ,"message": document.querySelector(".modal #message").value
        }));
        
        xhr.onload = function() {
            if (xhr.status != 200) {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            } else { 
                alert(`Your message successfully sent`);
            }
            closeModal();
        };
    } else {  
        alert("write something")
    }

}


const modal = document.querySelector(".modal")

let openModal = ()=>{
    modal.style.display="flex"
}
let closeModal = ()=>{
    modal.style.display="none"
    document.querySelector(".modal #name").value = ""
    document.querySelector(".modal #email").value = ""
    document.querySelector(".modal #message").value = ""
}



document.querySelector(".intersted_to_woek_with_our_team__btn").addEventListener("click", openModal)
document.querySelector(".modal").addEventListener("click", closeModal)
document.querySelector(".modal__container").addEventListener("click", ()=>{event.stopPropagation()} )
document.querySelector(".modal .form__submit").addEventListener("click", formSubmit)