


function getInputValue(){
	var inputVal = document.getElementById("invite-input").value;
	createPerson(inputVal);
	document.getElementById("invite-input").value = '';
}

var added_persons = document.getElementById('added-persons');

function createPerson(name) {
	var ad = name;
	if (ad !== '') {
		var yenidiv = document.createElement("DIV");
		yenidiv.setAttribute("class", "person");
		yenidiv.innerHTML = `${ad}<span onclick="benisil(this)" title="Sil"><i class="fa fa-trash"></i></span>`;
		added_persons.appendChild(yenidiv);
		console.log(yenidiv);
	} else {
		alert("Lütfen bir isim giriniz..");
	}
}


function benisil(spanEl) {
	var spanParent = spanEl.parentNode;
	spanParent.remove();
}


/*
var delete_person = document.querySelectorAll('.delete-person');

delete_person.forEach(item => item.addEventListener('click', function(e) {
	var element = e.target.parentNode.parentNode.parentNode;
	element.remove();
}));*/

/*
function likeComment(z) {
	var yenisayi = parseInt(z.childNodes[2].innerText);
	yenisayi++;
	var yenisayiStr = yenisayi.toString();
	z.childNodes[2].innerText = yenisayiStr;
}

*/



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







var notif_popup = document.getElementById('notif-popup');
/*
function openNotifPopup() {
	if (notif_popup.style.display === "flex") {
		notif_popup.style.display = "none";
	} else {
		notif_popup.style.display = "flex";
	}
} 

*/





var filter_btn = document.querySelectorAll('.filter-button');
var filter_modal_all = document.querySelectorAll('.filter-pop');

function activeFilter() {
	removeFilter();
}
function removeFilter() {
	filter_modal_all.forEach(item => item.classList.remove('filter-open'));
}
filter_btn.forEach(item => item.addEventListener('click', activeFilter));



$(document).ready(function(){
        // Show hide popover
        $(".filter-tools").click(function(){
        	$(this).find(".filter-pop").addClass('filter-open');
        });

        $(".user-pop-main").click(function() {
        	$(this).find(".login-user-popup").css("display", "flex");
        });
        $(".notif-pop-main").click(function() {
        	$(this).find(".notification-popup").css("display", "flex");
        });


    });

$(document).on("click", function(event){


	var $trigger = $(".filter-tools");
	if($trigger !== event.target && !$trigger.has(event.target).length){
		$(".filter-pop").removeClass('filter-open');
	}      


	var $profile_trigger = $(".user-pop-main");
	if($profile_trigger !== event.target && !$profile_trigger.has(event.target).length){
		$(".login-user-popup").css("display", "none");
	}


	var $notif_trigger = $(".notif-pop-main");
	if($notif_trigger !== event.target && !$notif_trigger.has(event.target).length){
		$(".notification-popup").css("display", "none");
	}    



});



/* mobile -kesfedin */
var mobile_kesfedin = document.getElementById('mobile-kesfedin');
function openKesfedin() {

	if (mobile_kesfedin.style.height === "auto") {
		mobile_kesfedin.style.height = "70px";
	} else {
		mobile_kesfedin.style.height = "auto";
	}
}




function openJobInfoText(spanText) {
	var job_info_text = document.getElementById('job-info-text');

	if (job_info_text.style.height === "auto") {
		job_info_text.style.height = "75px";
		spanText.innerText = "DEVAMINI OKU..";
	} else {
		job_info_text.style.height = "auto";
		spanText.innerText = "DAHA AZ GÖSTER..";
	}
}






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
var modal_save_photo = document.getElementById('id05');
var mobile_cont_filter = document.getElementById('mobile-cont-filter');
var mobile_menu_cont = document.getElementById('mobile-menu-cont');

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		modal2.style.display = "none";
		console.log(event.target);
	} else if (event.target == modal2) {
		modal2.style.display = "none";
		modal.style.display = "none";
	} else if (event.target == modal_search) {
		modal_search.style.display = "none";
		modal2.style.display = "none";
		modal.style.display = "none";
	} else if (event.target == modal_save_photo) {
		modal_save_photo.style.display = "none";
	} else if (event.target == mobile_cont_filter) {
		//mobile_menu_cont.style.transorm = "translateX(-100%)";
		console.log(event.target);
		mobile_menu_cont.style.transform = "translateX(-100%)";
		mobile_cont_filter.style.transform = "translateX(-100%)";
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

function savePhoto() {
	document.getElementById('id05').style.display='flex';
}

function openMobileMenu() {
	var mobile_menu_cont = document.getElementById('mobile-menu-cont');
	var mobile_cont_filter = document.getElementById('mobile-cont-filter');
	mobile_menu_cont.style.transform = "translateX(0%)";
	mobile_cont_filter.style.transform = "translateX(0%)";
}
function closeMobileMenu() {
	var mobile_menu_cont = document.getElementById('mobile-menu-cont');
	var mobile_cont_filter = document.getElementById('mobile-cont-filter');
	mobile_menu_cont.style.transform = "translateX(-100%)";
	mobile_cont_filter.style.transform = "translateX(-100%)";
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




function optionFunc() {
	alert("aaaaaaaa");
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




/* resimler mobile user info açılır kapanır text*/

var mobileUserText = document.getElementById('mobile-user-text');
var chevronDown = document.getElementById('chevron-down');

function openMobileText() {
	if (mobileUserText.style.height === "auto") {
		mobileUserText.style.height = "48px";
		chevronDown.style.transform = "rotate(0deg)";
	} else {
		mobileUserText.style.height = "auto";
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




