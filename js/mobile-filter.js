
/* mobile filter */

var filter1 = document.getElementById('filter-mobile-black');
var mobile_filter1 = document.getElementById('mobile-filter-1');
var item1 = document.getElementById('item-1');
var item2 = document.getElementById('item-2');
var item3 = document.getElementById('item-3');
var item4 = document.getElementById('item-4');
var item5 = document.getElementById('item-5');

window.onclick = function(event) {
	if (event.target == filter1) {
		filter1.style.opacity = "0";
		filter1.style.pointerEvents = "none";
		mobile_filter1.style.transform = "translateY(100%)";
	} 

}


function mobileFilterAll() {
	if(window.innerWidth < 900) {
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
	}
}

//----------------------------------------------
function openTur() {
	item1.style.position = "absolute";
	item1.style.transform = "translateX(-100%)";

	item2.style.position = "static";
	item2.style.transform = "translateX(0%)";
}


function openOdalar() {
	item1.style.position = "absolute";
	item1.style.transform = "translateX(-200%)";

	item2.style.position = "absolute";
	item2.style.transform = "translateX(-100%)";

	item3.style.position = "static";
	item3.style.transform = "translateX(0%)";
}


function openStiller() {
	item1.style.position = "absolute";
	item1.style.transform = "translateX(-100%)";

	item2.style.position = "absolute";
	item2.style.transform = "translateX(-100%)";

	item3.style.position = "absolute";
	item3.style.transform = "translateX(-100%)";

	item4.style.position = "static";
	item4.style.transform = "translateX(0%)";
}


function openKonum() {
	item1.style.position = "absolute";
	item1.style.transform = "translateX(-100%)";

	item2.style.position = "absolute";
	item2.style.transform = "translateX(-100%)";

	item3.style.position = "absolute";
	item3.style.transform = "translateX(-100%)";

	item4.style.position = "absolute";
	item4.style.transform = "translateX(-100%)";

	item5.style.position = "static";
	item5.style.transform = "translateX(0%)";
}

function backAllFilters() {
	item1.style.position = "static";
	item1.style.transform = "translateX(0%)";

	item2.style.position = "absolute";
	item2.style.transform = "translateX(100%)";

	item3.style.position = "absolute";
	item3.style.transform = "translateX(100%)";

	item4.style.position = "absolute";
	item4.style.transform = "translateX(100%)";

	item5.style.position = "absolute";
	item5.style.transform = "translateX(100%)";
}


/* open self */ 

function openSelfTur() {
	if (window.innerWidth < 900) {
		backAllFilters();
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
		item1.style.position = "absolute";
		item1.style.transform = "translateX(-100%)";

		item2.style.position = "static";
		item2.style.transform = "translateX(0%)";
	}
}


function openSelfOdalar() {
	if (window.innerWidth < 900) {
		backAllFilters();
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
		item1.style.position = "absolute";
		item1.style.transform = "translateX(-200%)";

		item2.style.position = "absolute";
		item2.style.transform = "translateX(-100%)";

		item3.style.position = "static";
		item3.style.transform = "translateX(0%)";
	}
}


function openSelfStiller() {
	if (window.innerWidth < 900) {
		backAllFilters();
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
		item1.style.position = "absolute";
		item1.style.transform = "translateX(-100%)";

		item2.style.position = "absolute";
		item2.style.transform = "translateX(-100%)";

		item3.style.position = "absolute";
		item3.style.transform = "translateX(-100%)";

		item4.style.position = "static";
		item4.style.transform = "translateX(0%)";
	}
}


function openSelfKonum() {
	if (window.innerWidth < 900) {
		backAllFilters();
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
		item1.style.position = "absolute";
		item1.style.transform = "translateX(-100%)";

		item2.style.position = "absolute";
		item2.style.transform = "translateX(-100%)";

		item3.style.position = "absolute";
		item3.style.transform = "translateX(-100%)";

		item4.style.position = "absolute";
		item4.style.transform = "translateX(-100%)";

		item5.style.position = "static";
		item5.style.transform = "translateX(0%)";
	}
}