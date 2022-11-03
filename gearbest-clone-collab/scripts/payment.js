document.querySelector("form").addEventListener("submit",formSubmit);

var payArr=JSON.parse(localStorage.getItem("paymentDataBase")) ||[];
document.querySelector("h3").textContent = "Total payment to be made:    " + localStorage.getItem('cartTotal');

function  formSubmit(event){
    event.preventDefault();
    if(document.querySelector("#name").value == "") {
        return alert("Please enter the name on your card");
    }

    if(document.querySelector("#cardno").value == "") {
        return alert("Please enter car no.");
    }

    if(document.querySelector("#cvv").value == "") {
        return alert("Please enter your 3 digit cvv");
    }

    if(document.querySelector("#edate").value == "") {
        return alert("Please enter your card's expiry date");
    }
     
    var name=document.querySelector("#name").value;

    var cardno=document.querySelector("#cardno").value;

    var cvv=document.querySelector("#cvv").value;

    var edate=document.querySelector("#edate").value;

    // var paymentData={
    //     name:name,
    //     cardno:cardno,
    //     cvv:cvv,
    //     edate:edate,
    // }

    // payArr.push(paymentData);

    window.location.href = "success.html";

}