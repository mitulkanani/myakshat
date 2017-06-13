
$(document).ready(function() {

//Prevent Page Reload on all # links
$("a[href='#']").click(function(e) {
	e.preventDefault();
});

if($(window).width() > 767)
{
	$(".slider-block .slide a").tooltip();
	$(".slider-block .slide a").click(function(){
		$('.tooltip').hide();
	});
}

// datetimepicker
$( ".datepicker" ).datepicker({
	showOn: "both",
	buttonImage: "images/drop-arrow-down.svg",
	buttonImageOnly: true,
	buttonText: "Select date"
});

//equalHeights
$.fn.extend({
	equalHeights: function(){
		var top=0;
		var row=[];
		var classname=('equalHeights'+Math.random()).replace('.','');
		$(this).each(function(){
			var thistop=$(this).offset().top;
			if (thistop>top) {
				$('.'+classname).removeClass(classname); 
				top=thistop;
			}
			$(this).addClass(classname);
			$(this).height('auto');
			var h=(Math.max.apply(null, $('.'+classname).map(function(){ return $(this).outerHeight(); }).get()));
			$('.'+classname).height(h);
		}).removeClass(classname); 
	}    
});


//Tooltip
$(document).on('click','.tooltip-hover',function(event){	
	event.preventDefault();
	event.stopPropagation(); 
	if($(this).parent().hasClass('open-toggle')) {		
		$('.tooltip-block-outer').removeClass('open-toggle');
	} else {		
		$('.tooltip-block-outer').removeClass('open-toggle');
		$(this).parent().addClass('open-toggle');    
	}
});

//Scroll then Click tooltip
$('.slider-modal.collar-modal .tooltip-hover').click(function(){
	var offsetVal = $(this).closest('li').position().top;	
	if(offsetVal > 150){
		$('.modal-content-scroll').mCustomScrollbar('scrollTo',offsetVal-150);
	}	
});


$('.upsell-tie-modal .tooltip-hover').click(function(){
	var offsetVal = $(this).closest('li').position().top;	
	if(offsetVal > 50){
		$('.modal-content-scroll').mCustomScrollbar('scrollTo',offsetVal-50);
	}	
});




$(document).on('click touchstart','.tooltip-block .close-icon', function (e) {
	e.stopPropagation();
	$('.tooltip-block-outer').removeClass('open-toggle');
});



// Measurment Scroll then Click tooltip
$('.measurement-modal .custom-listing li').click(function(){
	var offsetVal = $(this).position().top;		
	setTimeout(function(){
		if(offsetVal > 0){
			$('.modal-content-scroll').mCustomScrollbar('scrollTo',offsetVal);
		}			
	},500);
});


//Prevent Page Reload on all # links
$(".link-text").click(function(e) {
	e.stopPropagation();
});

$('.radio-outer').on('click', function(event) {
	$('.radio-outer').parent('li').removeClass('active');

	if($('#radioShipToSC', this).length == 1)
	{
		$(this).parent('li').addClass('active');
		$('#customer_addresses').hide();
		
	}
	else
	{
		$(this).parent('li').addClass('active');
		$('#customer_addresses').show();
		
	}
});



//Measurment-modal
$(".measurement-login").click(function(){
	$(".measurementmodal-createaccount").stop(true,true).fadeIn();
	$(".measurementmodal-main").stop(true,true).fadeOut();
	$(".measurementmodal-forgotpassword").stop(true,true).fadeOut();
});
$(".measurement-forgotpassword").click(function(){
	$(".measurementmodal-createaccount").stop(true,true).fadeOut();
	$(".measurementmodal-main").stop(true,true).fadeOut();
	$(".measurementmodal-forgotpassword").stop(true,true).fadeIn();
});
$(".back-measurement").click(function(){
	$(".measurementmodal-createaccount").stop(true,true).fadeOut();
	$(".measurementmodal-forgotpassword").stop(true,true).fadeOut();
	$(".measurementmodal-main").stop(true,true).fadeIn();
});



//how-it-work
$(".how-it-work-btn,.work-btn").click(function() {
	$('body').toggleClass('scroll-stop');
	$(".how-it-work-process, .works-block").stop(true,true).fadeToggle();
	if($('body').hasClass('scroll-stop')) {			
		$(".how-it-work-btn").attr('href','#how-it-work-process');
		$(".work-btn").attr('href','#works-block');
		var targetDiv = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(targetDiv).offset().top - ($("header").innerHeight())
		},1000);
		$(".how-it-work-btn").removeAttr('href');
		$(".work-btn").removeAttr('href');
	}
});

//save-degin-overlay
$(".slider-block li a , .add-cart").click(function(){
	$("body").addClass('save-degin-overlay');
});
$(".slider-modal .modal-close").click(function(){
	$("body").removeClass('save-degin-overlay');
});

//for Out of Fabric Overlay
$(".overlay-click").click(function(){
	$('body').addClass("custom-overlay-body");
});

$(".custom-overlay").click(function(){
	$('body').removeClass("custom-overlay-body");
	$('.fabric-outofstock-modal').hide();
});


$(".close-profile").click(function(){
	$(".create-your-profile").slideUp()
});

//get Os and browser
if(navigator.userAgent.indexOf('Mac') > 0){
	$('body').addClass('mac-os');
}


//Input Type Number js
if($(window).width() > 767){
	$('input[type=number]').attr('placeholder', '');
}

if($('input[type=number]').val() != ''){
	$(this).addClass('focus');
}

$('input[type=number]').on('keydown', function(event){
	$(this).css('font-style', 'normal');
});


//More text
$('.read-more-link').click(function(){
	$(".more-content").stop(true,true).slideToggle();
	var $this = $(this);
	$this.toggleClass("active-state");
});

// inner modals
$(document).on('click touchstart','.inner-menu .dropdown-menu', function (e) {e.stopPropagation();});
$(".inner-menu-text").click(function(event){	
	event.preventDefault();
	event.stopPropagation(); 
	if($(this).parent().hasClass('open-toggle')) {		
		$('.inner-menu').removeClass('open-toggle');
	} else {		
		$('.inner-menu').removeClass('open-toggle');
		$(this).parent().addClass('open-toggle');    
	}
});
$('.onsaved em, .overly-bg').click(function(event){
	event.preventDefault();
	$('.inner-menu').removeClass('open-toggle');
	$('.overly-bg').addClass('hidden');
	$('body').removeClass('overly-bg-body');
});

/*$('.saveDesignBtn').click(function(event){
	event.preventDefault();
	$('body').addClass('overly-bg-body');
});*/


$(document).on('click touchstart','body', '.overly-bg', function (event) {
	if(getCookie('afterLoginSavedDesignFlag') != 1){
		$(".inner-menu").removeClass("open-toggle"); 
		$('.overly-bg').addClass('hidden');
		$('body').removeClass('overly-bg-body');
		setCookie('afterLoginSavedDesignFlag', '');
	}else{
		setCookie('afterLoginSavedDesignFlag', '');
		/*$('body').removeClass('overly-bg-body');*/
	}
});


/*Popup center*/
function popupPos(){
	$(".measurement-modal").each(function(){
		var $this = $(this);
		var marginL = $this.innerWidth() / -2;
		var marginT = $this.innerHeight() / -2;

		$this.css({
			"margin-left": marginL,
			"margin-top": marginT
		});
	});
};

if($(window).width() > 767){
	popupPos();
}

$(document).on("click",".show-me-how",function(e){
	e.preventDefault()
	var $this = $(this);
	if($this.attr("href") != "#"){
		$(".measure-body, .existing-shirts").stop().animate({scrollTop:$($this.attr("href")).offset().top}, 1500, "easeInOutExpo");

	}
});

