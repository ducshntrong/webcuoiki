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


