let arrObj = [
    {
        "person": "Mark",
        "age": 25,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"
    },
    {
        "person": "Bill",
        "age": 65,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"
    },
    {
        "person": "Spencer",
        "age": 34,
        "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"
    }
];

/*
//Methode js native pour parcourir un tableau d'objets ( avec for...in )
for(let i in arrObj) {
    // i est l'index de mon tableau d'objet
    console.log("index = " + i);

    // j'accède à mon tableau d'objet comme n'importe quel tableau
    console.log("arrObj = " + arrObj[i]);

    // J'accéde à une propriété particuliére de mon objet ,ici l'age
    console.log("age = " + arrObj[i].age);
}

//Autre méthode : utilisation de forEach
arrObj.forEach(function(arr) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
   console.log("Resultat avec foreach = " + arr.age);
});

 */

let index = 0 // variable for the #next and #previous function at the end

const getListPerson = $('#listPerson')
const getPerson = $('#person')

getPerson.css({
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "flex-direction": "column",
})

getListPerson.css({
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "flex-direction": "column",
})

//Méthode utilisant jQuery

function arrPerson() {

    $.each(arrObj, (index, value) => {
        //Afficher la propriété age pour chaque objet contenu dans mon tableau
        getListPerson.append("<img src=" + value.avatar + "alt='avatar'>")
        getListPerson.append("<p>" + value.person + "<p> Age : " + value.age + "</p></p>")
    })
}

// Display all the avatar on another HTML page

$('#displayAllPerson').click( () => {
    arrPerson()
})

// Display the first avatar by default

$('#img').attr("src", arrObj[0].avatar)
$('#name').html(arrObj[0].person)
$('#age').html("Age : " + arrObj[0].age)

// Display the previous avatar while onClick

$('#prev').click( () => {

    if (index === 0) {
        index = arrObj.length - 1
    } else {
        index--
    }

    // Display the avatar in terms of his index position

    $('#img').attr("src", arrObj[index].avatar)
    $('#name').html(arrObj[index].person)
    $('#age').html("Age : " + arrObj[index].age)

})

// Display the next avatar while onClick

$('#next').click( () => {

    if (index === arrObj.length - 1) {
        index = 0
    } else {
        index++
    }

    // Display the avatar in terms of his index position

    $('#img').attr("src", arrObj[index].avatar)
    $('#name').html(arrObj[index].person)
    $('#age').html("Age : " + arrObj[index].age)

})