$(".view-prize-link,.btn-enter-now").on("click",function(e){
	e.preventDefault();
	var $this = $(this);
	if($this.attr("href") != "#"){		
		$("html, body").stop().animate({scrollTop:$($this.attr("href")).offset().top - ($("header").innerHeight())}, 2000, "easeInOutExpo");
	}
});

$(".zoom-popup-slider").owlCarousel({
	navigation: true, // Show next and prev buttons
	items : 1,
	paginationSpeed: 400,
	singleItem: true,
	rewindNav: false,
	navigation : true,
	pagination : false,
	navigationText: [
	"<i class='fa fa-angle-left'></i>",
	"<i class='fa fa-angle-right'></i>"],
});


$(".bg-btn").click(function(){
	$("body").addClass("bg-none")
});

$("body").delegate(".owl-prev" , "click" , function(){
	$("body").removeClass("bg-none")

});


// Meaturement hide show
$(".measurements-list span").click(function(){
	$(".measurements-list .measurement-tab").stop(true,true).slideToggle();
	if($(this).hasClass("open")){
		$(this).removeClass("open");
	}else{
		$(this).addClass("open");
	}
});


// text popup check
$(".radio-listing li a").click(function(){
	$this = $(this).closest("li");
	if($($this).hasClass("active")){
		$($this).removeClass("active");
	}
	else{
		$($this).addClass("active");
		$($this).siblings("li").removeClass("active");
	}
});


//Right Box Fixed on Scroll
/*var scrollable = document.getElementById("scrollable");
new ScrollFix(scrollable);*/

//Right Box Fixed on Scroll 
$(window).scroll(function() {
	if($(window).scrollTop() > 300){
		$("body").addClass("fixed-wrap");

		var offsetL = $('.container').offset().left;	
		$(".sticky-block").css("margin-right" , +offsetL);
		$(window).resize(function(){				
			var offsetL = $('.container').offset().left;	
			$(".sticky-block").css("margin-right" , +offsetL);
		});
	}
	else{
		$("body").removeClass('fixed-wrap');

		var offsetL = $('.container').offset().left;	
		$(".sticky-block").css("margin-right" , 0);
		$(window).resize(function(){				
			var offsetL = $('.container').offset().left;	
			$(".sticky-block").css("margin-right" , 0);
		});
	}
});

$(".show-me-how").click(function(){
	$("body").toggleClass("show-panel")
});



//Slide Panel
$(".nav-icon").click(function(){
	$("body").toggleClass("menu-open")
});

//Gallery show
$(".view-more-link").click(function(){
	$(".hidden-block").fadeToggle();
	$(".view-more-link").toggleClass("open");
	$(".slider-modal").toggleClass("open");

});


//Forgot password
$(".forgot-password").click(function(){
	$(".forgot-password-block").fadeIn()
	$(".login-block").fadeOut()
});

//New Login Popup


$('.signUp').on('click', function (){
	$('#login-modal .top-block').css('display', 'none');
	$('#login-modal .bottom-block').css('display', 'block');
});

$('.login').on('click', function (){
	$('#login-modal .bottom-block').css('display', 'none');
	$('#login-modal .top-block').css('display', 'block');

}); 

$(".login-popup .bottom-block").css('display','none');

$('#login-modal .forgot-password').on('click', function (){
	$('#login-modal .top-block .login-block').css('display', 'none');
});

//ORDER HISTORY Slider
$(".order-history-carousel").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	navigation : true,
	items :5, //10 items above 1000px browser width
	itemsDesktop : [900,5], // betweem 900px and 601px
	itemsDesktopSmall : [768,4], // betweem 900px and 601px
	itemsTablet: [767,4], //2 items between 600 and 0;
	itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
	navigationText : ["", ""]
});

//Prices tabs slider
$(".prices-tabbing-slider").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	navigation : true,
	mouseDrag : true,
	touchDrag : true,
	items :1, //10 items above 1000px browser width
	itemsDesktop : [900,1], // betweem 900px and 601px
	itemsDesktopSmall : [768,1], // betweem 900px and 601px
	itemsTablet: [767,1], //1 items between 600 and 0;
	itemsMobile : [479,1], // itemsMobile disabled - inherit from itemsTablet option
	navigationText : ["", ""],
});


$('.prices-tabbing-slider .owl-prev').click(function() {

	if($(".prices-tabs li.current").hasClass('first')){
		$(".prices-tabs li.first").removeClass('current');
		$(".prices-tabs li.last").addClass('current');
	}else {
		$(".prices-tabs li.current").prev('li').attr('data-tab');
		$(".prices-tabs li.current").removeClass('current').prev('li').addClass('current');
	}
});
$('.prices-tabbing-slider .owl-next').click(function() {

	if($(".prices-tabs li.current").hasClass('last')){
		$(".prices-tabs li.last").removeClass('current');
		$(".prices-tabs li.first").addClass('current');
	}else {
		$(".prices-tabs li.current").next('li').attr('data-tab');
		$(".prices-tabs li.current").removeClass('current').next('li').addClass('current');
	}
});



$('.prices-tabs li').click(function(){
	var $index = $(this).closest("li").index();
	$('#prices-tabbing-slider').trigger("owl.jumpTo", [$index]);
});

// Listen to owl events:




//Prices tabs slider
$(".prices-tabs-slider").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	navigation : true,
	items :2, //10 items above 1000px browser width
	itemsDesktop : [900,2], // betweem 900px and 601px
	itemsDesktopSmall : [768,2], // betweem 900px and 601px
	itemsTablet: [767,2], //2 items between 600 and 0;
	itemsMobile : [479,2], // itemsMobile disabled - inherit from itemsTablet option
	navigationText : ["", ""]
});

//fitting-consultants-slider
$(".fitting-consultants-slider").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	navigation : true,
	items :3, //10 items above 1000px browser width
	itemsDesktop : [900,3], // betweem 900px and 601px
	itemsDesktopSmall : [768,3], // betweem 900px and 601px
	itemsTablet: [767,1], //2 items between 600 and 0;
	itemsMobile : [479,1], // itemsMobile disabled - inherit from itemsTablet option
	navigationText : ["", ""]
});

//fitting-consultants-Tabing
$('ul.prices-tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.prices-tabs li').removeClass('current');
	$('.prices-content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
})


//ORDER HISTORY Slider
$(".save-design-carousel").owlCarousel({
	autoPlay: false, //Set AutoPlay to 3 seconds
	navigation : true,
	items :3, //10 items above 1000px browser width
	itemsDesktop : [900,3], // betweem 900px and 601px
	itemsDesktopSmall : [768,2], // betweem 900px and 601px
	itemsTablet: [767,2], //2 items between 600 and 0;
	itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
	navigationText : ["", ""]
});

//contrast hidden open
$(".contrast").click(function(){
	isContrastClicked = 1;
	$(".contrast-c-block").removeClass('hidden'); 
	$(".selection-slider-outer").hide(); 
	$(".bx-prev").addClass('disabled'); 

});

//extra slider hidden open
$(".extra-slider-link").click(function(){
	isContrastClicked = 1;
	$(".extra-slider").removeClass('hidden'); 
	$(".selection-slider-outer").hide(); 
	$(".bx-prev").addClass('disabled'); 
});



$(".back-btn").click(function(){
	$(".contrast-c-block").addClass('hidden'); 
	$(".selection-slider-outer").show(); 

	if (window.innerHeight < window.innerWidth) {			
		$(".bx-prev").removeClass('disabled'); 
		$(".bx-next").addClass('disabled');
	}else{			
		if ($(window).width() < 991) {
			$(".bx-prev").removeClass('disabled'); 
			$(".bx-next").addClass('disabled');
		}
	}
});

