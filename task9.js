const countries = ["Россия", "США", "Китай", "Индия"];
const population = [146, 331, 1402, 1380];

function printCountryInfo(country, population) {
    console.log(`Страна: ${country}, Население: ${population} млн.`);
}

console.log("for:");
for (let i = 0; i < countries.length; i++) {
    printCountryInfo(countries[i], population[i]);
}

console.log("\nfor in:");
for (let index in countries) {
    printCountryInfo(countries[index], population[index]);
}