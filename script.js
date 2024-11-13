// ToyCar Constructor Function
function ToyCar(name, color, manufacturer, price, sku, upc, carBrand, carModel, decade, packaging, scale, vehicleType) {
    this.name = name;
    this.color = color;
    this.manufacturer = manufacturer;
    this.price = price;
    this.sku = sku;
    this.upc = upc;
    this.carBrand = carBrand;
    this.carModel = carModel;
    this.decade = decade;
    this.packaging = packaging;
    this.scale = scale;
    this.vehicleType = vehicleType;
}

// Create an instance of the 2023 Dodge Charger Pursuit Police car
let dodgeChargerPoliceCar = new ToyCar(
    "2023 Dodge Charger Pursuit Police",
    "White",
    "Motor Max",
    "$19.99",
    "76996WT-MMT-WHITE",
    "694365739417",
    "Dodge",
    "Charger Pursuit Police",
    "After 2000",
    "Window Box",
    "1/24 Scale",
    "Police Car"
);

// Populate HTML with car details
document.getElementById("car-name").textContent = dodgeChargerPoliceCar.name;
document.getElementById("car-color").textContent = dodgeChargerPoliceCar.color;
document.getElementById("car-manufacturer").textContent = dodgeChargerPoliceCar.manufacturer;
document.getElementById("car-price").textContent = dodgeChargerPoliceCar.price;
document.getElementById("car-sku").textContent = dodgeChargerPoliceCar.sku;
document.getElementById("car-upc").textContent = dodgeChargerPoliceCar.upc;
document.getElementById("car-brand").textContent = dodgeChargerPoliceCar.carBrand;
document.getElementById("car-model").textContent = dodgeChargerPoliceCar.carModel;
document.getElementById("car-decade").textContent = dodgeChargerPoliceCar.decade;
document.getElementById("car-packaging").textContent = dodgeChargerPoliceCar.packaging;
document.getElementById("car-scale").textContent = dodgeChargerPoliceCar.scale;
document.getElementById("car-vehicle-type").textContent = dodgeChargerPoliceCar.vehicleType;

// Toggle car details visibility
function toggleDetails() {
    let details = document.getElementById("car-details");
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