$(".back-arrow-btn").click(function(){
	$(".extra-slider").addClass('hidden'); 
	$(".selection-slider-outer").show(); 

	if (window.innerHeight < window.innerWidth) {			
		$(".bx-prev").removeClass('disabled'); 
		$(".bx-next").addClass('disabled');
	}else{			
		if ($(window).width() < 991) {
			$(".bx-prev").removeClass('disabled'); 
			$(".bx-next").addClass('disabled');
		}
	}
});

//For dropdown-popup-open 
$(".state-text").click(function(){
	$(".landing-page").addClass("dropdown-popup-open"); 
});

$('.dropdown-popup').on('hidden.bs.modal', function () {
	if($(".modal").hasClass('in')){
		$(".modal").css('opacity','1');	
	}
});

/*All close event handled by this click event*/
$(".modal-close").click(function(){
	var $this = $(this).closest(".slider-block");
	$this.modal('hide');
	$this.find(".modal").fadeOut();
	$this.removeClass("active");
	$(".modal-backdrop.in").hide();	
	$(".top-block .control-selection").hide();
	$(".modal-img-control li").removeClass("active");
});
/*All close event handled by this click event*/


/*State / Territory*/
$("#mob-dropdown-lising li a").click(function() {
	var text = $(this).html();
	$(".dropdown-popup, .modal-backdrop").toggleClass("in");
	$("body").toggleClass("modal-open");
	$("#stateText").text($(this).text()); 
	$("#stateText").toggleClass("open");
	$("#stateText").css('font-style','normal');
});
/*State / Territory*/

/*Country*/
$("#mob-dropdown-country li a").click(function() {
	var text = $(this).html();
	$(".dropdown-popup, .modal-backdrop").toggleClass("in");
	$("body").toggleClass("modal-open");
	$("#countryText").text($(this).text()); 
	$("#countryText").toggleClass("open");
	$("#countryText").css('font-style','normal');
});
/*State / Territory*/

/*Card Exp Date*/
$("#mob-cardExpDate-lising li a").click(function() {
	var text = $(this).html();
	$(".dropdown-popup, .modal-backdrop").toggleClass("in");
	$("body").toggleClass("modal-open");
	$("#cardExpDate").text($(this).text()); 
	$("#cardExpDate").css('font-style','normal');

});
/*Card Exp Date*/


/*Card Exp Month*/
$("#mob-cardExpMonth-lising li a").click(function() {
	var text = $(this).html();
	$(".dropdown-popup, .modal-backdrop").toggleClass("in");
	$("body").toggleClass("modal-open");
	$("#cardExpMonth").text($(this).text());  
	$("#cardExpMonth").css('font-style','normal');
});
/*Card Exp Month*/

/*Shipping Address*/
$("#mob-shipAddress-lising li a").bind('touchend click', function(){ 
	var text = $(this).html();
	$(".dropdown-popup").toggleClass("in");
	$("body").toggleClass("modal-open");
	$("#shippingAddress1").text($(this).text());  
	$("#shippingAddress1").css('font-style','normal');
	/*set focus after popup listing close*/
	$(".top-left h1").trigger('click');
	/*set focus after popup listing close*/
});
/*Shipping Address*/

/*Credit Card*/
$("#mob-creditCard-lising li a").click(function() {
	var text = $(this).html();
	$(".dropdown-popup, .modal-backdrop").toggleClass("in");
	$("body").toggleClass("modal-open");
	$("#creditCard1").text($(this).text());  
	$("#creditCard1").css('font-style','normal');
});
/*Credit Card*/

/*Expiry Month*/
$("#mob-expiryMonth-lising li a").click(function() {
	var text = $(this).html();
	$(".dropdown-popup, .modal-backdrop").toggleClass("in");
	$("body").toggleClass("modal-open");
	$("#expiryMonth").text($(this).text()); 
	$("#expiryMonth").css('font-style','normal');
	/*set popup opicity while popup open on another popup*/
	$("#major-popup").css('opacity','1');
	/*set popup opicity while popup open on another popup*/

});
/*Expiry Month*/

/*Expiry Year*/
$("#mob-expiryYear-lising li a").click(function() {
	var text = $(this).html();
	$(".dropdown-popup, .modal-backdrop").toggleClass("in");
	$("body").toggleClass("modal-open");
	$("#expiryYear").text($(this).text()); 
	$("#expiryYear").css('font-style','normal');
	/*set popup opicity while popup open on another popup*/
	$("#major-popup").css('opacity','1');
	/*set popup opicity while popup open on another popup*/

});
/*Expiry Year*/

/*State Territory-2*/
$("#mob-state-territory-2-lising li a").click(function() {
	var text = $(this).html();
	$(".dropdown-popup, .modal-backdrop").toggleClass("in");
	$("body").toggleClass("modal-open");
	$("#state-territory-2").text($(this).text()); 
	$("#state-territory-2").css('font-style','normal');
	/*set popup opicity while popup open on another popup*/
	$("#modal4").css('opacity','1');
	/*set popup opicity while popup open on another popup*/
});

/*set popup opicity while popup open on another popup*/

$(document).on('show.bs.modal', '.modal', function (event) {
	var zIndex = 999 + (5 * $('.modal:visible').length);
	$(this).css('z-index', zIndex);
	setTimeout(function() {$('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack'); }, 0);
});


$(".price-box .add-cart").click(function(e){
	e.preventDefault();
	$(this).parent().addClass("active");
	$(".price-box .add-cart").not(this).parent().removeClass('active');
	var tabing = $(this).attr("href");
	$(".modal").not(tabing).css("display", "none");
	$(tabing).stop(true,true).fadeIn();
	$(".measurement-modal").toggleClass('in');
});


$(".measurement-modal .close").click(function(){
	$(".measurement-modal").removeClass('in');
});


if ($(window).width() < 768) {
	$(".price-box .add-cart").click(function(e){
		e.preventDefault();
		$(this).parent().addClass("active");
		$(".price-box .add-cart").not(this).parent().removeClass('active');
		var tabing = $(this).attr("href");
		$(".modal").not(tabing).css("display", "none");
		$(tabing).stop(true,true).fadeIn();
		$(".measurement-modal").removeClass('in');

	});
}


$(".selection-slider .slide a").click(function(e){
	e.preventDefault();
	//don't open popup for disable option
	if ($(e.target).hasClass("dataDisable") || $(e.target).parents('.slide').hasClass("dataDisable")){ 
		return;
	}
	/*set show more options*/
	$(".hidden-block").fadeOut();
	$(".view-more-link").removeClass("open");
	$(".slider-modal").removeClass("open");
	/*set show more options*/

		//$(this).parent().addClass("active");
		$(this).closest('li').addClass("active");
		$(".selection-slider .slide a").not(this).closest('li').removeClass('active');
		var tabing = $(this).attr("href");
		$(".modal").not(tabing).css("display", "none");
		$(tabing).stop(true,true).fadeIn();
	});

/*contrast-slider*/
$(".contrast-slider li a, .extra-slider li a").click(function(e){
	e.preventDefault();	
	        //don't open popup for disable option
	        if ($(e.target).hasClass("dataDisable") || $(e.target).parents('.contrast-slide.slide').hasClass("dataDisable")){ 
	        	return;
	        }
	        $(".slider-modal").removeClass("open");
	        /*$(this).parent().addClass("active");*/
	        $(this).closest('li').addClass("active");
	        $(".contrast-slider li a, .extra-slider li a").not(this).closest('li').removeClass('active');
	        var tabing = $(this).attr("href");
	        $(".modal").not(tabing).css("display", "none");
	        $(tabing).stop(true,true).fadeIn();
	    });



$(".selection-slider .slide a.contrast").click(function(){
	$(".contrast-c-block").stop(true,true).fadeIn();
	$(".selection-slider").stop(true,true).fadeOut();

});

