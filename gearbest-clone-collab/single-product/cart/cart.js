var removeCartItemBtns = document.getElementsByClassName("btn-danger");
for(var i=0; i<removeCartItemBtns.length;i++)
{
    var button = removeCartItemBtns[i]
    button.addEventListener('click',function()
    {
        // console.log("clicked");
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}


function updateCartTotal()
{
var cartItemContainer = document.getElementsByClassName("cart-info")[0]
var cartRows = cartItemContainer.getElementsByClassName("cart-info")
var subtotal = 99.95
var tax = 0
var total = 99.95
for(var i=0; i<cartRows.length;i++)
{
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName("cart-price")[0]
    var qntyElement = cartRow.getElementsByClassName("qtty")[0]
    // console.log(priceElement, qntyElement)
    var price =parseFloat(priceElement.innerText.replace('$','')) 
    var quantity = qntyElement.value
    total = total + (price*quantity)
}
document.getElementsByClassName("total-cl")[0].innerText = total;
document.getElementsByClassName("subto")[0].innerText = subtotal;
document.getElementsByClassName("tax")[0].innerText = tax;

}