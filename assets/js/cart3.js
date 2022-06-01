// ------------Cart3------------
const btn2 = document.querySelectorAll(".list-content div .boxa input")
// console.log(btn)
btn2.forEach(function(button, index){
	button.addEventListener("click",function(event){{
		var btnItem = event.target;
		var product = btnItem.parentElement;
		var productImg = product.querySelector(".list-content .boxa .imgchitiet-sp img").src
		var productName =  product.querySelector(".list-content .boxa .sanpham-text > span").innerText
		var productPrice =  product.querySelector(".list-content .boxa .sanpham-text strong .gia-giam").innerText
		// console.log(productPrice,productImg,productName);
		addcart2(productPrice,productImg,productName)
	}});
});
function addcart2(productPrice,productImg,productName) {
	var addtr = document.createElement("tr") 
	var cartItem = document.querySelectorAll(".donhang tbody tr")
	for (var i=0; i<cartItem.length;i++){
		var productT = document.querySelectorAll(".titlesp")
		if(productT[i].innerHTML == productName){
			alert("Sản phẩm của bạn đã có trong giỏ hàng")
			return
		}
	}
    var trcontent = '<tr><td class="product-icon"><a><i class="fa-solid fa-circle-xmark"></i></a></td><td class="product-img"><a href="chitiet.html"><img class="img-giohang" src="'+productImg+'" alt=""></a></td><td class="product-namesp"><a href="chitiet.html"><span class="titlesp">'+productName+'</span></a></td><td class="product-price giaca"><strong><span class="gia-giam">'+productPrice+'</span><sup>đ</sup><br></strong></td><td class="product-quality"><input type="number" value="1" min="1" max="10"></td><td class="product-total giaca"><strong><span class="gia-giam">'+productPrice+'</span><sup>đ</sup><br></strong></td></tr>'
	addtr.innerHTML = trcontent
	var cartTable = document.querySelector("tbody")
	// console.log(cartTable)
	cartTable.append(addtr)
	cartTotal2()
	deleteCart2()
}
// Tổng tiền
function cartTotal2() {
	var cartItem3 = document.querySelectorAll(".donhang tbody tr")
	var totalC3 = 0
	var soluong3 = 0
	// console.log(cartItem.length)
	for (var i=0; i<cartItem3.length;i++){
		var inputValue3 = cartItem3[i].querySelector(".donhang input").value
		// console.log(inputValue)
		var productPrice3 = cartItem3[i].querySelector(".donhang strong span").innerText	
		var newsProductPrice3 = productPrice3.split('.').join('');
		// console.log(newsProductPrice)
		totalA3 = newsProductPrice3*inputValue3
		totalC3 = totalC3+totalA3
		totalD3 = totalA3.toLocaleString('de-DE')//Tổng tiền của sp
		var cartPricesp3 = document.querySelector(".product-total .gia-giam")
		cartPricesp3.innerHTML = totalD3
	}

	var cartTotalA3 = document.querySelector(".num-soluong strong span")
	cartTotalA3.innerHTML = totalC3.toLocaleString('de-DE')//Tổng tiền của all sp
	var cartPrice3 = document.querySelector(".lg-sp-Cart-price span")
	cartPrice3.innerHTML = totalC3.toLocaleString('de-DE')

	inputChange2()
}


// Xoá sp trong cart
function deleteCart2(){
	var cartItem = document.querySelectorAll(".donhang tbody tr")
    for (var i=0; i<cartItem.length;i++){
		var productT = document.querySelectorAll(".product-icon .fa-circle-xmark")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItems = cartDelete.parentElement.parentElement.parentElement
			cartItems.remove()
			console.log(cartItems)
			cartTotal2()
        })
		// productT.addEventListener("click", function(){
		// 	document.querySelector(".shopping-cart").style.display = "none"
		// 	document.querySelector(".cart-container").style.display = "block"
		// })
	}
}

function inputChange2() {
	var cartItem = document.querySelectorAll(".donhang tbody tr")
    for (var i=0; i<cartItem.length;i++){
		var inputValue = cartItem[i].querySelector(".donhang input")
		var capnhatsp = document.querySelector(".btn-capnhatcart")
		capnhatsp.addEventListener("click", function(){
			inputValue.addEventListener("change", function(){
			})
			cartTotal2()
		})
	}
}