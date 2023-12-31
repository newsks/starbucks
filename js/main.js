// Badge 스크롤JS & to-top 스크롤JS

const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle( function(){
    if ( window.scrollY > 500 ) {
        gsap.to(badgeEl, .6, {
            opacity:0,
            display:'none'
        });
        
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
        });
        // to-top 버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));


toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

// 비쥬얼 fade-in
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach( function ( fadeEl, index ){
 // gsap.to(요소, 지속시간, 옵션) 사라지는 애니메이션
 gsap.to(fadeEl, 1, {
    delay:(index + 1) * .7,  
    opacity: 1
 });
});


// 공지사항 swiper
// new Swiper('선택자(인수)', 옵션);
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});  

// PROMOTION SWIPER
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,  
    spaceBetween: 10, 
    centeredSlides: true, 
    loop: true,
    autoplay:{
        delay: 3000
    },
    pagination:{
        el:'.promotion .swiper-pagination', 
        clickable: true 
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});

// AWARDS SLIDE
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,  
    slidesPerView: 5,
    navigation: {
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
})



// PROMOTION TOGGLE
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
})

// YOUTUBE FLOATING

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    gsap.to(
      selector,  
      random(1, 2.5),  
      {
        y: size,
        repeat: -1,   
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15); 
floatingObject('.floating2', .5, 20);  
floatingObject('.floating3', 1.5, 20);  



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
 new ScrollMagic
    .Scene({
       triggerElement: spyEl,  
       triggerHook: .8         
    })
    .setClassToggle(spyEl, 'show')  
    .addTo(new ScrollMagic.Controller());
}); 
