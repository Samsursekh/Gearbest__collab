document.querySelector("#cancel").addEventListener("click",cancel);

    function cancel(){
        window.location.href="cart.html"
    }
    
    document.querySelector("#confirm").addEventListener("click",formSubmit)

    function formSubmit(event){
        event.preventDefault();

        if(document.querySelector("#name").value == "") {
            return alert("Please enter the name")
        }

        if(document.querySelector("#last_name").value == "") {
            return alert("Please enter the last name")
        }

        if(document.querySelector("#address").value == "") {
            return alert("Please enter your address")
        }

        if(document.querySelector("#country").value == "") {
            return alert("Please enter your country name")
        }

        if(document.querySelector("#state").value == "") {
            return alert("Please enter your state name")
        }

        if(document.querySelector("#city").value == "") {
            return alert("Please enter your city name")
        }

        if(document.querySelector("#pcode").value == "") {
            return alert("Please enter your pin code");
        }

        if(document.querySelector("#mbl").value == "") {
            return alert("Please enter your mobile number")
        }

        if(document.querySelector("#email").value == "") {
            return alert("Please enter your email address")
        }

        var name=document.querySelector("#name").value;

        var lastName=document.querySelector("#last_name").value;

        var address=document.querySelector("#address").value;

        var country=document.querySelector("#country").value;

        var state=document.querySelector("#state").vlaue;

        var city=document.querySelector("#city").value;

        var pcode=document.querySelector("#pcode").value;

        var mbl=document.querySelector("#mbl").value;

        var email=document.querySelector("#email").value;

        var addressData={
            name:name,
            address:address,
            country:country,
            state:state,
            city:city,
            pcode:pcode,
            mbl:mbl,
            email:email,
        }

        localStorage.setItem("userAddress", JSON.stringify(addressData));

        alert("Address Added Successfully")

        window.location.href="payment.html"
    }