var ManiImg  = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");


smallimg[0].onclick = function() {
    ManiImg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
    ManiImg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    ManiImg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
    ManiImg.src = smallimg[3].src;
}


function addtocart()
{
    alert("Yay! Items added to cart Succesfully . Go To Cart Icon");
}



