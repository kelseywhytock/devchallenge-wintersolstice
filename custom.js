const heading = document.querySelector("h1");

heading.innerHTML = heading.innerHTML.replace(
    "Celebrating the Winter Solstice",
    "Celebrating the <span>Winter Solstice<span>"
);

var copyright = document.querySelector("#main-footer p");
copyright.innerHTML +=
    '<br />Some on-page images designed by <a href = "http://www.freepik.com/" target = "_blank" > Freepik</a>.';

var backToTop = document.querySelector("#main-footer ul li:first-child a");
backToTop.innerHTML += " ↑";

var hemisphereBox = document.querySelector("#hemispheres article");
var scienceImg = document.createElement("img");
scienceImg.alt = "graphic of Earth with Northern and Southern poles";
scienceImg.src =
    "https://lh3.googleusercontent.com/pw/AP1GczOEYoBuxA46raBSXltUfRdDUBrEk2H-U6veEAxZK-Fdig4te-MqF5pS_rhSfgby8y8WPq5gzGpi9G2bng9tw_ZcKNDb-WEFlTe3zSG_hc9Eyd91qn41kVNomkHBQGZ3dv8RrgOUL8xYZQ5JuMkgNohCwA=w700-h652-s-no-gm?authuser=0";
hemisphereBox.after(hemisphereBox, scienceImg);
