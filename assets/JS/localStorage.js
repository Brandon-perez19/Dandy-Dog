//saves search results to local storage
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
    localStorage.setItem("breeds", JSON.stringify(breeds));
    populateLocalStorage(breeds)
}

var populateLocalStorage = function (breeds) {
    var results = JSON.parse(localStorage.getItem('breeds'));
    console.log(results)
    var recentSearchesResults = document.querySelector('.local-storage-results');
    if (results) {
        for (let i = 0; i < results.length; i++) {
            var breedName = results[i].breed
            var breedUrl = results[i].url

            console.log(breedName, breedUrl)

            var recentSearchesTitle = document.createElement('a');
            var recentSearchesList = document.createElement('ul');

            recentSearchesTitle.textContent = breedName
            recentSearchesTitle.setAttribute('href', breedUrl);
            recentSearchesList.appendChild(recentSearchesTitle);
            recentSearchesResults.appendChild(recentSearchesList);
        }
    } else {
        recentSearchesResults.textContent = "Your recent results will show here!"
    }
};

populateLocalStorage();