const shadeContainer = document.getElementById("allThatShade");

const fiftyShades = [

    "Artichoke", 
    "Artichoke green",
    "Asparagus",
    "Avocado",
    "Dark green",
    "Fern green",
    "Forest green",
    "Green earth",
    "Hooker's green",
    "Jungle green",
    "Laurel green",
    "Light green",
    "Mantis",
    "Mint green",
    "Moss green",
    "Dark moss green",
    "Myrtle green",
    "Pine green",
    "Reseda green",
    // "Sap green",
    "Shamrock green",
    "Tea green",
    "Teal",
    "Olive",
    "Green",
    "Green (HTML/CSS color)",
    "Dark green (X11)",
    "Green (CMYK)",
    "Green (NCS)",
    "Green (Munsell)",
    "Green (Pantone)",
    "Green (Crayola)",
    "Army green",
    "Bottle green",
    "Bright green",
    "Bright mint",
    "Brunswick green",
    "Cal Poly Pomona green",
    "Castleton green",
    "Celadon",
    "Celadon green",
    "Dark pastel green",
    "Dartmouth green",
	"Emerald",
    "Feldgrau",
    "GO Transit green",
    "Green-yellow",
    "Harlequin",
    "Hunter green",
    "India green",
    "Islamic green"

];

for(let i = 0; i < fiftyShades.length; i++){
    const div = document.createElement('div');
    div.className = "shade " + i;
    const hex = document.createElement('div');
    hex.className = "hex"
    const text = document.createElement('div');
    text.className = "text"
    // const colorName = document.createTextNode(fiftyShades[i])
    

    switch(div.className){
        case "shade 0":
            div.style.backgroundColor = "#8F9779";
            break;
        case "shade 1":
            div.style.backgroundColor = "#4B6F44";
            break;
        case "shade 2":
            div.style.backgroundColor = "#87A96B";
            break;
        case "shade 3":
            div.style.backgroundColor = "#568203";
            break;
        case "shade 4":
            div.style.backgroundColor = "#013220";
            break;
        case "shade 5":
            div.style.backgroundColor = "#4F7942";
            break;
        case "shade 6":
            div.style.backgroundColor = "#228B22";
            break;
        case "shade 7":
            div.style.backgroundColor = "#DADD98";
            break;
        case "shade 8":
            div.style.backgroundColor = "#49796B";
            break;
        case "shade 9":
            div.style.backgroundColor = "#29AB87";
            break;
        case "shade 10":
            div.style.backgroundColor = "#A9BA9D";
            break;
        case "shade 11":
            div.style.backgroundColor = "#90EE90";
            break;
        case "shade 12":
            div.style.backgroundColor = "#74C365";
            break;
        case "shade 13":
            div.style.backgroundColor = "#98FB98";
            break;
        case "shade 14":
            div.style.backgroundColor = "#8A9A5B";
            break;
        case "shade 15":
            div.style.backgroundColor = "#4A5D23";
            break;
        case "shade 16":
            div.style.backgroundColor = "#317873";
            break;
        case "shade 17":
            div.style.backgroundColor = "#01796F";
            break;
        case "shade 18":
            div.style.backgroundColor = "#6c7c59";
            break;
        case "shade 19":
            div.style.backgroundColor = "#009E60";
            break;
        case "shade 20":
            div.style.backgroundColor = "#D0F0C0";
            break;
        case "shade 21":
            div.style.backgroundColor = "#008080";
            break;
        case "shade 22":
            div.style.backgroundColor = "#808000";
            break;
        case "shade 23":
            div.style.backgroundColor = "#00FF00";
            break;
        case "shade 24":
            div.style.backgroundColor = "#008000";
            break;
        case "shade 25":
            div.style.backgroundColor = "#006500";
            break;
        case "shade 26":
            div.style.backgroundColor = "#00A550";
            break;
        case "shade 27":
            div.style.backgroundColor = "#009F6B";
            break;
        case "shade 28":
            div.style.backgroundColor = "#00A877";
            break;
        case "shade 29":
            div.style.backgroundColor = "#00AD83";
            break;
        case "shade 30":
            div.style.backgroundColor = "#1CAC78";
            break;
        case "shade 31":
            div.style.backgroundColor = "#4B5320";
            break;
        case "shade 32":
            div.style.backgroundColor = "#006A4E";
            break;
        case "shade 33":
            div.style.backgroundColor = "#66FF00";
            break;
        case "shade 34":
            div.style.backgroundColor = "#4FFFB0";
            break;
        case "shade 35":
            div.style.backgroundColor = "#1B4D3E";
            break;
        case "shade 36":
            div.style.backgroundColor = "#1E4D2B";
            break;
        case "shade 37":
            div.style.backgroundColor = "#00563B";
            break;
        case "shade 38":
            div.style.backgroundColor = "#ACE1AF";
            break;
        case "shade 39":
            div.style.backgroundColor = "#2F847C";
            break;
        case "shade 40":
            div.style.backgroundColor = "#03C03C";
            break;
        case "shade 41":
            div.style.backgroundColor = "#00693E";
            break;
        case "shade 42":
            div.style.backgroundColor = "#50C878";
            break;
        case "shade 43":
            div.style.backgroundColor = "#4D5D53";
            break;
        case "shade 44":
            div.style.backgroundColor = "#00AB66";
            break;
        case "shade 45":
            div.style.backgroundColor = "#ADFF2F";
            break;
        case "shade 46":
            div.style.backgroundColor = "#3FFF00";
            break;
        case "shade 47":
            div.style.backgroundColor = "#355E3B";
            break;
        case "shade 48":
            div.style.backgroundColor = "#138808";
            break;
        case "shade 49":
            div.style.backgroundColor = "#009000";
            break;
        default:
            console.log("No color available for this id");

    }

    const hexText = document.createTextNode(fiftyShades[i] + " " + div.style.backgroundColor);

    // const colorNText = colorName + " " + hexText
    // console.log(div.className)
    text.appendChild(hexText);
    hex.appendChild(text);
    div.append(hex);

    shadeContainer.appendChild(div);

}

