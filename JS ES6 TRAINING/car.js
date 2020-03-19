class Car {
  color = "red"
  make = "Honda"
  year = 2008

  showProperties = () => {
    console.log("Color: " + this.color + "\n" + "Make: " + this.make + "\n" + "Year: " + this.year)
  }
}

let honda = new Car
honda.color = "green"
honda.showProperties()