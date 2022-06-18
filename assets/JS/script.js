//Format Dog Image API Url
//var apiUrl = "https://dog.ceo/api/breeds/image/random"

var apiUrl = "https://dog.ceo/api/breeds/image/random/3"

//make a request to URL
fetch(apiUrl)
.then(function(response) {
    response.json().then(function(data) {
        console.log(data);
        displayPicture(data.message)
    });
});

//function to display photo

var displayPicture = function(message){
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
        var breedArray= breedText.split("-");

        // setting dogHeading text content
        if (breedArray[1]){
            var breedTitle1 = breedArray[1];
            var breedTitle2 = breedArray[0];
            var breedTitle1Uppercase = breedTitle1.charAt(0).toUpperCase() + breedTitle1.slice(1);
            var breedTitle2Uppercase = breedTitle2.charAt(0).toUpperCase() + breedTitle2.slice(1);
            var breedName = breedTitle1Uppercase + " " + breedTitle2Uppercase;
            dogHeading.textContent = breedName;
        } else {
            var breedTitle = breedArray[0];
            var breedName = breedTitle.charAt(0).toUpperCase()+ breedTitle.slice(1);
            dogHeading.textContent = breedName
        };

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

