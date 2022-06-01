// Đăng nhập và đăng ký
$(document).ready(function() {
	$('#btn-login').click(function(e) {
		$('.modal').css('display', 'flex')
		$('.modal__overlay').css('display', 'block')
		$('#popup-signin').css('display', 'block')
	})
	$('.btn-back-signin').click(function(){
		$('.modal').css('display', 'none')
		$('.modal__overlay').css('display', 'none')
		$('#popup-signin').css('display', 'none')
	})
	$('.btn-back-register').click(function(){
		$('.modal').css('display', 'flex')
		$('.modal__overlay').css('display', 'block')
		$('#popup-signin').css('display', 'block')
		$('#popup-register').css('display', 'none')
	})
	$('.close-form').click(function(){
		$('.modal').css('display', 'none')
		$('.modal__overlay').css('display', 'none')
		$('#popup-signin').css('display', 'none')
		$('#popup-register').css('display', 'none')
	})
	$('.modal__overlay').click(function(){
		$('.modal').css('display', 'none')
		$('.modal__overlay').css('display', 'none')
		$('#popup-signin').css('display', 'none')
		$('#popup-register').css('display', 'none')
	})
	$('#btn-register').click(function() {
		$('.modal').css('display', 'flex')
		$('#popup-signin').css('display', 'none')
		$('.modal__overlay').css('display', 'block')
		$('#popup-register').css('display', 'block')
	})
	$('#btn-signin').click(function() {
		$('.modal').css('display', 'flex')
		$('#popup-signin').css('display', 'block')
		$('.modal__overlay').css('display', 'block')
		$('#popup-register').css('display', 'none')
	})
	$('.btn-thanhtoan').click(function(e) {
		alert("Thanh toán thành công")
	})
	$('.submit').click(function(e) {
		alert("Gửi thành công")
	})

	$('.themvaogio').click(function(e) {
		$('.shopping-cart').css('display', 'flex')
		$('.shopping-cart').css('display', 'block')
		$('.cart-container').css('display', 'none')
	})
	$('.themvaogio2').click(function(e) {
		$('.shopping-cart').css('display', 'flex')
		$('.shopping-cart').css('display', 'block')
		$('.cart-container').css('display', 'none')
	})
	//cart
	// $('.close-form1').click(function(e) {
	// 	$('.giohang').css('display', 'none')
	// })
	// $('#btn-cart').click(function(e) {
	// 	$('.giohang').css('display', 'block')
	// })
	// $('.btn-xemsp').click(function(e) {
	// 	$('.giohang').css('display', 'none')
	// })
})



$(document).ready(function() {
	$('.sanphamnoibat1').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		infinite: true,
		cssEase: 'linear'
	});
	$('.sanphamnoibat').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		infinite: true,
		cssEase: 'linear'
	});
	$('.sanphamnoibat5').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		cssEase: 'linear'
	});
	$('.sanphamnoibat2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		cssEase: 'linear'
	});
})

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()){
			$('.button-circle-div').fadeIn();
		} else{
			$('.button-circle-div').fadeOut();
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()){
			$('#header2').addClass('sticky');
		} else{
			$('#header2').removeClass('sticky');
		}
	});
});


// ------------Cart1------------
const btn = document.querySelectorAll(".sanphamnoibat .boxc input")
// console.log(btn)
btn.forEach(function(button, index){
	button.addEventListener("click",function(event){{
		var btnItem = event.target;
		var product = btnItem.parentElement;
		var productImg = product.querySelector(".sanphamnoibat .boxc .boxc-child img").src
		var productName =  product.querySelector(".sanphamnoibat .boxc .sanpham-text > span").innerText
		var productPrice =  product.querySelector(".sanphamnoibat .boxc .sanpham-text strong .gia-giam").innerText
		// console.log(productPrice,productImg,productName);
		addcart(productPrice,productImg,productName)
	}});
});
function addcart(productPrice,productImg,productName) {
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
	cartTotal()
	deleteCart()
}
// Tổng tiền
function cartTotal() {
	var cartItem = document.querySelectorAll(".donhang tbody tr")
	var totalC = 0
	var soluong = 0
	// console.log(cartItem.length)
	for (var i=0; i<cartItem.length;i++){
		var inputValue = cartItem[i].querySelector(".donhang input").value
		// console.log(inputValue)
		var productPrice = cartItem[i].querySelector(".donhang strong span").innerText	
		var newsProductPrice = productPrice.split('.').join('');
		// console.log(newsProductPrice)
		totalA = newsProductPrice*inputValue
		totalC = totalC+totalA
		totalD = totalA.toLocaleString('de-DE')//Tổng tiền của sp
	}
	
	var cartTotalA = document.querySelector(".num-soluong strong span")
	cartTotalA.innerHTML = totalC.toLocaleString('de-DE')//Tổng tiền của all sp
	inputChange()
}

// Xoá sp trong cart
function deleteCart(){
	var cartItem = document.querySelectorAll(".donhang tbody tr")
    for (var i=0; i<cartItem.length;i++){
		var productT = document.querySelectorAll(".product-icon .fa-circle-xmark")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItems = cartDelete.parentElement.parentElement.parentElement
			cartItems.remove()
			console.log(cartItems)
			cartTotal()
        })
	}
}

function inputChange() {
	var cartItem = document.querySelectorAll(".donhang tbody tr")
    for (var i=0; i<cartItem.length;i++){
		var inputValue = cartItem[i].querySelector(".donhang input")
		var capnhatsp = document.querySelector(".btn-capnhatcart")
		capnhatsp.addEventListener("click", function(){
			inputValue.addEventListener("change", function(){
			})
			cartTotal()
		})
	}
}

const cartShow = document.querySelector("#btn-cart")
cartShow.addEventListener("click", function(){
	document.querySelector(".giohang").style.right = "0"
})
const cartClose = document.querySelector(".close-form1")
cartClose.addEventListener("click", function(){
	document.querySelector(".giohang").style.right = "-100%"
})

const cartBack = document.querySelector(".btn-xemsp")
cartBack.addEventListener("click", function(){
	document.querySelector(".giohang").style.right = "-100%"
})
const btnBackhome = document.querySelector(".buttton-backshop")
btnBackhome.addEventListener("click", function(){
	document.querySelector(".giohang").style.right = "-100%"
})

