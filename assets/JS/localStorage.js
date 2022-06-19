//saves search results to local storage
var breeds = [];

var grabFromLocalStorage = function () {
    if (localStorage.getItem('breeds')) {
        var parseLocalStorage = JSON.parse(localStorage.getItem('breeds'))
        for (let i = 0; i < parseLocalStorage.length; i++) {
            var breedObj ={
                breed:parseLocalStorage[i].breed,
                url: parseLocalStorage[i].url
            };

            breeds.push(breedObj);
        }
    }
}

var saveToLocalStorage = function (breedObj) {
    breeds.push(breedObj);
    localStorage.setItem("breeds", JSON.stringify(breeds));
    populateLocalStorage(breedObj);
}

var populateLocalStorage = function (breeds) {
    var results = JSON.parse(localStorage.getItem('breeds'));
    console.log(results)
    var recentSearchesResults = document.querySelector('.local-storage-results');
    if (results) {
        recentSearchesResults.innerHTML = ' '
        for (let i = 0; i < results.length; i++) {
            var breedName = results[i].breed
            var breedUrl = results[i].url

            console.log(breedName, breedUrl);

            var recentSearchesTitle = document.createElement('a');
            var recentSearchesList = document.createElement('ul');

            recentSearchesTitle.textContent = breedName
            recentSearchesTitle.setAttribute('href', breedUrl);
            recentSearchesTitle.setAttribute("target", "_blank");

            recentSearchesList.appendChild(recentSearchesTitle);
            recentSearchesResults.appendChild(recentSearchesList);
        }
    } else {
        recentSearchesResults.textContent = "Your recent results will show here!"
    }
};

grabFromLocalStorage();
populateLocalStorage();