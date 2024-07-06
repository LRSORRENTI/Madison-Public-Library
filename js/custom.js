// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(43.0722, -89.4008),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

/** IntersectionObserver API */

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1 // Trigger the callback when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, observerOptions);

    // Select all elements to observe
    const elementsToObserve = document.querySelectorAll(".fade-in");
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});