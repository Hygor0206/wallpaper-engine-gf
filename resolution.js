const width = screen.width;
const height = screen.height;
const body = document.getElementById("resolution");

function getResolution(width, height, element) {
    if((width === 1920) || (height === 1080)){
        element.classList.add("fullHD");
    }
}

getResolution(width, height, body);