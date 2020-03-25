



/* yarisma detay sayfası tab nav */

var tab_btn = document.querySelectorAll('.tab-btn');
var projeler = document.getElementById('projeler');
var aciklama = document.getElementById('aciklama');
var kaynaklar = document.getElementById('kaynaklar');
function activeTab() {
	removeTab();
	this.classList.add('active-detay-tab');
	
	if (this.innerText == "Teslimler") {
		projeler.style.display = "flex";
		aciklama.style.display = "none";
		kaynaklar.style.display = "none";
	} else if (this.innerText == "Açıklama") {
		projeler.style.display = "none";
		aciklama.style.display = "block";
		kaynaklar.style.display = "none";
	} else if (this.innerText == "Kaynaklar") {
		projeler.style.display = "none";
		aciklama.style.display = "none";
		kaynaklar.style.display = "flex";
	}

}
function removeTab() {
	tab_btn.forEach(item => item.classList.remove('active-detay-tab'));
}
tab_btn.forEach(item => item.addEventListener('click', activeTab));









var filter_btn = document.querySelectorAll('.filter-button');
var filter_modal_all = document.querySelectorAll('.filter-pop');

function activeFilter() {
	removeFilter();
	var filter_modal = this.parentNode.childNodes[3];
	filter_modal.style.display = "block";
}
function removeFilter() {
	filter_modal_all.forEach(item => item.style.display = "none");
}
filter_btn.forEach(item => item.addEventListener('click', activeFilter));








var nav_btn = document.querySelectorAll('.nav_btn');
function activeButton() {
	removeActive();
	this.classList.add('active-nav');
}
function removeActive() {
	nav_btn.forEach(item => item.classList.remove('active-nav'));
}
nav_btn.forEach(item => item.addEventListener('click', activeButton));



var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal_search = document.getElementById('id03');

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		modal2.style.display = "none";
		console.log(event.target);
	} else if (event.target == modal2) {
		modal2.style.display = "none";
		modal.style.display = "none";
	}
	else if (event.target == modal_search) {
		modal_search.style.display = "none";
		modal2.style.display = "none";
		modal.style.display = "none";
	}
}

function openLogin() {
	document.getElementById('id01').style.display='block';
	document.getElementById('id02').style.display='none';
}

function openRegister() {
	document.getElementById('id01').style.display='none';
	document.getElementById('id02').style.display='block';
}

function openSearch() {
	document.getElementById('id03').style.display='flex';
}


function openMobileMenu() {
	var mobile_menu_cont = document.getElementById('mobile-menu-cont');
	mobile_menu_cont.style.transform = "translateX(0%)";
}
function closeMobileMenu() {
	var mobile_menu_cont = document.getElementById('mobile-menu-cont');
	mobile_menu_cont.style.transform = "translateX(-100%)";
}

/* read more comment */ 

function readMore(comment) {
	var item = comment.parentNode.childNodes[3];
	if (item.style.height === "auto") {
		item.style.height = "44px";
	} else {
		item.style.height = "auto";
	}
}



/* read more comments */
function moreComments() {
	var section = document.getElementById('comment-section');

	if (section.style.height === "auto") {
		section.style.height = "650px";
	} else {
		section.style.height = "auto";
	}
}





/* open user info in profile page */

var userInfo = document.getElementById('user-info');
var userInfoP = document.getElementById('user-info-p');


function openUserInfo(span) {
	if (userInfo.style.height === "auto" && userInfoP.style.height === "auto") {
		userInfo.style.height = "200px";
		userInfoP.style.height = "140px";
		span.innerText = "Daha fazla...";	
	} else {
		userInfo.style.height = "auto";
		userInfoP.style.height = "auto";
		span.innerText = "Daha az...";
	}
}



/* like blog post button in blog-detay page */

var begen_btn = document.getElementById('begen-btn');

function likeBlogPost() {
	begen_btn.style.backgroundColor = "#AA7C13";
}


/* 	resimler.html sayfası slider kodları */
var thumb = document.querySelectorAll('.thumb');
var thumbLength = thumb.length;


slideNo = 0;

var sliderImg = document.getElementById('slider-img');
function activeThumb() {
	removeThumb();
	this.classList.add('active-thumb');
	var thumbImg = this.childNodes[1].src;
	document.getElementById('slider-img').src = thumbImg;
	slideNo = this.id - 1;

}
function removeThumb() {
	thumb.forEach(item => item.classList.remove('active-thumb'));
}
thumb.forEach(item => item.addEventListener('click', activeThumb));




/* slider button navigators */

function nextSlide(arti) {
	slideNo += arti;
	if (slideNo < thumbLength) {
		document.getElementById('slider-img').src = thumb[slideNo].childNodes[1].src;
		thumb.forEach(item => item.classList.remove('active-thumb'));
		thumb[slideNo].classList.add('active-thumb');
	} else {
		slideNo = -1;
	}
}

function prevSlide(eksi) {
	slideNo += eksi;
	if (slideNo < thumbLength && slideNo > -1) {
		document.getElementById('slider-img').src = thumb[slideNo].childNodes[1].src;
		thumb.forEach(item => item.classList.remove('active-thumb'));
		thumb[slideNo].classList.add('active-thumb');
	} else {
		slideNo = 5;
	}
}




/* resimler mobile user info açılır kapanır text */

var userInfoResimler = document.getElementById('user-info-resimler');
var chevronDown = document.getElementById('chevron-down');

function openMobileText() {
	if (userInfoResimler.style.height === "auto") {
		userInfoResimler.style.height = "100px";
		chevronDown.style.transform = "rotate(0deg)";
	} else {
		userInfoResimler.style.height = "auto";
		chevronDown.style.transform = "rotate(180deg)";
	}
}








/* mobile crew section */
$(document).ready(function(){
	$(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
	margin:10,
	loop:false,
	autoWidth:true,
	items:4,
	center: true
});




