//capitilizing first letter function
var capitilizeFirstLetter = function (word) {
    //if the array has content at the first array, second item length wise
    if (word[1]) {
        //selects first word
        var breedName1 = word[0];
        //selects second word
        var breedName2 = word[1];

        //takes first character in single single, capitalize it, joins the rest of the word back together
        var breedPart1 = breedName1.charAt(0).toUpperCase() + breedName1.slice(1);
        var breedPart2 = breedName2.charAt(0).toUpperCase() + breedName2.slice(1);

        //combines word
        var fullBreed = breedPart1 + ' ' + breedPart2

        //returns value
        return fullBreed

    } else {
        //if only one word, destructre array 
        var fullBreed1 = word[0];
        return fullBreed1.charAt(0).toUpperCase() + fullBreed1.slice(1);
    }
}