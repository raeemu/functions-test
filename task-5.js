//Задание 5: Использование reduce для агрегации данных

const sales = [
    { product: 'Телефон', price: 50000, quantity: 1 },
    { product: 'Чехол', price: 1500, quantity: 2 },
    { product: 'Зарядное устройство', price: 2500, quantity: 1 }
];

total = sales.reduce(
    (acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0);

console.log(total);