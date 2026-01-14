// document.addEventListener("DOMContentLoaded", () => {

//     const darkBtn = document.getElementById("darkMode");
//     const lightBtn = document.getElementById("lightMode");

//     // Apply saved mode on page load
//     const savedMode = localStorage.getItem("theme");

//     if (savedMode === "dark") {
//         enableDarkMode();
//     } else {
//         enableLightMode();
//     }

//     darkBtn.addEventListener("click", () => {
//         enableDarkMode();
//         localStorage.setItem("theme", "dark");
//     });

//     lightBtn.addEventListener("click", () => {
//         enableLightMode();
//         localStorage.setItem("theme", "light");
//     });

//     function enableDarkMode() {
//         document.body.style.backgroundColor = "#111";
//         document.body.style.color = "whitesmoke";

//         document.querySelectorAll(".form-container, .article_container").forEach(el => {
//             el.style.backgroundColor = "#1e1e1e";
//             el.style.color = "whitesmoke";
//         });

//         document.querySelectorAll("input, textarea").forEach(el => {
//             el.style.backgroundColor = "#333";
//             el.style.color = "whitesmoke";
//         });
//     }

//     function enableLightMode() {
//         document.body.style.backgroundColor = "lemonchiffon";
//         document.body.style.color = "black";

//         document.querySelectorAll(".form-container, .article_container").forEach(el => {
//             el.style.backgroundColor = "#cfbf8e";
//             el.style.color = "black";
//         });

//         document.querySelectorAll("input, textarea").forEach(el => {
//             el.style.backgroundColor = "white";
//             el.style.color = "black";
//             el.boxShadow = "2px 2px 5px red";
//         });
//     }

// });




document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let current = 0;

        const speed = 30; // smaller = faster

        const updateCounter = () => {
            const increment = Math.ceil(target / 100);

            current += increment;

            if (current < target) {
                counter.textContent = current;
                setTimeout(updateCounter, speed);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });

});
