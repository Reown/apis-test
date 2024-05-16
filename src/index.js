function dispimg() {
    let img = new Image();
    img.src = arguments[0];
    document.getElementById(arguments[1]).prepend(img);
}

async function unsplashfetch(unsplashurl) {
    const response = await fetch(unsplashurl);
    console.log(response);
    return response;
}

function unsplash() {
    let unsplashurl = "";
    if (arguments[1]) {
        unsplashurl = `https://source.unsplash.com/random?${arguments[1]}`;
    }
    else {
        unsplashurl = "https://source.unsplash.com/featured";
    }
    unsplashfetch(unsplashurl).then(data => {
        dispimg(data.url, `${arguments[0]}img`);
    });
}

var elements = document.getElementsByClassName("bot");
for (let i = 0; i < elements.length; i++) {
    elements[i].hidden = true;
}

document.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = e.target[e.target.length - 1].value;
    let keyword = e.target[e.target.length - 2].value;
    document.getElementById(name).hidden = false;
    window[name](name, keyword);
});