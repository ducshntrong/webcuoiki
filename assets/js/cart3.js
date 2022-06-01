// // ------------Cart3------------
// const btn2 = document.querySelectorAll(".list-content div .boxa input")
// // console.log(btn)
// btn2.forEach(function(button, index){
// 	button.addEventListener("click",function(event){{
// 		var btnItem = event.target;
// 		var product = btnItem.parentElement;
// 		var productImg = product.querySelector(".list-content .boxa .imgchitiet-sp img").src
// 		var productName =  product.querySelector(".list-content .boxa .sanpham-text > span").innerText
// 		var productPrice =  product.querySelector(".list-content .boxa .sanpham-text strong .gia-giam").innerText
// 		// console.log(productPrice,productImg,productName);
// 		addcart(productPrice,productImg,productName)
// 	}});
// });
// function addcart(productPrice,productImg,productName) {
// 	var addtr = document.createElement("tr") 
// 	var trcontent = '<tr><td class="product-icon"><a href="giohang2.html"><i class="fa-solid fa-circle-xmark"></i></a></td><td class="product-img"><a href="chitiet.html"><img class="img-giohang" src="'+productImg+'" alt=""></a></td><td class="product-namesp"><a href="chitiet.html"><span class="titlesp">'+productName+'</span></a></td><td class="product-price giaca"><strong><span class="gia-giam">'+productPrice+'</span><sup>đ</sup><br></strong></td><td class="product-quality"><input type="number" value="1" min="1" max="10"></td><td class="product-total giaca"><strong><span class="gia-giam">'+productPrice+'</span><sup>đ</sup><br></strong></td></tr>'
// 	addtr.innerHTML = trcontent
// 	var cartTable = document.querySelector("tbody")
// 	// console.log(cartTable)
// 	cartTable.append(addtr)

// 	cartTotal()
// }
// // Tổng tiền
// function cartTotal() {
// 	var cartItem = document.querySelectorAll(".donhang tbody tr")
// 	var totalC = 0
// 	var soluong = 0
// 	// console.log(cartItem.length)
// 	for (var i=0; i<cartItem.length;i++){
// 		var inputValue = cartItem[i].querySelector(".donhang input").value
// 		// console.log(inputValue)
// 		var productPrice = cartItem[i].querySelector(".donhang strong span").innerText	
// 		var newsProductPrice = productPrice.split('.').join('');
// 		// console.log(newsProductPrice)
// 		totalA = newsProductPrice*inputValue
// 		totalC = totalC+totalA
// 		totalB = totalC.toLocaleString('de-DE')//Tổng tiền của all sp
// 		totalD = totalA.toLocaleString('de-DE')//Tổng tiền của sp
// 	}
	
// 	var cartTotalA = document.querySelector(".num-soluong strong span")
// 	cartTotalA.innerHTML = totalB
	
// }