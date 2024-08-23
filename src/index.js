function dispimg() {
    let img = new Image();
    img.src = arguments[0];
    document.getElementById(arguments[1]).prepend(img);
}

function disptxt() {
    let txt = arguments[0];
    var ul = document.getElementById(arguments[1]);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(txt));
    ul.insertBefore(li, ul.firstChild);
}

async function thecatapifetch(thecatapiurl) {
    const response = await fetch(thecatapiurl);
    const json = await response.json();
    return json;
}

function thecatapi() {
    const thecatapiurl = `https://api.thecatapi.com/v1/images/search?limit=${arguments[1]}`;
    thecatapifetch(thecatapiurl).then(data => {
        for (let i = 0; i < arguments[1]; i++) {
            dispimg(data[i].url, `${arguments[0]}img`);
        }
    });
}

async function evilinsultfetch(evilinsulturl) {
    const response = await fetch(evilinsulturl);
    const json = await response.json();
    return json;
}

function evilinsult() {
    const evilinsulturl = "https://insult.mattbas.org/api/insult.json";
    evilinsultfetch(evilinsulturl).then(data => {
        disptxt(data.insult, `${arguments[0]}txt`)
    });
}

var elements = document.getElementsByClassName("bot");
for (let i = 0; i < elements.length; i++) {
    elements[i].hidden = true;
}

document.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = e.target[e.target.length - 1].value;
    let count = e.target[e.target.length - 2].value;
    if (!count) {
        count = 1;
    }
    document.getElementById(name).hidden = false;
    var call = window[name];
    call(name, count)
});



async function fetchapi(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}