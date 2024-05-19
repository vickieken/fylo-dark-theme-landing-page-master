const modeSwitch = document.querySelector(".modeSwitch");

const switchBtn = document.querySelector(".switch");

const body = document.querySelector("body");

const span = document.querySelectorAll("span");

modeSwitch.addEventListener("click", ()=> {
    
    switchBtn.classList.toggle("move");

    body.classList.toggle("light");

    span.forEach(span => {
        span.classList.toggle("noChange");
    });
});

/*
// set initial dark mode state
if(isDarkMode) {
    body.classList.add('dark');
}

modeToggle.addEventListener("click", ()=> {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    const isDarkModeEnabled = body.classList.contains('dark')
    localStorage.setItem('darkMode', isDarkModeEnabled);
    
});
*/


