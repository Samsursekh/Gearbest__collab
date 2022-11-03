    
    document.querySelector(".goHome").addEventListener('click', function() {
        let indexOfUserSignedIn = JSON.parse(localStorage.getItem("loggedInUser"))[1];
        let registeredUsers = JSON.parse(localStorage.getItem("userDataBase"));
        registeredUsers[indexOfUserSignedIn].userCart = [];
        localStorage.setItem("userDataBase", JSON.stringify(registeredUsers));
        window.location.href = "index.html"
    })
    var userAdd=JSON.parse(localStorage.getItem("userAddress"));
     console.log(userAdd)
    var pname=document.createElement("p").textContent=userAdd.name;
    var br=document.createElement("br")
    document.querySelector(".address").append(pname,br);
    var padd=document.createElement("p").textContent=userAdd.address;
    var br=document.createElement("br")
    document.querySelector(".address").append(padd,br);

    var pcity=document.createElement("p").textContent=userAdd.city;
    var br=document.createElement("br")
    document.querySelector(".address").append(pcity,br);

    var pcode=document.createElement("p").textContent=userAdd.pcode;
    var br=document.createElement("br")
    document.querySelector(".address").append(pcode,br);