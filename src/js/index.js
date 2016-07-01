var swiperAnimateCache=require("exports?swiperAnimateCache!./swiper.animate1.0.2.min.js");
var swiperAnimate=require("exports?swiperAnimate!./swiper.animate1.0.2.min.js");



var mySwiper = new Swiper(".swiper-container", {
			direction: 'vertical',
			pagination: '.swiper-pagination',
			onInit: function(swiper) { //Swiper2.x�ĳ�ʼ����onFirstInit
				swiperAnimateCache(swiper); //���ض���Ԫ�� 
				swiperAnimate(swiper); //��ʼ����ɿ�ʼ����
			},
			onSlideChangeEnd: function(swiper) {
				//�л�����
				if (mySwiper.activeIndex > 0 && (mySwiper.activeIndex <= document.querySelectorAll(".nav-1").length)) {
					var i = mySwiper.activeIndex;
					var list1 = document.querySelectorAll(".nav-1");
					var list2 = document.querySelectorAll(".nav-2");
					for (var j = 0; j < document.querySelectorAll(".nav-1").length; j++) {
						document.querySelectorAll(".nav-1")[j].querySelectorAll("span")[j].style.background = "#a2acac";
						document.querySelectorAll(".nav-2")[j].querySelectorAll("label")[j].style.background = ""
					}
					document.querySelectorAll(".nav-1")[i - 1].querySelectorAll("span")[i - 1].style.background = "#AA936E";
					document.querySelectorAll(".nav-2")[i - 1].querySelectorAll("label")[i - 1].style.background = "#AA936E";
				}

				swiperAnimate(swiper); //ÿ��slide�л�����ʱҲ���е�ǰslide����
			}
		});