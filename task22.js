const booksByAuthors = {
    "Пушкин": ["Евгений Онегин", "Капитанская дочка", "Руслан и Людмила"],
    "Есенин": ["Анна Снегина", "Черный человек"],
    "Данцова": ["Ловушка для Золушки", "Ключ от спальни"],
    "Толстой": ["Война и мир", "Анна Каренина"]
};

for (const author in booksByAuthors) {
    console.log(`Автор: ${author}`);
    console.log("Книги:", booksByAuthors[author].join(", "));
    console.log("-------------------");
}