$(".contrast-c-block .back-btn").click(function(){
	$(".contrast-c-block").stop(true,true).fadeOut();
	$(".selection-slider").stop(true,true).fadeIn();
});
/*contrast-slider*/


/*extra-slider*/
$(".extra-slider .back-arrow-btn").click(function(){
	$(".extra-slider").stop(true,true).fadeOut();
	$(".selection-slider").stop(true,true).fadeIn();
});

var mouseKeyPressed = 0;
$(document).on("click", ".fabric-list li a", function (e) {
	if($(window).width() > 767){
		e.stopPropagation();
	}
	$this = $(this).closest("li");
	if ($this.hasClass("open")) {
		$this.removeClass("open");
	}
	else{
		$this.addClass("open").siblings("li").removeClass("open");
	}
	mouseKeyPressed = 0;
});    

$(document).on("mousedown", ".fabric-list li a", function () {
	mouseKeyPressed = 1;
});

$('body').mouseup(function() {
	if(mouseKeyPressed == 0){        
		$(".fabric-list li").removeClass("open");
		$("#modal-content").modal('show');
	}
});

$('.collections-filter ul li').click(function(event){	
	event.stopPropagation();
	if($(this).hasClass('open-toggle')) {		
		$(this).removeClass('open-toggle');
	} else {		
		$('ul li.open-toggle').removeClass('open-toggle');
		$(this).addClass('open-toggle');    
	}
});

$('body').click(function(e){	
	if(mouseKeyPressed == 0){        
		$(".collections-filter ul li").removeClass("open-toggle");		
	}
});

$(".left-pocket").click(function(){
	$(".slider-modal").modal('hide');
	$(".pocket-modal").fadeOut();
	setTimeout(function(){
		$(".modal-backdrop.in").hide();
	},100);
});

$(".back").click(function(){  
	if ($(".fade-left").is(':animated'))
	{
		return false;
	}
	var hashValue = $( this ).parent().parent().parent().parent().attr('id');
	var url = this.href;
	var thisHash = url.substring(url.indexOf('#')+1);
	$("#"+thisHash).addClass('fade-left');
	/*$(".pocket-shape-modal").fadeIn();*/
	$('#'+hashValue).fadeOut(); 

	$(".fade-left").animate({
		left: "+=-450",
	}, 0, function() {

		$(".fade-left").css('left','');
		$("#"+thisHash).removeClass('fade-left');
		setTimeout(function(){
			$(".modal-backdrop.in").hide();
		},100);
	});
});

$(".modal-img-control li a").click(function(e){
	e.preventDefault();

	if($(this).parent().hasClass("active"))
	{
		$(this).parent().removeClass("active");
		$(".top-block .control-selection").fadeOut();
		$(".slider-modal").stop(true,true).removeClass("open");
	}
	else{
		$(this).parent().addClass("active");
		$(".modal-img-control li a").not(this).parent().removeClass('active');
		var tabing = $(this).attr("href");
		$(".control-selection").not(tabing).css("display", "none");
		$(tabing).stop(true,true).fadeIn();
		$(".slider-modal").stop(true,true).addClass("open");
		if($(this).attr('class') == 'reuse'){
			$(".slider-modal").stop(true,true).removeClass("open");
		}else{
			$(".slider-modal").stop(true,true).addClass("open");
		}

	}
});


	//icheck(checkbox & radio)
	$('.icheck').iCheck({
		checkboxClass: 'icheckbox_square',
		radioClass: 'iradio_square',
		increaseArea: '20%' 
	});


	// Custom Dropdown
	$("select[data-type='custom-dropdown']").dropkick({
		mobile: true
	});

	// Dropdown Verticle Align Middle
	$('.dropdown-popup').on('show.bs.modal', function() {
		$(".dropdown-popup .modal-dialog").animate({top: $(window).height() / 2 - $(".dropdown-popup .modal-dialog").height() / 2 - 30 }, 500);
	});


	// popup-scroll 
	$(".popup-scroll").mCustomScrollbar({
		scrollButtons:{enable:true},
		theme:"dark-thick",
		scrollbarPosition:"inside"
	});

	// Custom Scroll
	$(".dk-select-options").mCustomScrollbar({
		scrollButtons:{enable:true},
		theme:"dark-thick",
		scrollbarPosition:"inside"
	});

	$(".modal-content-scroll, .profile-list, .fabric-drop-list, .collections-filter-list, .scroll-measurement, .fabric-drop-modal .modal-content ").mCustomScrollbar({
		scrollButtons:{enable:true},
		theme:"light-thick",
		mouseWheelPixels: 200 ,
		scrollInertia: 1000,
		scrollbarPosition:"inside"

	});

	$(".dropdown-popup .modal-dialog, .slide-panel").mCustomScrollbar({
		scrollButtons:{enable:true},
		theme:"dark-thick",
		scrollbarPosition:"inside"
	});


	if($(window).width() < 768 ){
		$(".scroll-block").mCustomScrollbar({
			scrollButtons:{enable:true},
			theme:"light-thick",
			scrollbarPosition:"inside",

         // For Window Scroll Input Cursor None
	       /* callbacks:{
	        	whileScrolling:function(){

	        		$("input").blur();
	        	}
	        }*/
	    });
	}

	// fillimg
	$(".fillimg").imagefill();


	/*custom code for change background of modal popup*/
	$(".engine-popup").click(function(e){
		e.preventDefault();
		$("body").addClass('engine-popup-main');
	});

	$(".modal-header .close").click(function(e){
		$("body").removeClass('engine-popup-main');
	});

	if($(window).width() <= 767){ 
		$('.upsell-modal').on('shown.bs.modal', function() {
			$("body").removeClass('engine-popup-main');  
		});
	}
	/*custom code for change background of modal popup*/

});


//eqHeight
function eqHeightCol(){
	$(".gallery-block li").css("height","auto");
	var HeightArray = 0; var i = 0; var max = 0;
	$(".gallery-block li").each(function(){
		HeightArray=$(this).height();
		max = Math.max(max,HeightArray);
	});
	$(".gallery-block li").each(function(){
		$(this).height(max);
	});
};

function eqHeightli(){
	setTimeout(function () {
		$(".product-listing li").css("height","auto");
		var HeightArray = 0; var i = 0; var max = 0;
		$(".product-listing li").each(function(){
			HeightArray=$(this).height();
			max = Math.max(max,HeightArray);
		});
		$(".product-listing li").each(function(){
			$(this).height(max);
		});
	}, 1000);
};

function eqHeightBox(){
	if($(window).width() > 1080){
		$(".two-col-unit").css("height","auto");
		var HeightArray = 0; var i = 0; var max = 0;
		$(".two-col-unit").each(function(){
			HeightArray=$(this).height();
			max = Math.max(max,HeightArray);
		});
		$(".two-col-unit").each(function(){
			$(this).height(max);
		});
	}
};


$(window).load(function() {
	eqHeightCol();	
	setTimeout(function () {
		eqHeightli();
	}, 1000);
	eqHeightBox();

});

$(window).resize(function(){
	eqHeightCol();
	eqHeightli();
	eqHeightBox();


	// Dropdown Verticle Align Middle
	$(".dropdown-popup .modal-dialog").animate({top: $(window).height() / 2 - $(".dropdown-popup .modal-dialog").outerHeight() / 2 - 30}, 0);
});

