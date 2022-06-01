// ------------Cart2------------
const btn1 = document.querySelectorAll(".sanphamnoibat1 .boxd input")
// console.log(btn)
btn1.forEach(function(button, index){
	button.addEventListener("click",function(event){{
		var btnItem1 = event.target;
		var product1 = btnItem1.parentElement;
		var productImg1 = product1.querySelector(".sanphamnoibat1 .boxd .boxd-child img").src
		var productName1 =  product1.querySelector(".sanphamnoibat1 .boxd .sanpham-text > span").innerText
		var productPrice1 =  product1.querySelector(".sanphamnoibat1 .boxd .sanpham-text strong .gia-giam").innerText
		// console.log(productPrice,productImg,productName);
		addcart1(productPrice1,productImg1,productName1)
	}});
});
function addcart1(productPrice1,productImg1,productName1) {
	var addtr1 = document.createElement("tr") 
    var cartItem1 = document.querySelectorAll(".donhang tbody tr")
	for (var i=0; i<cartItem1.length;i++){
		var productT1 = document.querySelectorAll(".titlesp")
		if(productT1[i].innerHTML == productName1){
			alert("Sản phẩm của bạn đã có trong giỏ hàng")
			return
		}
	}
	var trcontent1 = '<tr><td class="product-icon"><a><i class="fa-solid fa-circle-xmark"></i></a></td><td class="product-img"><a href="chitiet.html"><img class="img-giohang" src="'+productImg1+'" alt=""></a></td><td class="product-namesp"><a href="chitiet.html"><span class="titlesp">'+productName1+'</span></a></td><td class="product-price giaca"><strong><span class="gia-giam">'+productPrice1+'</span><sup>đ</sup><br></strong></td><td class="product-quality"><input type="number" value="1" min="1" max="10"></td><td class="product-total giaca"><strong><span class="gia-giam">'+productPrice1+'</span><sup>đ</sup><br></strong></td></tr>'
	addtr1.innerHTML = trcontent1
	var cartTable1 = document.querySelector("tbody")
	// console.log(cartTable)
	cartTable1.append(addtr1)

	cartTotal1()
    deleteCart1()
}
// Tổng tiền
function cartTotal1() {
	var cartItem1 = document.querySelectorAll(".donhang tbody tr")
	var totalC1 = 0
	var soluong1 = 0
	// console.log(cartItem.length)
	for (var i=0; i<cartItem1.length;i++){
		var inputValue1 = cartItem1[i].querySelector(".donhang input").value
		// console.log(inputValue)
		var productPrice1 = cartItem1[i].querySelector(".donhang strong span").innerText	
		var newsProductPrice1 = productPrice1.split('.').join('');
		// console.log(newsProductPrice)
		totalA1 = newsProductPrice1*inputValue1
		totalC1 = totalC1+totalA1
		totalD1 = totalA1.toLocaleString('de-DE')//Tổng tiền của sp
	}
	
	var cartTotalA1 = document.querySelector(".num-soluong strong span")
	var cartPrice1 = document.querySelector(".lg-sp-Cart-price span")
	cartTotalA1.innerHTML = totalC1.toLocaleString('de-DE')
	cartPrice1.innerHTML = totalC1.toLocaleString('de-DE')
	inputChange1()
}
// Xoá sp trong cart
function deleteCart1(){
    var cartItem1 = document.querySelectorAll(".donhang tbody tr")
    for (var i=0; i<cartItem1.length;i++){
		var productT1 = document.querySelectorAll(".product-icon .fa-circle-xmark")
        productT1[i].addEventListener("click", function(event){
            var cartDelete1 = event.target
            var cartItems1 = cartDelete1.parentElement.parentElement.parentElement
            cartItems1.remove()
            console.log(cartItems1)
			cartTotal1()
        })
	}
}

function inputChange1() {
	var cartItem1 = document.querySelectorAll(".donhang tbody tr")
    for (var i=0; i<cartItem1.length;i++){
		var inputValue1 = cartItem1[i].querySelector(".donhang input")
		var capnhatsp1 = document.querySelector(".btn-capnhatcart")
		capnhatsp1.addEventListener("click", function(){
			inputValue1.addEventListener("change", function(){
			})
			cartTotal1()
		})
	}
}
