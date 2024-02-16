//Задание 4: Комбинирование map и filter для обработки данных

const people = [
    { name: 'Иван', age: 23 },
    { name: 'Мария', age: 18 },
    { name: 'Алексей', age: 32 },
    { name: 'Ольга', age: 24 },
    { name: 'Сергей', age: 17 },
    { name: 'Анна', age: 21 }
];

const filtered = people.filter((person) => person.age > 18);
console.log(filtered);

const result = filtered.map((person) => `${person.name}(${person.age})`);
console.log(result);