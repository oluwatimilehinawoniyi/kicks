"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "Ashluxe",
    "Vapor",
];
var adjectives = [
    "Air",
    "Pro",
    "Ultra",
    "Mini",
    "Predator",
    "Classic",
    "Speed",
];
var themes = [
    "Force",
    "Xplorer",
    "Runner",
    "Glide",
    "Predator",
    "Sprint",
    "Trail",
];
var numbers = ["1", "2", "3", "07", "X", "II", "XI", "99"];
var getRandomName = function () {
    var brand = getRandomItem(brands);
    var adjective = getRandomItem(adjectives);
    var theme = getRandomItem(themes);
    var number = getRandomItem(numbers);
    return "".concat(brand, " ").concat(adjective, " ").concat(theme, " ").concat(number);
};
var getRandomItem = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};
var getRandomSubset = function (arr, quantity) {
    if (!quantity) {
        quantity = Math.floor(Math.random() * arr.length) + 1;
    }
    var subsetSize = Math.floor(Math.random() * quantity) + 1;
    return arr.sort(function () { return 0.5 - Math.random(); }).slice(0, subsetSize);
};
var products = Array.from({ length: 25 }, function (_, index) { return ({
    id: index + 1,
    name: getRandomName(),
    price: Math.floor(Math.random() * 100) + 50,
    size: getRandomSubset([38, 39, 40, 41, 42, 43, 44, 45, 46, 47], 6),
    colors: getRandomSubset([
        "#000000",
        "#FFFFFF",
        "#FF4500",
        "#228B22",
        "#00274D",
        "#808080",
        "#A52A2A",
        "#FFD700",
        "#F5DEB3",
        "var(--blue)",
        "var(--yellow)",
        "var(--dark-gray)",
        "white",
        "#234D41",
        "#F08155",
    ], 6),
    category: getRandomSubset([
        "Casual Shoes",
        "Runner",
        "Sneaker",
        "Hiking",
        "Basketball",
        "Outdoor",
        "Golf",
    ], 4),
    gender: getRandomItem(["Male", "Female", "Unisex"]),
    tag: getRandomItem(["new", "10% off"]),
    imgSrc: "/src/assets/images/new drops/product-1.png",
}); });
var outputFileName = "db.json";
fs.writeFileSync(outputFileName, JSON.stringify({ shoes: products }, null, 2));
console.log("Generated ".concat(outputFileName, " with 25 randomized products!"));
