function Storage(items) {
  this.items = items; // Simply store the array directly
}

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (item) {
  this.items.push(item); // Adding an item to the array
};

Storage.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);
  if (index !== -1) {
    this.items.splice(index, 1); // Removing an item from the array
  }
};

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
