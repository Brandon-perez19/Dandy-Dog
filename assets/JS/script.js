//Format Dog Image API Url
//var apiUrl = "https://dog.ceo/api/breeds/image/random"

var apiUrl = "https://dog.ceo/api/breeds/image/random/3"

//make a request to URL
fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
        console.log(data);
        displayPicture(data.message)
    });
});

//function to display photo

var displayPicture = function(message){
    for (let i = 0; i < 3; i++) {
        console.log(message[i]);
        //selects empty div to hold img-divs
        var dogResults = document.querySelector(".daily-dog-result");
        //creates div holding elemtent
        var imgHolder = document.createElement("div");
        //set bulma style class for divs
        imgHolder.setAttribute("class", "column " + "is-one-third")
        //set style
        imgHolder.style.textAlign = "center";
        //creates img html
        var imgCreate = document.createElement("img");
        //set style of img
        // imgCreate.setAttribute("class", "image" + " is-128x128")
        //sets href value
        imgCreate.setAttribute("src", message[i]);
        //set style
        imgCreate.style.borderRadius = "20%";
        imgCreate.style.height = "200px";
        imgCreate.style.width = "200px";
        imgCreate.style.display = "inline";
        imgCreate.style.border = "solid 6px #F7EDE2"
        //append to holder div
        imgHolder.appendChild(imgCreate);
        //append to empty div that is hard coded
        dogResults.appendChild(imgHolder);

    };
};
