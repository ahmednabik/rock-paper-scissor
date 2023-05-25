let toggleSwitch = document.getElementById('switch');
toggleSwitch.addEventListener("change", toggleDayNight);





function toggleDayNight() {

    /* Toggle HTML elements */
    let toggleElements = document.getElementsByClassName('toggle');
    let toggleElementsArray = Array.from(toggleElements);
    toggleElementsArray.forEach(element => {
        element.classList.toggle("dark-mode");
    });

    /* Toggle images */
    let toggleImg = document.getElementsByClassName('img-toggle');
    let toggleImgArray = Array.from(toggleImg);
    console.log(toggleImgArray);

        if (!toggleSwitch.checked) {
            toggleImgArray[0].src = "img/rock.png";
            toggleImgArray[1].src = "img/paper.png";
            toggleImgArray[2].src = "img/scissor.png";
        }
        else {
            toggleImgArray[0].src = "img/rock-dark.png";
            toggleImgArray[1].src = "img/paper-dark.png";
            toggleImgArray[2].src = "img/scissor-dark.png";
        }
}