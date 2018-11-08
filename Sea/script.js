let info = document.getElementById('info');
let marker = document.getElementById("carribean");
let span = document.getElementsByClassName("close")[0];

let anyMarker = document.getElementsByClassName("marker");

//currently trying to set a delay when the mouseover event is triggered

function displayInfo(i){
        info.style.display = "block";
        if(anyMarker[i].id === "mediterranean"){
            document.getElementById("text").innerHTML = "This is all about the Mediterranean Sea";
        }
        if(anyMarker[i].id === "red"){
            document.getElementById("text").innerHTML = "This is all about the Red Sea";
        }
        if(anyMarker[i].id === "black"){
            document.getElementById("text").innerHTML = "This is all about the Black Sea";
        }
        if(anyMarker[i].id === "carribean"){
            document.getElementById("text").innerHTML = "This is all about the Carribean Sea";
        }
        if(anyMarker[i].id === "gulfMexico"){
            document.getElementById("text").innerHTML = "This is all about the Gulf of Mexico";
        }
        if(anyMarker[i].id === "hudson"){
            document.getElementById("text").innerHTML = "This is all about the Hudson Bay";
        }
        if(anyMarker[i].id === "bering"){
            document.getElementById("text").innerHTML = "This is all about the Bering Sea";
        }
        if(anyMarker[i].id === "tasman"){
            document.getElementById("text").innerHTML = "This is all about the Tasman Sea";
        }
        if(anyMarker[i].id === "coral"){
            document.getElementById("text").innerHTML = "This is all about the Coral Sea";
        }
        if(anyMarker[i].id === "bengal"){
            document.getElementById("text").innerHTML = "This is all about the Bay of Bengals";
        }
        if(anyMarker[i].id === "arabian"){
            document.getElementById("text").innerHTML = "This is all about the Arabian Sea";
        }
        if(anyMarker[i].id === "north"){
            document.getElementById("text").innerHTML = "This is all about the North Sea";
        }
}

function onMouseOver() {
    for(let i = 0; i < anyMarker.length; i++){
        anyMarker[i].onmouseover = function() {
            displayInfo(i);
        }
    }
}

let delayMouseover = function (aMarker, modal) {
    let timeout = null;
    aMarker.onmouseover = function() {
        // Set timeout to be a timer which will invoke callback after 1s
        timeout = setTimeout(modal, 1000);
    };

    aMarker.onmouseout = function() {
        // Clear any timers set to timeout
        clearTimeout(timeout);
    }
};


delayMouseover(anyMarker, onMouseOver());



span.onclick = function() {
    info.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == info) {
        info.style.display = "none";
    }
}