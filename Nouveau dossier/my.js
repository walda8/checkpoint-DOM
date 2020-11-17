var plusBtn= document.querySelectorAll('.plus-btn');
for (let plus of plusBtn) {
    plus.addEventListener("click", function () {
        plus.nextElementSibling.innerHTML++;
        shoppingTotal()
    })
};

var minusBtn= document.querySelectorAll('.minus-btn');
for (let minus of minusBtn) {
    minus.addEventListener("click", function () {
        if (minus.previousElementSibling.innerHTML>0){
        minus.previousElementSibling.innerHTML--;
        shoppingTotal()
    }
    return minus.previousElementSibling.innerHTML
    })
};


    
    
function shoppingTotal() {
    let quantity = document.getElementsByClassName("quantitem");
    let prices = document.getElementsByClassName("item-price");
    let total = document.getElementById("totalprice");
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += quantity[i].innerHTML * prices[i].innerHTML;
    }
    return total.innerHTML = sum.toFixed(2) + ' EUR';

}

let deletBtn= document.querySelectorAll('.remove-btn');
for (let rmv of deletBtn) {
    rmv.addEventListener("click", function () {
        rmv.parentNode.parentNode.remove()
        shoppingTotal()
    }


        )}

let likeBtn= document.querySelectorAll('.like-btn');
for(let love of likeBtn){
    love.addEventListener('click', function(){
        if (love.style.background == "rgb(255, 119, 238)"){
            love.style.background = "rgb(255,0,0)";
        }else {
            love.style.background = "rgb(255, 119, 238)";
        }

    })
}
