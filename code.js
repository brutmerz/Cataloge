let counter = document.getElementById("counter");
let selection = document.getElementById("selection");
let imgSelected = document.getElementById("img");
let typeSelected = document.getElementById("type");
let descripSelected = document.getElementById("description");
let priceSelected = document.getElementById("price");

function reload(item){
    borderemove();
    counter.style.width = "60%";
    selection.style.width = "40%";
    selection.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSelected.src = item.getElementsByTagName("img")[0].src;

    typeSelected.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSelected.innerHTML = "Type description";

    priceSelected.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function closed(){
    counter.style.width = "100%";
    selection.style.width = "0%";
    selection.style.opacity = "0";
    borderemove();
}

function borderemove(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}

