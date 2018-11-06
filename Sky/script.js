var weather = document.getElementById("weather");
// const cloud = document.createElement("div");

function sunnyWeather() {
    alert("Here we have some sunny weather")
    // <div class="sun"></div>
    //     <div class="cloud x1"></div>
    while(weather.firstChild){
        weather.removeChild(weather.firstChild)
    }

    weather.className = "sunny";

    const clouds = ["s1", "s2", "s3", "s4", "s5"];
    const sun = document.createElement("div");
    sun.className = "sun";

    weather.appendChild(sun);

    for(let i = 0; i < clouds.length; i++){
        const cloud = document.createElement("div");
        cloud.className = clouds[i] + " cloud";
        console.log(cloud);
        weather.appendChild(cloud);
    }
    
    
}

function rainyWeather() {
    alert("Here we have some rainy weather");
    // <div class="rain-area r1">
    //     <div class="rainy-cloud"></div>
    //     <div class="rain">
    //         <div class=drop></div>
    //         <div class=drop></div>
    //         <div class=drop></div>
    //         <div class=drop></div>
    //         <div class=drop></div>
    //     </div>
    // </div>
    while(weather.firstChild){
        weather.removeChild(weather.firstChild)
    }

    weather.className = "rainy";
    const clouds = ["r1", "r2", "r3", "r4", "r5"];
    //"r6", "r7", "r8", "r9", "r10"
    for(let i = 0; i < clouds.length; i++) {
        const cloud = document.createElement("div");
        cloud.className = "rainy-cloud";

        const rain = document.createElement("div");
        rain.className = "rain";

        const rainDrops = [1 , 2, 3, 4, 5];
        for(let j = 0; j < rainDrops.length; j++){
            const drop = document.createElement("div");
            drop.className = "drop";
            rain.appendChild(drop);
        }
        
        const rainArea = document.createElement("div");
        rainArea.className = "rain-area " + clouds[i];

        rainArea.append(cloud, rain);
        weather.append(rainArea);
    }

   

}

//want to bring in a weather api that will call on the functions depending on the weather