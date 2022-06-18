var breedFormEl = document.querySelector('.breed')

//capitilizing first letter function
var capitilizeFirstLetter = function (word) {
    //splits word by space creating an array. If only 1 word is passed, array will consist of 1
    var breedNameArray = word.split(' ')

    //if the array has content at the first array, second item length wise
    if (breedNameArray[1]) {
        //selects first word
        var breedName1 = breedNameArray[0];
        //selects second word
        var breedName2 = breedNameArray[1];

        //takes first character in single single, capitalize it, joins the rest of the word back together
        var breedPart1 = breedName1.charAt(0).toUpperCase() + breedName1.slice(1);
        var breedPart2 = breedName2.charAt(0).toUpperCase() + breedName2.slice(1);

        //combines word
        var fullBreed = breedPart1 + ' ' + breedPart2

        //returns value
        return fullBreed

    } else {
        //if only one word
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

//capture function, feeds into fetch request
var DataBreed = function (event) {
    event.preventDefault();
    var breedType = document.querySelector('.breed-description')
    var fetchValue = breedType.value.trim()

    fetchDataBreed(capitilizeFirstLetter(fetchValue));
}

//fetch request function
var fetchDataBreed = function (breed) {
    console.log(breed)
    const apiUrl = 'https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/' + breed
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5399255c1amshbbb56c5d4c0e7f4p18301djsn258aa69e77c5',
            'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
        }
    };

    fetch(apiUrl, options)
        .then(response => response.json())
        .then(function (response) {
            console.log(response)
            console.log(response[0])
            console.log(response[0].breed)
            generateContent(response[0])
        })
        .catch(err => console.log(err));
}

var saveToLocalStorage = function (breedObj) {
    var breeds = [];
    if (localStorage.getItem('breeds')) {
        console.log('local storage detected')
        breeds.push(JSON.parse(localStorage.getItem('breeds')));
        breeds.push(breedObj)
    } else {
        console.log('no local storage detected')
        breeds.push(breedObj);
    }
    localStorage.setItem("breeds", JSON.stringify(breeds))
}

//dynamically generated elements function
var generateContent = function (dogInfo) {
    console.log(dogInfo)
    var breedResults = dogInfo[0];
    var results = document.querySelector('.search-results');
    var breedName = document.createElement('h2');
    var breedOrigin = document.createElement('h6');
    var breedUrl = document.createElement('a')
    var imgCreate = document.createElement('img');
    var infoHolder = document.createElement('div');


    breedName.textContent = "Breed Name: " + dogInfo.breed
    breedName.setAttribute('class', 'subtitle is-4 ')
    breedOrigin.textContent = "Country of Origin: " + dogInfo.origin
    breedUrl.textContent = 'For more information, click here!'
    breedUrl.setAttribute('href', dogInfo.url)
    breedUrl.setAttribute('class', 'a')
    imgCreate.setAttribute('src', dogInfo.img)
    imgCreate.setAttribute("class", "dog-image my-2")

    infoHolder.setAttribute('class', 'box my-2')

    infoHolder.appendChild(imgCreate)
    infoHolder.appendChild(breedName)
    infoHolder.appendChild(breedOrigin)
    infoHolder.appendChild(breedUrl)
    results.appendChild(infoHolder)

    var breedObj = {
        breed: dogInfo.breed,
        url: dogInfo.url
    }

    saveToLocalStorage(breedObj);
}

breedFormEl.addEventListener('submit', DataBreed)
