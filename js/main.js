$(document).ready(function(){
    let $btns = $('.project-area .button-group button');
    
    $btns.click(function(e){
        $('.project-area .button-group buttons').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');

        console.log("selector is == ", selector);

        $('.project-area .grid').isotope({
            filter:selector
        })
        return false
    })

    $('.project-area .button-group #btn-1').trigger('click')


    $('.project-area .grid .test-popup-link').magnificPopup({
        type:'image',
        gallery: {enabled: true}
    })


    // owl carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;
    console.log("nav height is == ", nav_offset_top)

    function navbarFixed(){
        console.log("navbar function called")
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                // console.log("scroll number is == ", scroll);

                if(scroll >= nav_offset_top){
                    $('.header_area .main-menu').addClass('navbar_fixed');
                }else{
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }
    navbarFixed();    
})

