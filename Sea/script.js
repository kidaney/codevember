let info = document.getElementById('info');
let marker = document.getElementById("carribean");
let span = document.getElementsByClassName("close")[0];

let anyMarker = document.getElementsByClassName("marker");

//currently trying to set a delay when the mouseover event is triggered

function displayInfo(i){
        info.style.display = "block";
        if(anyMarker[i].id === "mediterranean"){
            document.getElementById("text").innerHTML = "This is where the Mediterranean Sea is located. <a href='https://www.britannica.com/place/Mediterranean-Sea' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "red"){
            document.getElementById("text").innerHTML = "This is where the Red Sea is located. <a href='https://www.britannica.com/place/Red-Sea' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "black"){
            document.getElementById("text").innerHTML = "This is where the Black Sea is located. <a href='https://www.britannica.com/place/Black-Sea' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "caribbean"){
            document.getElementById("text").innerHTML = "This is where the Carribean Sea is located. <a href='https://www.britannica.com/place/Caribbean-Sea' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "gulfMexico"){
            document.getElementById("text").innerHTML = "This is where the Gulf of Mexico is located. <a href='https://www.britannica.com/place/Gulf-of-Mexico' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "hudson"){
            document.getElementById("text").innerHTML = "This is where the Hudson Bay is located. <a href='https://www.britannica.com/place/Hudson-Bay' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "bering"){
            document.getElementById("text").innerHTML = "This is where the Bering Sea is located. <a href='https://www.britannica.com/place/Bering-Sea' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "tasman"){
            document.getElementById("text").innerHTML = "This is where the Tasman Sea is located. <a href='https://www.britannica.com/place/Tasman-Sea' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "coral"){
            document.getElementById("text").innerHTML = "This is where the Coral Sea is located. <a href='https://www.britannica.com/place/Coral-Sea' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "bengal"){
            document.getElementById("text").innerHTML = "This is where the Bay of Bengals is located. <a href='https://www.britannica.com/place/Bay-of-Bengal' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "arabian"){
            document.getElementById("text").innerHTML = "This is where the Arabian Sea is located. <a href='https://www.britannica.com/place/Arabian-Sea' target='_blank'>Learn more</a>";
        }
        if(anyMarker[i].id === "north"){
            document.getElementById("text").innerHTML = "This is where the North Sea is located. <a href='https://www.britannica.com/place/North-Sea' target='_blank'>Learn more</a>";
        }
}

var delayMouseover = function (aMarker, modal) {
    var timeout = null;

    aMarker.onmouseenter = function() {
        console.log("modal: ", modal)
        timeout = setTimeout(modal, 250);
    };

    aMarker.onmouseleave = function() {
        clearTimeout(timeout);
    }
};


for(let i = 0; i < anyMarker.length; i++){
    anyMarker[i].onmouseover = function() {
        delayMouseover(anyMarker[i], function () { displayInfo(i); });
    }
}

span.onclick = function() {
    info.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == info) {
        info.style.display = "none";
    }
}