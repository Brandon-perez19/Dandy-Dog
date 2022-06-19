var apiUrl = "https://dog.ceo/api/breeds/image/random/3"

//make a request to URL
fetch(apiUrl)
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            displayPicture(data.message)
        });
    });

//function to display photo
var displayPicture = function (message) {
    for (let i = 0; i < 3; i++) {
        console.log(message[i]);
        console.log(message[i].split("/")[4]);

        //selects empty div to hold img-divs
        var dogResults = document.querySelector(".daily-dog-result");

        //creates <div> holding element
        var imgHolder = document.createElement("div");

        //set bulma style class for imgHolder
        imgHolder.setAttribute("class", "column " + "is-one-third");

        //set style for imgHolder
        imgHolder.style.textAlign = "center";

        //creates <a> element
        var imgLink = document.createElement("a");

        //set href value for imgLink
        imgLink.setAttribute("href", message[i]);
        imgLink.setAttribute("target", "_blank");

        //creates <img> element
        var imgCreate = document.createElement("img");

        //sets imgCreate src value and class name for styling
        imgCreate.setAttribute("src", message[i]);
        imgCreate.setAttribute("class", "dog-image");

        //create heading for dog breed image
        var dogHeading = document.createElement("h2");

        //creating dogHeading text content
        var breedText = message[i].split("/")[4];
        var breedArray = breedText.split("-");

        //sends dogbreed to capitlizing function and returns the breed
        var heading = capitilizeFirstLetter(breedArray);

        //assigns breed to dogheaing
        dogHeading.textContent = heading

        //append to imgHolder
        imgHolder.appendChild(dogHeading);

        //append to imgLink
        imgLink.appendChild(imgCreate);

        //append to imgHolder
        imgHolder.appendChild(imgLink);

        //append to empty div that is hard coded
        dogResults.appendChild(imgHolder);
    };
};