function checkInchesFeet()
{
	var feet = $('#txtCustomFtHeight').val();
	var inches = $('#txtCustomInHeight').val();

	$('#height_ft .error').hide();
	$('#hdnErrFlag').val(1);
	$('#hdnErrFlag').attr('data-key', $("#hdnHeight").attr('data-key'));

	if(feet == '' && inches == '')
	{
		$('#errSelHeight').show();
		return false;
	}
	else if(feet != '' && inches == '')
	{
		$('#txtCustomInHeight').addClass('errorBorder');
		$('#errInHeight').show();
		return false;
	}
	else if(feet == '' && inches != '')
	{
		$('#txtCustomFtHeight').addClass('errorBorder');
		$('#errFtHeight').show();
		return false;
	}
	else if((inches < 0 || inches > 11) || (feet < 4 || feet > 7) || (feet == 4 && inches < 8) || (feet == 7 && inches > 0))
	{
		$('#txtCustomFtHeight, #txtCustomInHeight').addClass('errorBorder');
		$('#errMinMaxHeight').show();
		return false;
	}
	else
	{
		$('#hdnErrFlag').val(0);
		$('#hdnErrFlag').removeAttr('data-key');
		$('#txtCustomFtHeight, #txtCustomInHeight').removeClass('errorBorder');
		$('#height_ft .error').hide();
		return true;
	}
}

var owl = '';
//Pages Slider
$(window).load(function(){

	var status = $(".num");
	$(".custom-listing-inner").click(function() {
		$("#existing-shirts .right-block.measurement-block1.neck-block, #measure-body .right-block.measurement-block1").css({"top":"-189px"})
		var currentModalBoxId = '#' + $(this).attr('data-value');
		var currentModalBox = $(currentModalBoxId);        
		if($(this).attr('data-value') == '' || $(currentModalBoxId).length === 0)
		{
			return true;
		}

		if(owl != '') {            
			owlInstance = owl.data('owlCarousel');
			if(owlInstance != null) {
				owlInstance.destroy();              
			}
		}

		status = $(".num");
		$(".pages-slider",currentModalBox).owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 150,
            items : 1,
            paginationSpeed: 400,
            navigationText: ["BACK", "next"],
            singleItem: true,
            rewindNav: false,
            touchDrag  : false,
            mouseDrag  : false,
            autoHeight: false,
            afterInit: function(elem) {
            	setTimeout(function() {                
            		$('.inputClickClass:eq(0)').focus(0);
            	}, 300);
            },
            beforeMove: function(elem){
            	beforeMoveFun(elem);
            	
            } ,
            afterAction: afterAction
        });

		owl = $('.pages-slider',currentModalBox);
		owl.owlCarousel();


		var isAjaxCalled = 0;
		var alertCount = 0;
		var shirt_attr_11 = $('#attr_11').val();
		function beforeMoveFun(elem)
		{
			$('.liHeight, .liWeight').click(function(event) {
				isAjaxCalled = 0;
			});

			$('#txtCustomHeight, #txtCustomWeight').blur(function(event) {
				isAjaxCalled = 0;
			});

			$('#btnShirtAttrBodyShape, #btnShirtAttrFitStyle', '#remainshirtattrs').on('click', function(event) {
				$('.errorTechFit', '#remainshirtattrs').hide();
				if($(this).attr('id') == 'btnShirtAttrBodyShape')
				{
					var errShirtAttrBodyShape = "errShirtAttrBodyShape";
					var hdnShirtAttrBodyShape = "hdnShirtAttrBodyShape";

					if($('#hdnShirtAttrBodyShape').val() == '')
					{
						$('#errShirtAttrBodyShape').show();
						owl.trigger('owl.jumpTo', 0);
					}
					else
					{
						var selectedBodyShape = $('#hdnShirtAttrBodyShape').val();
						setShirtsAttributes('callBodyShape',selectedBodyShape, shirt_attr_11);
					}
				}
				else if($(this).attr('id') == 'btnShirtAttrFitStyle')
				{
					var errShirtAttrFitStyle = "errShirtAttrFitStyle";
					var hdnShirtAttrFitStyle = "hdnShirtAttrFitStyle";

					if($('#hdnShirtAttrFitStyle').val() == '')
					{
						$('#errShirtAttrFitStyle').show();
						owl.trigger('owl.jumpTo', 1);
					}
					else
					{
						var selectedBodyShape = $('#hdnShirtAttrBodyShape').val();
						var selectedFitStyle = $('#hdnShirtAttrFitStyle').val();
						setShirtsAttributes('callFitStyle',selectedBodyShape, shirt_attr_11, selectedFitStyle);
						var extraID = $("#profile_update").val();
						if(isAjaxCalled == 0)
						{
							$.ajax({
								url: siteURL+'/shirts/saveShirtAttrs',
								type: 'POST',
								data: {'bodyShape': selectedBodyShape, 'fitStyle': selectedFitStyle,'extraID' : extraID},
								async:false
							})
							.done(function(data) {
								var selectedProfileCount = $('.profile-list li.select-profile-name').length;
								if ((selectedProfileCount > 0 || $("#existingMeasurement").val() != ''))
								{
									urlGoto = "";
									$("#errorTextExisting").html('');
									$("#errorTextExisting").removeClass('error');
									if (typeof (goto) !== "undefined" && goto != "")
									{
										urlGoto = '&goto=' + goto;
                                                                               /*appendLoader('existingMeasureButtonCheckOut', 'show');
                                                                               $("#existingMeasureButtonCart").hide();*/
                                                                               $(".pageLoader").show();
                                                                           }
                                                                           else
                                                                           {
                                                                               /*appendLoader('existingMeasureButtonCart', 'show');
                                                                               $("#existingMeasureButtonCheckOut").hide();*/
                                                                               $(".pageLoader").show();
                                                                           }

                                                                           $("#cart_form").attr('action', siteURL + '/shirts/custom?action=add_product' + urlGoto);
                                                                           $("#cart_form").submit();

                                                                       }
                                                                       else
                                                                       {
                                                                       	$(".alert.alert-danger").show();
                                                                       	$("#errorText").html(languageLabels["please-select-profile"]);
                                                                       	$("#errorText").addClass("error");
                                                                       	$("#errorTextExisting").html(languageLabels["please-select-profile"]);
                                                                       	$("#errorTextExisting").addClass("error");
                                                                       }
                                                                   })
return false;
}

}
}
				/*var currentIndex = parseInt($.trim($('span.currentItem', '#remainshirtattrs').text())) - 1;
				if(currentIndex >= 0)
				{
					var ulLiClass = elem.find(".owl-item").eq(currentIndex).find("ul li a").first().attr('class');
					if(typeof ulLiClass != 'undefined')
					{
						var hdnField = ulLiClass.replace("list", "hdn");
						var errField = ulLiClass.replace("list", "err");
						$('#'+errField).hide();
						if($('#'+hdnField).val() == '')
						{
							$('#'+errField).show();
							owl.trigger('owl.jumpTo', currentIndex);
						}
					}
				}*/
			});

$('.owl-next', "#quick-measure").on('click', function(event) {
	var currentIndex = $('div.active', '#quick-measure').index()-1;
	if(currentIndex >= 0)
	{
		var ulLiClass = elem.find(".owl-item").eq(currentIndex).find("ul li a").first().attr('class');
		if(typeof ulLiClass != "undefined")
		{
			var hdnField = ulLiClass.replace("li", "hdn");
			var hdnErrField = ulLiClass.replace("li", "err");
			if(($('#'+hdnField).val() == '' || $('#'+hdnField).val() == 0))
			{
				owl.trigger('owl.jumpTo', currentIndex);
				if(hdnField == 'hdnHeight')
				{
					if($('#hdnMeasHeight').val() == 1)
					{
						$('#errCmHeight').show();
					}
					else if($('#hdnMeasHeight').val() == 0)
					{
						if(checkInchesFeet())
						{
							$('#errSelHeight').show();
						}
					}
				}
				else
				{
					$('#'+hdnErrField).show();
				}
			}
			else
			{
				if ($('#hdnErrFlag').val() == 1)
				{
					var jumpto = $('#hdnErrFlag').attr('data-key') - 1;
					owl.trigger('owl.jumpTo', jumpto );
				}
				else
				{
					$('#'+hdnErrField).hide();
				}
			}
			var originalIndex = currentIndex + 1;
			if(currentIndex == 1 && isAjaxCalled == 0 && $('#hdnErrFlag').val() == 0)

			{
				$(".pageLoader").addClass("forceToShow");
				isAjaxCalled = 1;
				var height = $('#hdnHeight').val();
				var weight = $('#hdnWeight').val();
				if(height > 0 && weight > 0)
				{
					$.ajax({
						url: siteURL+"/autosize/getPredicatedMeas",
						type: 'POST',
						data: {"height": height, "weight": weight},
					})
					.done(function(data) {
						$(".pageLoader").removeClass("forceToShow");
						if(data != '')
						{
							data = $.parseJSON(data);
							$("#predictedMeas").attr('data-key', data.cpac_autosize_predicted_collarsize);
							$("#predictedMeas").attr('data-value', data.cpac_autosize_predicted_collarsize);
							$("#predictedMeas").html(data.cpac_autosize_predicted_collarsize);
							$("#hdnCollarSize").val(data.cpac_autosize_predicted_collarsize);
							$("#txtCustomCollarSize").val(data.cpac_autosize_predicted_collarsize);
							$("#txtCustomCollarSize").css('font-style', 'normal');
							$('.liCollarSize', '#quick-measure').each(function(index, el)
							{
								$(this).removeClass('active');
								if($(this).attr('data-value') == $.trim($('#predictedMeas').text()))
								{
									$(this).addClass('active');
								}
							});
						}
						else
						{
							isAjaxCalled = 0;
							alert('We couldn\'t find predicted measurement with given height and weight.');
							owl.trigger('owl.jumpTo', 0);
						}
					})
}
else
{
	$(".pageLoader").removeClass("forceToShow");
}
}
}
}
});
}

function updateResult(pos, value) {
	status.find(pos).find(".result").text(value);
}

function afterAction() {  
	var currentItemDetails = $('div.item', owl).eq(this.owl.currentItem);
	if(currentItemDetails.attr('id') == "all-done") 
	{
		$(".num").hide();
	}
	else
	{
		$(".num").show();
		if($(currentModalBox).attr('id') == 'remainshirtattrs')
		{
			updateResult(".owlItems", this.owl.owlItems.length);
		}
		else
		{
			updateResult(".owlItems", this.owl.owlItems.length - 4);
		}
		updateResult(".currentItem:first-child", 1);
		updateResult(".currentItem", this.owl.currentItem + 1);
	}
	if(currentItemDetails.attr('id') == "autosizeForgotPasswordPage" || currentItemDetails.attr('id') == "autosizeLoginPage" || currentItemDetails.attr('id') == "autosizeSignUpPage" || currentItemDetails.attr('id') == "bodyShirtSignUpPage" || currentItemDetails.attr('id') == "bodyShirtLoginPage" || currentItemDetails.attr('id') == "bodyshirtForgotPasswordPage"){
		$(".customNavigation .num").hide();
	}
}
});



    // Go to the next item
    $('.custom-next').click(function() {
    	owl.trigger('owl.next');
    });

    // Go to the previous item
    $(".custom-prev").click(function() {
    	owl.trigger('owl.prev');
    });


