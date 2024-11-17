import * as fs from "fs";

const brands = [
  "Nike",
  "Adidas",
  "Puma",
  "Reebok",
  "New Balance",
  "Under Armour",
];
const adjectives = [
  "Air",
  "Pro",
  "Ultra",
  "Mini",
  "Predator",
  "Classic",
  "Speed",
];
const themes = [
  "Force",
  "Xplorer",
  "Runner",
  "Glide",
  "Predator",
  "Sprint",
  "Trail",
];
const numbers = ["1", "2", "3", "07", "X", "Elite", "XI", "99"];

const getRandomName = (): string => {
  const brand = getRandomItem(brands);
  const adjective = getRandomItem(adjectives);
  const theme = getRandomItem(themes);
  const number = getRandomItem(numbers);
  return `${brand} ${adjective} ${theme} ${number}`;
};

const getRandomItem = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomSubset = <T>(arr: T[], quantity?: number): T[] => {
  if (!quantity) {
    quantity = Math.floor(Math.random() * arr.length) + 1;
  }
  const subsetSize = Math.floor(Math.random() * quantity) + 1;

  return arr.sort(() => 0.5 - Math.random()).slice(0, subsetSize);
};

const products = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  name: getRandomName(),
  price: Math.floor(Math.random() * 100) + 50,
  size: getRandomSubset([38, 39, 40, 41, 42, 43, 44, 45, 46, 47], 6),
  colors: getRandomSubset(
    [
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
    ],
    6
  ),
  category: getRandomSubset(
    [
      "Casual Shoes",
      "Runner",
      "Sneaker",
      "Hiking",
      "Basketball",
      "Outdoor",
      "Golf",
    ],
    4
  ),
  gender: getRandomItem(["Male", "Female", "Unisex"]),
  tag: getRandomItem(["new", "10% off"]),
  imgSrc: "/src/assets/images/new drops/product-1.png",
}));
const outputFileName = "db.json";

fs.writeFileSync(outputFileName, JSON.stringify({ shoes: products }, null, 2));

console.log(`Generated ${outputFileName} with 25 randomized products!`);
