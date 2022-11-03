//import signin from signinform.js
import {signInForm} from "../components/signinform.js"
let s= document.getElementById("bottom");
s.innerHTML=signInForm()

let data= JSON.parse(localStorage.getItem("user")) 
let email= document.querySelector("#user_email").value;
let password =document.querySelector("#user_password").value;

let button= document.querySelector("#submit")
button.addEventListener("click", getData)

function getData(event){
    event.preventDefault()
    let data= JSON.parse(localStorage.getItem("user")) 
    let email= document.querySelector("#user_email").value;
let password =document.querySelector("#user_password").value;
console.log(email)
console.log(password);
console.log(data)
     for( let i=0; i<data.length; i++){
        if(email== data[i].user_email && password== data[i].user_password){
            alert("login successfully")
            window.location.href="index.html"
        }
       
     }
     
        // alert("Either email or password is incorrect")
        // return

}

