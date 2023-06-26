import anime from "animejs/lib/anime.es.js";

export const lettersAnimation = () => {

    const title = document.querySelector(".animate-title");
    title.innerHTML = title.textContent.replace(/\S/g, "<span>$&</span>");

    const animationTitle = anime.timeline({
        targets: ".animate-title span",
        easing: "easeInOutExpo",
        loop: true,
    });

    animationTitle
        .add({
            rotate: function () {
                return anime.random(-360, 360);
            },
            translateX: function () {
                return anime.random(-500, 500);
            },
            translateY: function () {
                return anime.random(-500, 500);
            },
            duration: 4000,
            delay: anime.stagger(20),
        })
        .add({
            rotate: 0,
            translateX: 0,
            translateY: 0,
            duration: 4000,
            delay: anime.stagger(20),
        });

    const text = document.querySelector(".animate-text");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    const animationText = anime.timeline({
        targets: ".animate-text span",
        easing: "easeInOutExpo",
        loop: true,
    });

    animationText
        .add({
            rotate: function () {
                return anime.random(-360, 360);
            },
            translateX: function () {
                return anime.random(-500, 500);
            },
            translateY: function () {
                return anime.random(-500, 500);
            },
            duration: 4000,
            delay: anime.stagger(20),
        })
        .add({
            rotate: 0,
            translateX: 0,
            translateY: 0,
            duration: 4000,
            delay: anime.stagger(20),
        });

}

export const renderOutPreloader = () => {
    setTimeout(() => {
        document.querySelector(".preloader-container").classList.add("renderOutPreloader");
        document.querySelector("#app-container").classList.remove("block-application");
    }, 10800);
}

export const renderName = () => {
    setTimeout(() => {
        anime
            .timeline({
                loop: false,
            })
            .add({
                targets: ".ml5 .word",
                scale: [14, 1],
                opacity: [0, 1],
                easing: "easeOutCirc",
                duration: 800,
                delay: (el, i) => 800 * i,
            });
    }, 7600);
}

export const renderInElements = () => {
    setTimeout(() => {
        document.getElementById('main-container').classList.remove('main-container');
    }, 10800)
}