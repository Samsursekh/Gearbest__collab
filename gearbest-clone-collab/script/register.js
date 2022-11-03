
//import register form from form.js
import {registerForm} from "../components/registerform.js"
let n=document.getElementById("bottom")
n.innerHTML=registerForm()


const captcha = document.querySelector(".captcha");
const preview= document.querySelector(".preview");
const captchaForm= document.querySelector(".captcha_form");
const inputform= document.querySelector("#captcha_form");
var registerBtn = document.querySelector('#submit');
const email= document.querySelector("#user_email");
const password =document.querySelector("#user_password");
const reConfirmPassword= document.querySelector("#re_type_password")

let arr1=JSON.parse(localStorage.getItem("user"))  || []
let button= document.querySelector("#submit")
button.addEventListener("click", storeData)
let form1= document.querySelector("#form")
function Obj(user_email,user_password,re_type_password){
  this.user_email=user_email;
  this.user_password=user_password;
  this.re_type_password=re_type_password;
  // checkPassword()
}

function storeData(event){
  event.preventDefault();
  console.log(form1)
  let email=form1.user_email.value;
  let password=form1.user_password.value;
  let confirmPassword=form1.re_type_password.value;

  let user= new Obj(email,password,confirmPassword)
  console.log(user)
  // checkPassword()
  arr1.push(user)
  localStorage.setItem("user",JSON.stringify(arr1))
  // alert("Your account is created.")
  // window.location.href="signin.html"

  form1.user_email.value=null
  form1.user_password.value=null
  form1.re_type_password.value=null
  form1.captcha_form.value=null
 }

 /////////////////////////confirm password

//  let = checkPassword=()=>{
//   if(password !== reConfirmPassword){
//     alert("Check the password")
//    return
//   }
//   else{
//     console.log("password right")
//     return 
//   }
//  }

 

// captcha function

let allCharaters=['A', 'B', 'C','D', 'E','F','G','H','I','J','K','L','M','O',
                 'P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d',
                 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                 't','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,'@','#','$',
                 '%','^','&','*'];

   function getCaptcha(){
    for(let i=0; i<6; i++){
        let randomChar= allCharaters[Math.floor(Math.random() * allCharaters.length)];
        // console.log(randomChar)
        preview.innerText += `${randomChar}`;   //passing random characters   
      }
   }
   getCaptcha(); 
  

   registerBtn.addEventListener("click", e=>{
    e.preventDefault();
    let inputVal= inputform.value.split(" ").join(" ")
console.log(inputVal)
     if(inputVal!==captcha.innerText){ 
       console.log("captcha not matched")
       window.location.href="register.html"
     }
      

   })           
