let toggle_btn 
let big_wrapper 
const main = document.querySelector('main');

function declare() {
    toggle_btn = document.querySelector('.toggle-btn');
    big_wrapper = document.querySelector('.big-wrapper');
}

declare();

let dark = false;

function toggleAnimation() {
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if(dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    }else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy")
    main.appendChild(clone);

    clone.addEventListener("animationend", () => {
        big_wrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    })
}


function events() {
    toggle_btn.addEventListener('click', toggleAnimation);
}

events();
