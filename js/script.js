function Phone(brand, price, color, memory, year) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.memory = memory;
	this.year = year;
}
Phone.prototype.printInfo = function() {
	document.write("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " it has " + this.memory + " and was released in " + this.year + ".<br>");
	
}

var iPhone6S = new Phone("Apple", 2250, "silver", "2GB", 2015);
var onePlusOne = new Phone("OnePlus", 1500, "black", "3GB", 2015);
var galaxyS6 = new Phone("Samsung", 1300, "gray", "3GB", 2014);

iPhone6S.printInfo();
onePlusOne.printInfo();
galaxyS6.printInfo();