// Footer Adj
/*function heightAdj(){
	var heightH = $(".fabric-modal .modal-header").outerHeight();
	
	alert();
	$(".fabric-modal .modal-content").css({"top": heightH});
}
*/


	// Footer Adj
	function footerAdj(){
		var footerH = $("footer").outerHeight();
		$("footer").css({"margin-top": -footerH});
		$(".wrapper").css({"padding-bottom": footerH});
	}

	footerAdj();
	/*	heightAdj();*/

	$(window).resize(function(){
		footerAdj();
		/*heightAdj();*/
	});

});
//pop-up code end


function eqvalcol(){
	$(".banner-block .eqvalcol").css("height","auto");
	var HeightArray = 0; var i = 0; var max = 0;
	$(".banner-block .eqvalcol").each(function(){
		HeightArray=$(this).height();
		max = Math.max(max,HeightArray);
	});
	$(".banner-block .eqvalcol").each(function(){
		$(this).height(max);
	});
};


var isContrastClicked = 0;
$(window).load(function(){
	eqvalcol();	

	var slider = $('.selection-slider').bxSlider();
	bxsliderInit(slider); 

	var contrastSlider = $('.contrast-slider').bxSlider();
	contrastSliderInit(contrastSlider);

	$(".contrast-c-block .back-btn").click(function(){
		$(".contrast-c-block").removeClass('hidden'); 
		var contrastSlideHeight = $(".contrast-c-block .slide").outerHeight();
		var contrastSlideWidth = $(".contrast-c-block .slide").outerWidth();

		var mainSlideWidth = $(".selection-slider").outerWidth();
		$(".contrast-c-block").addClass('hidden'); 

		isContrastClicked = 0;

		if(window.innerHeight < window.innerWidth){		

			if(window.innerHeight  - $(".back-btn").outerHeight() >= 768){
				var minNoSlides = 8;
			}else if(window.innerHeight  - $(".back-btn").outerHeight() >= 548){           
				var minNoSlides = 7;
			}else if(window.innerHeight  - $(".back-btn").outerHeight() >= 320){           
				var minNoSlides = 4;
			}else{          
				var minNoSlides = 3;
			}
			$(".selection-slider .slide").css('width', mainSlideWidth+'px');

			contrastSlider.reloadSlider({
				mode: 'vertical',
				useCSS: false,
				minSlides: minNoSlides ? minNoSlides : 1,
				moveSlides: 1,
				speed: 400,
				touchEnabled: true,
				infiniteLoop: false,
				hideControlOnEnd: true,
			});

			var contrastSlideHeight = ((window.innerHeight - $(".back-btn").outerHeight())/minNoSlides);

			$(".contrast-slider .slide").css('height', contrastSlideHeight+'px');

		}else{	
			// if(window.innerWidth - $(".back-btn").outerWidth() >= 768){
			// 	var minNoSlides = 8;
			// }else if(window.innerWidth - $(".back-btn").outerWidth() > 548){           
			// 	var minNoSlides = 7;
			// }else if(window.innerWidth - $(".back-btn").outerWidth() > 320){           
			// 	var minNoSlides = 4;
			// }else{          
			// 	var minNoSlides = 3;
			// }


			if(window.innerWidth >= 414){
				var minNoSlides = 4;
			}else if(window.innerWidth > 320){			
				var minNoSlides = 3;
			}else{			
				var minNoSlides = 3;
			}

			var finalWidth = parseInt((window.innerWidth - $(".portrait-view .contrast-c-block .back-btn").innerWidth()) / minNoSlides);

	        //to avoid extra blank slide in devices
	        if(window.innerWidth == 414){
	        	var minNoSlides = minNoSlides;
	        }else{
	        	var minNoSlides = minNoSlides + 1;
	        }

	        contrastSlider.reloadSlider({
	        	mode: 'horizontal',
	        	useCSS: false,
	        	minSlides: minNoSlides ? minNoSlides : 1,
	        	moveSlides: 1,
	        	speed: 400,
	        	touchEnabled: true,
	        	infiniteLoop: false,
	        	hideControlOnEnd: true,
	        	slideWidth: finalWidth,
	        });
	    } 
	});


if (window.innerHeight < window.innerWidth) {


	if(window.innerHeight >= 950){
		var minNoSlides = 9;
	}else if(window.innerHeight >= 900){         
		var minNoSlides = 8;
	}else if(window.innerHeight >= 768){         
		var minNoSlides = 7;
	}else if(window.innerHeight >= 500){         
		var minNoSlides = 6;
		}else if(window.innerHeight >= 414){         //iPhone6 plus
			var minNoSlides = 5;
		}else if(window.innerHeight > 320){          
			var minNoSlides = 4;
		}else{          
			var minNoSlides = 4;
		}
		
		if(window.innerHeight - $(".back-btn").outerHeight() >= 768){
			var minContrastSlides = 8;
		}else if(window.innerHeight - $(".back-btn").outerHeight() >= 548){            
			var minContrastSlides = 7;
		}else if(window.innerHeight - $(".back-btn").outerHeight() >= 414){            
			var minContrastSlides = 5;
		}else if(window.innerHeight - $(".back-btn").outerHeight() >= 320){            
			var minContrastSlides = 4;
		}else{
			var minContrastSlides = 3;
		}
		var slideHeight = (window.innerHeight/minNoSlides); 
		var contrastSlideHeight = ((window.innerHeight - $(".back-btn").outerHeight())/minContrastSlides);
		$(".selection-slider .slide").css('height', slideHeight+'px');
		$(".contrast-slider .slide").css('height', contrastSlideHeight+'px');


	}

	var resizeTimeout;
	$(window).resize(function(){
		if ($(window).width() >= 991) {
			$("body").removeClass("landscape-view");
			$("body").removeClass("portrait-view");
		}
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function(){   
			bxsliderInit(slider);
			contrastSliderInit(contrastSlider,isContrastClicked);
		}, 0);

		setTimeout(function(){  
			if (window.innerHeight < window.innerWidth) {    			
				if(window.innerHeight >= 950){
					var minNoSlides = 9;
				}else if(window.innerHeight >= 900){         
					var minNoSlides = 8;
				}else if(window.innerHeight >= 768){         
					var minNoSlides = 7;
				}else if(window.innerHeight >= 500){         
					var minNoSlides = 6;
				}else if(window.innerHeight >= 414){         //iPhone6 plus
					var minNoSlides = 5;
				}else if(window.innerHeight > 320){          
					var minNoSlides = 4;
				}else{          
					var minNoSlides = 4;
				}

				if(window.innerHeight - $(".back-btn").outerHeight() >= 768){
					var minContrastSlides = 8;
				}else if(window.innerHeight - $(".back-btn").outerHeight() >= 548){            
					var minContrastSlides = 7;
				}else if(window.innerHeight - $(".back-btn").outerHeight() >= 320){            
					var minContrastSlides = 4;
				}else{
					var minContrastSlides = 3;
				}
				var slideHeight = (window.innerHeight/minNoSlides);
				var contrastSlideHeight = ((window.innerHeight - $(".back-btn").outerHeight())/minContrastSlides);
				$(".selection-slider .slide").css('height', slideHeight+'px');
				$(".contrast-slider .slide").css('height', contrastSlideHeight+'px');
			}
		}, 100);
});

$('.middle-img-block').load();

});

