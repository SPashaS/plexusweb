/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import {Pagination, Navigation, Autoplay } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
	let swiper;

	breakpoint = window.matchMedia(breakpoint);

	const enableSwiper = function(className, settings) {
		swiper = new Swiper(className, settings);

		if (callback) {
			callback(swiper);
		}
	}

	const checker = function() {
		if (breakpoint.matches) {
			return enableSwiper(swiperClass, swiperSettings);
		} else {
			if (swiper !== undefined) swiper.destroy(true, true);
			return;
		}
	};

	breakpoint.addEventListener('change', checker);
	checker();
}

const someFunc = (instance) => {
	if (instance) {
		instance.on('slideChange', function (e) {
			console.log('*** mySwiper.activeIndex', instance.activeIndex);
		});
	}
};


// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить

	bildSliders();

	// Перечень слайдеров

	if (document.querySelector('.service__swiper')) {
		new Swiper('.service__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			//modules: [Navigation, Pagination],
			modules: [Pagination],
	
			// effect: 'fade',
			// autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
	
			// observer: true,
			// observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			// autoHeight: true,
			speed: 800,
			// touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.service__slider-pagination',
				clickable: true,
			},
			// Arrows
			// navigation: {
			// 	nextEl: '.promo__slider-nav .slider-nav__btn_next',
			// 	prevEl: '.promo__slider-nav .slider-nav__btn_prev',
			// },
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				// 320: {
				// 	slidesPerView: "auto",
				// 	spaceBetween: 28,
				// },
				820: {
					slidesPerView: "auto",
					spaceBetween: 20,
				},
				992: {
					slidesPerView: "auto",
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: "auto",
					spaceBetween: 44,
				},
			},

			on: {

			}
		});

	}

	if (document.querySelector('.projects__swiper')) {
		new Swiper('.projects__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			//modules: [Navigation, Pagination],
			modules: [Navigation],
	
			// effect: 'fade',
			// autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
	
			// observer: true,
			// observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 25,
			// autoHeight: true,
			speed: 800,
			// touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.service__slider-pagination',
			// 	clickable: true,
			// },
			// Arrows
			navigation: {
				prevEl: '.projects__slider-nav .projects__slider-btn_prev',
				nextEl: '.projects__slider-nav .projects__slider-btn_next',
			},
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 20,
			// 	},
			// 	320: {
			// 		slidesPerView: "auto",
			// 		spaceBetween: 28,
			// 	},
			// 	768: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20,
			// 	},
			// 	992: {
			// 		slidesPerView: "auto",
			// 		spaceBetween: 20,
			// 	},
			// 	1268: {
			// 		slidesPerView: "auto",
			// 		spaceBetween: 44,
			// 	},
			// },

			on: {

			}
		});


	}

	if (document.querySelector('.reviews__swiper')) {
		new Swiper('.reviews__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			//modules: [Navigation, Pagination],
			modules: [Navigation],
	
			// effect: 'fade',
			// autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
	
			// observer: true,
			// observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 20,
			// autoHeight: true,
			speed: 800,
			// touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.service__slider-pagination',
			// 	clickable: true,
			// },
			// Arrows
			navigation: {
				prevEl: '.reviews__slider-nav .reviews__slider-btn_prev',
				nextEl: '.reviews__slider-nav .reviews__slider-btn_next',
			},
			breakpoints: {
				0: {
					slidesPerView: "auto",
					spaceBetween: 20,
				},
				// 320: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 20,
				// },
				// 768: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 20,
				// },
				// 992: {
				// 	slidesPerView: "auto",
				// 	spaceBetween: 20,
				// },
				1280: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},


			on: {

			}
		});


	}


}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});


// window.addEventListener("resize", function (e) {
// 	// Запуск инициализации слайдеров
// 	if (document.documentElement.clientWidth < 1280 || document.documentElement.clientWidth > 768) {
// 		initSliders();
// 	}

// 	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
// 	//initSlidersScroll();
// });