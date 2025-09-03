// JSON ----> Java script object notation, er mane holo json onkta object er motoi, amra ekta object ke 1st e json e transmit kori tahole bisoy ta aro clear hobe

const object = {
    name: 'modon',
    eat : 'codon',
    age: 36,
    friends: "alim dalim, khalim",
    liked: 'movies'
}

// ekhn etake ami jdi JSON  e convert korte cai tahole amake JSON.STRINGYFY use korte hobe

const objectJSON = JSON.stringify(object);
console.log(objectJSON);

// abar jdi ei file take ager mto object file e firay ante cai tahole

const againObject = JSON.parse(objectJSON);
console.log(againObject)