$(window).resize(function(){
	eqvalcol();
	$('.middle-img-block').load();
	$('.eqval-col').equalHeights();

});

window.onload = function(){ 
	$('.middle-img-block').load();
	$('.eqval-col').equalHeights();

};

//Left Slider
function bxsliderInit(slider){

    //Left Slider 
    if ($(window).width() >= 991) {
    	if(window.innerHeight >= 950){
    		var minNoSlides = 9;
    	}else if(window.innerHeight >= 900){
    		var minNoSlides = 8;
    	}else if(window.innerHeight >= 768){
    		var minNoSlides = 7;
    	}else if(window.innerHeight > 320){          
    		var minNoSlides = 4;    
    	}else{          
    		var minNoSlides = 4;
    	}

    	if(slider.length > 0){			
    		if(parseInt(window.innerHeight%$(".slide").outerHeight()) > 0){                
                var totalMargin = (window.innerHeight / (parseInt(window.innerHeight/$(".slide a").outerHeight()))) - $(".slide a").outerHeight() ; // number of slide
                var margin = (totalMargin / 2);

            }

            slider.reloadSlider({
            	mode: 'vertical',
            	adaptiveHeight : true,
            	useCSS: false,
            	infiniteLoop: false,
            	minSlides : minNoSlides ? minNoSlides : 1,
            	hideControlOnEnd: true,
            	moveSlides : 1
            });
            slider.on("mousewheel", function(event, delta, deltaX, deltaY) { 
            	if (delta > 0) {
            		slider.goToPrevSlide();
            	}
            	if (deltaY < 0){
            		slider.goToNextSlide();
            	}
            	event.stopPropagation();
            	event.preventDefault();
            });
        }
        $(".selection-slider-outer .bx-controls-direction").each(function(i){
        	if($(".selection-slider-outer .bx-controls-direction").length > 1){
        		if(i == 0){ 
        			$(".selection-slider-outer .bx-controls-direction:eq('"+i+"')").remove(); 
        		}
        	}
        });
    }else{ 
    	orientation(slider);
    }
    /*remove bx-loading div*/
    $("div.bx-loading").remove();
}

