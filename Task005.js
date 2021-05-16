const superheroes=[
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ];
//1. Maak een array van alle superhelden namen

const newArrayHelden=superheroes.map(function(item){
    return item.name;
});

console.log(newArrayHelden);

//2. Maak een array van alle "lichte" superhelden (< 190 pounds)
const newArrayHeldenLight=superheroes.filter(function(item){
    return item.weight <190;
});

console.log(newArrayHeldenLight);
//3. Maak een array met de namen van de superhelden die 200 pounds wegen
const newArrayHeldenComb=superheroes
.filter(function(item){
    return item.weight==200;})
.map(function(item){
    return item.name;});
console.log(newArrayHeldenComb);

//4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
const comicsFirst=superheroes.map(function(item){
    return item.first_appearance;});

console.log(comicsFirst);

//5a.Maak een array met alle superhelden van DC Comics.
const superHeldenDC= superheroes.filter(function(item){
    return item.publisher==="DC Comics";
})
console.log(superHeldenDC);

//5b. Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
const superHeldenM= superheroes.filter(function(item){
    return item.publisher==="Marvel Comics";
})
console.log(superHeldenM);

//6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op. 
const superHeldenDCg= superheroes
.filter(function(item){
    return item.publisher==="DC Comics";})
.reduce(function(subtotal, item){
    return subtotal+parseInt(item.weight);},0);
console.log(superHeldenDCg);

//7. Doe hetzelfde met alle superhelden van Marvel Comics
const superHeldenM2= superheroes.filter(function(item){
    return item.publisher==="Marvel Comics";})

    //opgebrken om "unknown" gewicht te vermijden!
const MarvelWeight=superHeldenM.reduce(function(subtotal, item){
    if (item.weight!="unknown"){
        let pound= parseInt(item.weight);
        return subtotal+pound;}
    else{return subtotal};
}, 0)

console.log(MarvelWeight);
//8. Bonus: zoek de zwaarste superheld!
let S2=superheroes;
let S3=S2.find(function(item){
    if (item.weight==="unknown"){
    return (item)}
})
S2[14].weight="0"
const zwaar= S2.sort(function (a, b){
        if (parseInt(b.weight)> parseInt(a.weight)){
            return 1;}
        else {return -1;}
})
console.log(zwaar[0]);

