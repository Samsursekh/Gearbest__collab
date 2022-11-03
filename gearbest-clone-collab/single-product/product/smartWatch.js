import smartWatchesData from "./smartWatchesData.js";
const container = document.querySelector(".container");


appendData(smartWatchesData);

function appendData(smartWatchesData) {
  container.innerHTML = null;
  smartWatchesData.forEach((el) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.goodsImage;
    img.onclick = () => {
      showInfo(el);
    }

   
    let p = document.createElement("p");
    p.innerText = el.goodsTitle;
    let div1 = document.createElement("div");
    div1.append(p);
    div1.style.height = "100px"
    div1.style.overflow = "hidden";
    let h2 = document.createElement("h2");
    h2.innerText = `$ ${el.displayPrice}`;

  

    div.append(img, div1, h2,);
    container.append(div);
  });
  function showInfo(el) {
    window.location.href = "../single-product.html";
    localStorage.setItem("clickedItem", JSON.stringify(el));
  };
};


/* --------sorting function------------- */





document.querySelector("#trending").addEventListener("click", sortByTrending);

function sortByTrending() {
  smartWatchesData.sort( (a, b) => {
    return ((a.goodsTitle.length) - (b.goodsTitle.length));
  });
  appendData(smartWatchesData);

};


document.querySelector("#sortByPrice").addEventListener("change", sortByPrice);

function sortByPrice() {
  let selected = document.querySelector("#sortByPrice").value;
  if (selected === "ascending") {
    smartWatchesData.sort((a, b) => {
      console.log("insideFun");
      return (Number(a.displayPrice) - Number(b.displayPrice));
    });
    appendData(smartWatchesData);

  } else if (selected === "descending") {
    smartWatchesData.sort( (a, b) =>{
      return (Number(b.displayPrice) - Number(a.displayPrice));
    });
    appendData(smartWatchesData);
  };
};