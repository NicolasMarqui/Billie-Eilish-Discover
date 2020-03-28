window.onload = function() {
    var tl = gsap.timeline();
    var tl_a = gsap.timeline();
    var tl_s = gsap.timeline();
    var tl_f = gsap.timeline();
    var controller = new ScrollMagic.Controller();
    var scroll = new SmoothScroll('a[href*="#"]');
    var tl_menu = gsap.timeline();

    tl.fromTo('.overlay', {width: '100%'}, {width: 0, display: 'none', stagger: 0.5})
    tl.from('.banner .bg', {scale: 3})
    tl.from('.header', {y: -200})
    tl.from('.center__text .title', {opacity: 0})
    tl.from('.center__text a', {opacity: 0})
    tl.from('.text__right', {x: 700})
    tl.from('.text__left', {x: -700})
    tl.from('.side__music', {x: -700});

    tl_a.from('.fullname__hide' , {opacity: 0})
    tl_a.from('.info__picture' , {x: 700})
    tl_a.from('.info__info ul li p' , {x: 700})

    new ScrollMagic.Scene({
        triggerElement: ".about"
    })

    .setTween(tl_a).addTo(controller)

    tl_s.from('.music__showcase' , {x: 900, duration: .9})
    tl_s.from('.music__cover' , {x: -900, duration: .9})

    new ScrollMagic.Scene({
        triggerElement: ".songs__call"
    })

    .setTween(tl_s).addTo(controller)

    tl_f.from('.follow .container' , {scale: 2, duration: .7})

    new ScrollMagic.Scene({
        triggerElement: ".follow"
    })

    .setTween(tl_f).addTo(controller)

    var bad_guy = new Howl({
        src: ['./assets/songs/bad_guy.mp3'],
        loop: true,
        volume: 0.5,
    });

    bad_guy.play();

    document.getElementById('music').addEventListener("click", function(){
        bad_guy.stop();
    })

    var ocean_eyes = new Howl({
        src: ['./assets/songs/ocean_eyes.mp3'],
        loop: true,
        volume: 0.5,
    });

    var burn = new Howl({
        src: ['./assets/songs/burn.mp3'],
        loop: true,
        volume: 0.5,
    });

    document.getElementById('song_1').addEventListener("click", function(){
        bad_guy.stop();
        burn.stop();
        ocean_eyes.play();

        document.getElementById('song_1').style.pointerEvents = 'none';
    })

    document.getElementById('song_2').addEventListener("click", function(){
        ocean_eyes.stop();
        burn.stop();
        bad_guy.play();

        document.getElementById('song_2').style.pointerEvents = 'none';
    })

    document.getElementById('song_3').addEventListener("click", function(){
        ocean_eyes.stop();
        bad_guy.stop();
        burn.play();

        document.getElementById('song_3').style.pointerEvents = 'none';
    })

    document.getElementById('openMenu').addEventListener("click", function(){
        tl_menu.fromTo('.menu__sideMobile', {display: 'none', width: 0}, {display: 'flex', width: '100%', duration: 0.9})
        tl_menu.fromTo('.menu__sideMobile ul li', {display: 'none', opacity: 0}, {display: 'block', opacity: 1, stagger: 0.5})
    })

    document.getElementById('closeMenu').addEventListener("click", function(){
        tl_menu.fromTo('.menu__sideMobile ul li', {display: 'block', opacity: 1}, {display: 'none', opacity: 0, duration: 0.2})
        tl_menu.fromTo('.menu__sideMobile', {display: 'flex', width: '100%'}, {display: 'none', width: 0, duration: 0.5})
    })

    var menuLinks = document.querySelectorAll('.closeMenuOnClick');

    for(var i = 0; i < menuLinks.length; i++){
        menuLinks[i].addEventListener("click", function(){
            tl_menu.fromTo('.menu__sideMobile ul li', {display: 'block', opacity: 1}, {display: 'none', opacity: 0, duration: 0.2})
            tl_menu.fromTo('.menu__sideMobile', {display: 'flex', width: '100%'}, {display: 'none', width: 0, duration: 0.5})
        })
    }

    
};