function orientation(slider){
	$(".selection-slider .slide a").css('padding-top', '0px');
	$(".selection-slider .slide a").css('padding-bottom', '0px');

	if(window.innerHeight >= 984){
		var minNoSlides = 9;
	}else if(window.innerHeight >= 414){         //iPhone6 plus
		var minNoSlides = 5;        
	}else if(window.innerHeight > 320){          
		var minNoSlides = 4;
	}else{          
		var minNoSlides = 4;
	}



	if(window.innerHeight < window.innerWidth){
		$(".landing-page").addClass("landscape-view");
		$(".landing-page").removeClass("portrait-view");

		if(window.innerHeight >= 984){
			var minNoSlides = 6;
		}else if(window.innerHeight >= 414){         //iPhone6 plus
			var minNoSlides = 5;        
		}else if(window.innerHeight > 320){          
			var minNoSlides = 4;
		}else{          
			var minNoSlides = 4;
		}

		var finalWidth = $(".selection-slider").outerWidth();

		
		
		if ($(window).width() < 991) {
			if(slider.length > 0){
				
				slider.reloadSlider({
					mode: 'vertical',
					useCSS: false,
					minSlides : minNoSlides ? minNoSlides : 1,
					moveSlides : 1,
					speed : 400,
					touchEnabled : true,
					infiniteLoop: false,
					adaptiveHeight : true, 
					hideControlOnEnd: true,
					slideWidth: finalWidth,
				}); 
			}
		}
		if ($(window).width() <= 412 && $(window).height() < 412){
			if (slider.length > 0) {
				slider.reloadSlider({
					mode: 'horizontal',
					useCSS: false,
					minSlides: minNoSlides ? minNoSlides : 1,
					moveSlides: 1,
					speed: 400,
					touchEnabled: true,
					infiniteLoop: false,
					adaptiveHeight: true,
					hideControlOnEnd: true,
					slideWidth: finalWidth,
				});
			}	
		}
	}else{

		if(window.innerWidth >= 991){
			var minNoSlides = 6;
		}else if(window.innerWidth >= 768){			
			var minNoSlides = 5;		
		}else if(window.innerWidth > 320){			
			var minNoSlides = 4;
		}else{			
			var minNoSlides = 4;
		}
		
		var finalWidth = ((window.innerWidth) / minNoSlides);

		        //to avoid extra blank slide in devices
		        var minNoSlides = minNoSlides + 1;

		        $(".landing-page").removeClass("landscape-view");
		        $(".landing-page").addClass("portrait-view");
		        if ($(window).width() < 991) {
		        	if(slider.length > 0){
		        		slider.reloadSlider({
		        			mode: 'horizontal',
		        			useCSS: false,
		        			minSlides : minNoSlides ? minNoSlides : 1,
		        			moveSlides : 1,
		        			speed : 400,
		        			touchEnabled : true,
		        			infiniteLoop: false,
		        			hideControlOnEnd: true,
		        			//slideWidth : $(".slide").outerWidth() * (window.innerWidth/$(".slide").outerWidth()),
		        			slideWidth : finalWidth,
		        		}); 
		        	}
		        }
		    }
		    slider.on("mousewheel", function(event, delta, deltaX, deltaY) { 
		    	if (delta > 0) {
		    		slider.goToPrevSlide();
		    	}
		    	if (deltaY < 0){
		    		slider.goToNextSlide();
		    	}
		    	event.stopPropagation();
		    	event.preventDefault();
		    });

		    $(".selection-slider-outer .bx-controls-direction").each(function(i){
		    	if($(".selection-slider-outer .bx-controls-direction").length > 1){
		    		if(i == 0){ 
		    			$(".selection-slider-outer .bx-controls-direction:eq('"+i+"')").remove(); 
		    		}
		    	}
		    });
		}

		function contrastSliderInit(contrastSlider, isClicked) { 
			if(typeof isClicked === 'undefined') var isClicked = 0;
			if ($(window).width() >= 991) { 
				// if(window.innerHeight - $(".back-btn").outerHeight() >= 768){
				// 	var minNoSlides = 8;
				// }else{          
				// 	var minNoSlides = 7;
				// }

				if(window.innerHeight - $(".back-btn").outerHeight() >= 768){
					var minNoSlides = 8;
				}else if(window.innerHeight - $(".back-btn").outerHeight() >= 548){            
					var minNoSlides = 7;
				}else if(window.innerHeight - $(".back-btn").outerHeight() >= 414){            
					var minNoSlides = 5;
				}else if(window.innerHeight - $(".back-btn").outerHeight() >= 320){            
					var minNoSlides = 4;
				}else{
					var minNoSlides = 3;
				}
				var contrastSlideHeight = ((window.innerHeight - $(".back-btn").outerHeight())/minNoSlides);
				var contrastSlideWidth = $(".contrast-c-block").outerWidth();

				if (contrastSlider.length > 0) {
					$('.contrast-c-block').removeClass('hidden');
					if(!isClicked)
					{
						$('.contrast-c-block').addClass('hidden');
					}
					contrastSlider.reloadSlider({
						mode: 'vertical',
						useCSS: false,
						minSlides: minNoSlides ? minNoSlides : 0,
						moveSlides: 1,
						speed: 400,
						touchEnabled: true,
						infiniteLoop: false,
						hideControlOnEnd: true,
						slideWidth: $(".contrast-c-block").innerWidth(),

					});
					contrastSlider.on("mousewheel", function(event, delta, deltaX, deltaY) { 
						if (delta > 0) {
							contrastSlider.goToPrevSlide();
						}
						if (deltaY < 0){
							contrastSlider.goToNextSlide();
						}
						event.stopPropagation();
						event.preventDefault();
					});

				} 
			} else {
				contrastOrientation(contrastSlider, isClicked);
			}
			/*remove bx-loading div*/
			$("div.bx-loading").remove();
		}

		function contrastOrientation(contrastSlider, isClicked){
			$(".contrast-c-block").removeClass('hidden'); 
			var contrastSlideHeight = $(".contrast-c-block .slide").outerHeight();
			var contrastSlideWidth = $(".contrast-c-block .slide").outerWidth();
			if(!isClicked)
			{
				$(".contrast-c-block").addClass('hidden'); 
			}

			if(window.innerHeight - $(".back-btn").outerHeight() >= 768){
				var minNoSlides = 8;
			}else if(window.innerHeight - $(".back-btn").outerHeight() > 320){         
				var minNoSlides = 3;
			}else{          
				var minNoSlides = 3;
			}
			
			if (window.innerHeight < window.innerWidth) {
				$(".landing-page").addClass("landscape-view");
				$(".landing-page").removeClass("portrait-view");


				if ($(window).width() < 991) {
					if (contrastSlider.length > 0) { 
						contrastSlider.reloadSlider({
							mode: 'vertical',
							useCSS: false,
							minSlides: minNoSlides ? minNoSlides : 1,
							moveSlides: 1,
							speed: 400,
							touchEnabled: true,
							infiniteLoop: false,
							adaptiveHeight: true,
							hideControlOnEnd: true
						});
					}
				}
				if ($(window).width() <= 412 && $(window).height() < 412){
					$(".landing-page").removeClass("landscape-view");
					$(".landing-page").addClass("portrait-view");    	
				}
			} else {
				$(".landing-page").removeClass("landscape-view");
				$(".landing-page").addClass("portrait-view");

				if ($(window).width() < 991) {

					if(window.innerWidth >= 414){
						var minSlidesNo = 4;
					}else if(window.innerWidth > 320){			
						var minSlidesNo = 3;
					}else{			
						var minSlidesNo = 3;
					}
					var finalWidth = ((window.innerWidth - $(".portrait-view .contrast-c-block .back-btn").innerWidth()) / minSlidesNo);

          //to avoid extra blank slide in devices
          if(window.innerWidth == 414){
          	var minSlidesNo = minSlidesNo;
          }else{
          	var minSlidesNo = minSlidesNo + 1;
          }

          if (contrastSlider.length > 0) {    			
          	contrastSlider.reloadSlider({
          		mode: 'horizontal',
          		useCSS: false,
          		minSlides: minSlidesNo ? minSlidesNo : 1,
          		moveSlides: 1,
          		speed: 400,
          		touchEnabled: true,
          		infiniteLoop: false,
          		hideControlOnEnd: false,
          		slideWidth: finalWidth,
          		onSlideAfter: function($slideElement, oldIndex, newIndex) {
          			$(".bx-prev").removeClass('disabled');
          			$(".bx-next").removeClass('disabled');
          			var currentSlide = contrastSlider.getCurrentSlide();
          			var totalSlide = contrastSlider.getSlideCount();
          			if((totalSlide - currentSlide) === minSlidesNo)
          			{
          				$(".bx-next").addClass('disabled'); 
          			}
          			else if(newIndex == 0)
          			{
          				$(".bx-prev").addClass('disabled'); 
          			}
          		}
          	});
          }
      }
  } 
}


function setShirtsAttributes(call, bodyShape, attr_11, fitStyle)
{
	if(call == 'callFitStyle')
	{
        if(bodyShape == 3 && fitStyle == 3) // BodyShape is OverWeight and Fit preference is Loose
        {
            $('#attr_2').val(587); // Extra loose Fit DB Value
        }
        else
        {
            if (fitStyle == 0) // 0 > Very slim and close to the body
            {
               $('#attr_2').val(2244); // Super Slim DB Value
           }
            else if (fitStyle == 1) // 1 > Tailored fit but not too tight
            {
                $('#attr_2').val(5); // Slim Fit DB Value
            }
            else if (fitStyle == 2) // 2 > Classic, traditional fit
            {
                $('#attr_2').val(4); // Standard Fit DB Value
            }
            else if (fitStyle == 3) // 3 > Loose fit, plenty of room to move
            {
                $('#attr_2').val(3); // Larger Fit DB Value
            }
        }

        // Back Details * Do NOT apply if the customer has changed the default back options means changed only when attr_11 have (67)
        if(attr_11 == 67)
        {
            if(fitStyle == 3) // loose fit, plenty of room to move
            {
                $('#attr_11').val(69); // 69 : "Side folds" DB value
            }
        }
    }
    else if(call == 'callBodyShape')
    {
    	if(attr_11 == 67) 
    	{
            if(bodyShape == 0 || bodyShape == 1 || bodyShape == 2) // 0 = skinny, 1 = standard, 2 = muscular
            {
                $('#attr_11').val(90); // 90 : "Side Darts" DB Value
            }
            else if(bodyShape == 3) // 3 = overweight
            {
                $('#attr_11').val(69); // 69 : "Side folds" DB value
            }
        }
    }
}

