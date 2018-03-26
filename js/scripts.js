function Phone(brand, price, color, camera) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.camera = camera;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", price is " + this.price + " and the camera is " + this.camera + ".");
}

var samsungGalaxy6s = new Phone("Galaxy6s", "1500", "pink", "8Mp");
var iPhone6S = new Phone("Apple", "2250", "silver", "10Mp");
var onePlusOne = new Phone("PlusOne", "2500", "grey", "12Mp");

samsungGalaxy6s.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();
