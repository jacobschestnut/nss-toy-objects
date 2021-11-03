const toys = [
    {
        id: 1,
        name: "Lightsaber",
        brand: "Disney",
        franchise: "Star Wars",
        age: "4+",
        manufacturer: "Hasbro",
        price: 19.99
    },
    {
        id: 2,
        name: "Hulk Hands",
        brand: "Marvel",
        franchise: "The Incredible Hulk",
        age: "3+",
        manufacturer: "Toy Biz",
        price: 19.99
    },
    {
        id: 3,
        name: "Spider-Man Dual Web Blaster",
        brand: "Marvel",
        franchise: "The Amazing Spiderman",
        age: "3+",
        manufacturer: "Toy Biz",
        price: 19.99
    }
]

const legos = {
    id: 4,
    name: "Legos",
    brand: "Legos",
    franchise: "Legos",
    age: "5-12",
    manufacturer: "The Lego Group",
    price: "~"
}

const rubiksCube = {
    id: 5,
    name: "Rubik's Cube",
    brand: "Rubik's Cube",
    franchise: "Rubik's Cube",
    age: "3+",
    manufacturer: "Rubik's Brand Ltd",
    price: 10.99
}

toys.push(rubiksCube, legos)

const rocket = {
    name: "Rocket",
    brand: "Space",
    franchise: "Space",
    age: "3+",
    manufacturer: "NASA",
    price: 10.99
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id

    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy

    toys.push(toyObject)
}

addToyToInventory(rocket)

for (const toy of toys) {

        toy.price = toy.price + (toy.price * 0.05)

        console.log(`The ${toy.name} made by ${toy.manufacturer} costs $${toy.price} and is meant for children ages ${toy.age}.`)
}